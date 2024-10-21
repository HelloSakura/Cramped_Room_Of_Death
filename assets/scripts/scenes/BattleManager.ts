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
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    level:ILevel;
    stage:Node;

    //
    onLoad(){
        //绑定切换关卡
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this.nextLevel, this);
    }

    onDestroy(){
        //解绑切换关卡
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this.nextLevel)
    }

    start() {
        this.generateStage();
        this.initLevel();
    }

    initLevel(){
        const level = levels[`level${DataManager.Instance.levelIndex}`];
        if(level){
            this.clearLevel();
            this.level = level;
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;

            this.generateTileMap();
            this.generateDoor();
            this.generateEnemy();
            //生成player
            this.generatePlayer();
            
            
        }
    }

    nextLevel(){
        DataManager.Instance.levelIndex++;
        this.initLevel();
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

    async generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playManager = player.addComponent(PlayerManager);
        await playManager.init({
            x:2,
            y:8,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.player = playManager;
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_BORN, true);
        
    }

    async generateDoor(){
        const door = createUINode();
        door.setParent(this.stage);
        const doorManager = door.addComponent(DoorManager);
        await doorManager.init();
        DataManager.Instance.door = doorManager;
    }

    async generateEnemy(){
        const enemy = createUINode();
        enemy.setParent(this.stage);
        const woodenSkeletonManager = enemy.addComponent(WoodenSkeletonManager);
        await woodenSkeletonManager.init({
            x:5,
            y:2,
            type: ENTITY_TYPE_ENUM.SKELETON_WOODEN,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        //注意名字大小写，大写是类名
        DataManager.Instance.enemies.push(woodenSkeletonManager);


        const ironSkeleton = createUINode();
        ironSkeleton.setParent(this.stage);
        const ironSkeletonManager = ironSkeleton.addComponent(IronSkeletonManager);
        await ironSkeletonManager.init({
            x:2,
            y:2,
            type: ENTITY_TYPE_ENUM.SKELETON_IRON,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        //注意名字大小写，大写是类名
        DataManager.Instance.enemies.push(ironSkeletonManager);

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


