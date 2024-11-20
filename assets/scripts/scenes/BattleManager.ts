import { _decorator, Component, Node } from 'cc';
import { TileMapManager } from '../tile/TileMapManager';
import levels, { ILevel } from '../../levels';
import DataManager from '../../runtime/DataManager';
import { TILE_HEIGHT, TILE_WIDTH } from '../tile/TileManger';
import EventManager from '../../runtime/EventManager';
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import { createUINode } from '../../utils';
import { PlayerManager } from '../player/PlayerManager';
import { WoodenSkeletonManager } from '../woodenSkeleton/WoodenSkeletonManager';
import { DoorManager } from '../door/DoorManager';
import { IronSkeletonManager } from '../ironSkeleton/IronSkeletonManager';
import { BurstManager } from '../burst/BurstManager';
import { SpikeManager } from '../spikes/SpikeManager';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    level:ILevel;
    stage:Node;

    //
    onLoad(){
        DataManager.Instance.levelIndex = 12;
        //绑定切换关卡
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this._nextLevel, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._checkArrivedDoor, this);
    }

    onDestroy(){
        //解绑切换关卡
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this._nextLevel)
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._checkArrivedDoor);
    }

    start() {
        this.generateStage();
        this.initLevel();
    }

    async initLevel(){
        const level = levels[`level${DataManager.Instance.levelIndex}`];
        if(level){
            this.clearLevel();
            this.level = level;
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            
            await Promise.all([
                this.generateTileMap(),
                this.generateBurst(),
                this.generateSpikes(),
                this.generateDoor(),
                this.generateEnemy(),    
            ]);
            //生成player
            await this.generatePlayer()
            
            
        }
    }

    private _nextLevel(){
        DataManager.Instance.levelIndex++;
        this.initLevel();
    }

    //检测玩家是否到门，且敌人全部死亡
    private _checkArrivedDoor(){
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

    adaptPos(){
        //将舞台置为中间位置
        //解包
        const {mapRowCount, mapColumnCount} = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount/2;
        const disY = TILE_HEIGHT * mapColumnCount/2 + 100;
        this.stage.setPosition(-disX, disY);

    }
}


