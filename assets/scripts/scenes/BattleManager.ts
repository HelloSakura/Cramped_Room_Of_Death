import { _decorator, Component, director, Node } from 'cc';
import { TileMapManager } from '../tile/TileMapManager';
import levels, { ILevel } from '../../levels';
import DataManager, { IRecord } from '../../runtime/DataManager';
import { TILE_HEIGHT, TILE_WIDTH } from '../tile/TileManger';
import EventManager from '../../runtime/EventManager';
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, SCENE_ENUM } from '../../enums';
import { createUINode } from '../../utils';
import { PlayerManager } from '../player/PlayerManager';
import { WoodenSkeletonManager } from '../woodenSkeleton/WoodenSkeletonManager';
import { DoorManager } from '../door/DoorManager';
import { IronSkeletonManager } from '../ironSkeleton/IronSkeletonManager';
import { BurstManager } from '../burst/BurstManager';
import { SpikeManager } from '../spikes/SpikeManager';
import { SmokeManager } from '../smoke/SmokeManager';
import FadeManager from '../../runtime/FadeManager';
import { ShakeManager } from '../ui/ShakeManager';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    level:ILevel;
    stage:Node;
    //分层渲染的思想很重要
    private _smokeLayer:Node;
    private _inited:boolean = false;

    //
    onLoad(){
        DataManager.Instance.levelIndex = 1;
        //绑定切换关卡
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this._nextLevel, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._checkArrivedDoor, this);
        EventManager.Instance.on(EVENT_ENUM.SHOW_SMOKE, this.generateSmoke, this);
        EventManager.Instance.on(EVENT_ENUM.RECORD_STEP, this.record, this);
        EventManager.Instance.on(EVENT_ENUM.REVOKE_STEP, this.revoke, this);
        EventManager.Instance.on(EVENT_ENUM.RESTART_LEVEL, this.initLevel, this);
        EventManager.Instance.on(EVENT_ENUM.OUT_BATTLE, this.outBattle, this);
    }

    onDestroy(){
        //解绑切换关卡
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this._nextLevel)
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._checkArrivedDoor);
        EventManager.Instance.off(EVENT_ENUM.SHOW_SMOKE, this.generateSmoke);
        EventManager.Instance.off(EVENT_ENUM.RECORD_STEP, this.record);
        EventManager.Instance.off(EVENT_ENUM.REVOKE_STEP, this.revoke);
        EventManager.Instance.off(EVENT_ENUM.RESTART_LEVEL, this.initLevel);
        EventManager.Instance.off(EVENT_ENUM.OUT_BATTLE, this.outBattle, this);
    }

    start() {
        this.generateStage();
        this.initLevel();
    }

    async initLevel(){
        const level = levels[`level${DataManager.Instance.levelIndex}`];
        console.log(this.node.getWorldPosition());
        if(level){
            if(this._inited){
                await FadeManager.Instance.fadeIn();
            }
            else{
                await FadeManager.Instance.mask();
            }
            this.clearLevel();
            this.level = level;
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            
            await Promise.all([
                this.generateTileMap(),
                this.generateBurst(),
                this.generateSpikes(),
                this.generateSmokeLayer(),
                this.generateDoor(),
                this.generateEnemy(),
                this.generatePlayer()
            ]);
            //生成player
            
            
            await FadeManager.Instance.fadeOut();
            this._inited = true;
        }
    }


    private _nextLevel(){
        DataManager.Instance.levelIndex++;
        this.initLevel();
    }

    //检测玩家是否到门，且敌人全部死亡
    private _checkArrivedDoor(){
        if(!DataManager.Instance.player || !DataManager.Instance.door) return;
        let {x:playerX, y:playerY} = DataManager.Instance.player;
        let {x:doorX, y:doorY, state:doorState} = DataManager.Instance.door;
        
        if(playerX === doorX && playerY === doorY && doorState === ENTITY_STATE_ENUM.DEATH){
            EventManager.Instance.emit(EVENT_ENUM.NEXT_LEVEL);
        }
    }

    clearLevel(){
        //清空数据，销毁上一关地图后再加载下一关
        this.stage.destroyAllChildren();
        DataManager.Instance.reset();
    }

    generateStage(){
        //创建舞台，所有单元放在舞台上
        this.stage = new Node();
        this.stage.setParent(this.node);
        this.stage.addComponent(ShakeManager);
        this.stage.name = "stage";
    }


    async generateTileMap(){
        //创建瓦片地图节点
        let tileMap = new Node();
        tileMap.setParent(this.stage);

        //执行生成逻辑，放在组件上
        const tileMapManager = tileMap.addComponent(TileMapManager);
        await tileMapManager.init();

        //地图居中
        this.adaptPos();
    }


    async generateBurst(){
        let promise = [];
        this.level.bursts.forEach((burst)=>{
            const node = createUINode();
            node.setParent(this.stage);
            const manger = node.addComponent(BurstManager);
            //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度
            promise.push(manger.init(burst));
            //注意名字大小写，大写是类名
            DataManager.Instance.bursts.push(manger); 
        })

        await Promise.all(promise);
    }

    async generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playManager = player.addComponent(PlayerManager);
        await playManager.init(this.level.player);
        DataManager.Instance.player = playManager;
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_BORN, true);
        
    }

    async generateSpikes(){
        let promise = [];
        this.level.spikes.forEach((spike)=>{
            const node = createUINode();
            node.setParent(this.stage);
            const manger = node.addComponent(SpikeManager);
            //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度
            promise.push(manger.init(spike));
            //注意名字大小写，大写是类名
            DataManager.Instance.spikes.push(manger); 
        })
        await Promise.all(promise);
    }
    async generateDoor(){
        const door = createUINode();
        door.setParent(this.stage);
        const doorManager = door.addComponent(DoorManager);
        await doorManager.init(this.level.door);
        DataManager.Instance.door = doorManager;
    }

    async generateEnemy(){
        let promise = [];
        this.level.enemies.forEach((enemy)=>{
            const node = createUINode();
            node.setParent(this.stage);
            const Manger = enemy.type === ENTITY_TYPE_ENUM.SKELETON_WOODEN ? WoodenSkeletonManager : IronSkeletonManager;
            const manger = node.addComponent(Manger);
            //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度
            promise.push(manger.init(enemy));
            //注意名字大小写，大写是类名
            DataManager.Instance.enemies.push(manger); 
        })

        await Promise.all(promise);
    }

    async generateSmoke(x:number, y:number, direction:DIRECTION_ENUM){
        //循环利用
        const item = DataManager.Instance.smokes.find(smoke=>smoke.state === ENTITY_STATE_ENUM.DEATH);
        if(item){
            item.x = x;
            item.y = y;
            item.direction = direction;
            //重新设置一下位置，保证烟雾生成的位置是实际希望的位置
            this.node.setPosition(x * TILE_WIDTH - TILE_WIDTH * 1.5, -y * TILE_HEIGHT + TILE_HEIGHT * 1.5);
            return;
        }
        
        const smoke = createUINode();
        smoke.setParent(this._smokeLayer);
        const smokeManager = smoke.addComponent(SmokeManager);
        await smokeManager.init({
            x,
            y,
            direction,
            state:ENTITY_STATE_ENUM.IDLE,
            type:ENTITY_TYPE_ENUM.SMOKE
        });
        DataManager.Instance.smokes.push(smokeManager);
    }

    async generateSmokeLayer(){
        this._smokeLayer = createUINode();
        this._smokeLayer.setParent(this.stage);
    }
    adaptPos(){
        //将舞台置为中间位置
        //解包
        const {mapRowCount, mapColumnCount} = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount/2;
        const disY = TILE_HEIGHT * mapColumnCount/2 + 100;
        //适配配置时取消震动
        this.stage.getComponent(ShakeManager).stop();
        this.stage.setPosition(-disX, disY);

    }

    record(){
        const item:IRecord = {
            player:{
                x:DataManager.Instance.player.x,
                y:DataManager.Instance.player.y,
                type:DataManager.Instance.player.type,
                direction:DataManager.Instance.player.direction,
                state:
                        DataManager.Instance.player.state === ENTITY_STATE_ENUM.IDLE ||
                        DataManager.Instance.player.state === ENTITY_STATE_ENUM.DEATH ||
                        DataManager.Instance.player.state === ENTITY_STATE_ENUM.AIRDEATH
                        ? ENTITY_STATE_ENUM.IDLE : DataManager.Instance.player.state
            },

            door:{
                x:DataManager.Instance.door.x,
                y:DataManager.Instance.door.y,
                type:DataManager.Instance.door.type,
                direction:DataManager.Instance.door.direction,
                state:DataManager.Instance.door.state,
            },

            enemies:DataManager.Instance.enemies.map(({x, y, direction, state, type})=>({
                x,
                y,
                direction,
                state,
                type
            })),

            bursts:DataManager.Instance.bursts.map(({x, y, direction, state, type})=>({
                x,
                y,
                direction,
                state,
                type
            })),

            spikes:DataManager.Instance.spikes.map(({x, y, type, CurCount})=>({
                x,
                y,
                type,
                CurCount
            })),
        }

        DataManager.Instance.records.push(item);
    }

    revoke(){
        const item = DataManager.Instance.records.pop();
        if(item){
            DataManager.Instance.player.x = DataManager.Instance.player.targetX = item.player.x;
            DataManager.Instance.player.y = DataManager.Instance.player.targetY = item.player.y;
            DataManager.Instance.player.state = item.player.state;
            DataManager.Instance.player.direction = item.player.direction;

            DataManager.Instance.door.x = item.door.x;
            DataManager.Instance.door.y = item.door.y;
            DataManager.Instance.door.state = item.door.state;
            DataManager.Instance.door.direction = item.door.direction;

            for(let i = 0; i < DataManager.Instance.enemies.length; i++){
                const enemy = DataManager.Instance.enemies[i];
                enemy.x = item.enemies[i].x;
                enemy.y = item.enemies[i].y;
                enemy.state = item.enemies[i].state;
                enemy.direction = item.enemies[i].direction;
            }

            for(let i = 0; i < DataManager.Instance.bursts.length; i++){
                const burst = DataManager.Instance.bursts[i];
                burst.x = item.bursts[i].x;
                burst.y = item.bursts[i].y;
                burst.state = item.bursts[i].state;
            }

            for(let i = 0; i < DataManager.Instance.spikes.length; i++){
                const spike = DataManager.Instance.spikes[i];
                spike.x = item.spikes[i].x;
                spike.y = item.spikes[i].y;
                spike.type = item.spikes[i].type;
                spike.CurCount = item.spikes[i].CurCount;
            }
        }
    }


    async outBattle(){
        await FadeManager.Instance.fadeIn();
        director.loadScene(SCENE_ENUM.Start);
    }

    
}


