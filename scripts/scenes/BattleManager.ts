import { _decorator, Component, Node } from 'cc';
import { TileMapManager } from '../tile/TileMapManager';
import levels, { ILevel } from '../../levels';
import DataManager from '../../runtime/DataManager';
import { TILE_HEIGHT, TILE_WIDTH } from '../tile/TileManger';
import EventManager from '../../runtime/EventManager';
import { EVENT_ENUM } from '../../enums';
import { createUINode } from '../../utils';
import { PlayerManager } from '../player/PlayerManager';
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


    generateTileMap(){
        //创建瓦片地图节点
        let tileMap = new Node();
        tileMap.setParent(this.stage);

        //执行生成逻辑，放在组件上
        const tileMapManager = tileMap.addComponent(TileMapManager);
        tileMapManager.init();

        //地图居中
        this.adaptPos();
    }

    generatePlayer(){
        let player = createUINode();
        player.setParent(this.stage);
        const playManager = player.addComponent(PlayerManager);
        playManager.init();
        
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


