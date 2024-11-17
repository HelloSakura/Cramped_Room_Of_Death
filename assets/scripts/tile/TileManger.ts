import { _decorator, Component, Sprite, SpriteFrame, UITransform } from 'cc';
import { TILE_TYPE_ENUM } from '../../enums';
const { ccclass, property } = _decorator;


//瓦片尺寸
export const TILE_WIDTH = 55;
export const TILE_HEIGHT = 55;
@ccclass('TileManger')
export class TileManger extends Component {
    type: TILE_TYPE_ENUM;
    moveable: boolean;
    turnable: boolean;
    init(type: TILE_TYPE_ENUM, spriteFrame : SpriteFrame, i:number, j:number){      
        this.type = type;
        if(
           this.type === TILE_TYPE_ENUM.WALL_COLUMN
        || this.type === TILE_TYPE_ENUM.WALL_LEFT_BOTTOM
        || this.type === TILE_TYPE_ENUM.WALL_LEFT_TOP
        || this.type === TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM
        || this.type === TILE_TYPE_ENUM.WALL_RIGHT_TOP
        || this.type === TILE_TYPE_ENUM.WALL_ROW
        ){
            //墙壁不可走也不可转
            this.moveable = false;
            this.turnable = false;
        }
        else if(
           this.type === TILE_TYPE_ENUM.CLIFF_CENTER
        || this.type === TILE_TYPE_ENUM.CLIFF_LEFT
        || this.type === TILE_TYPE_ENUM.CLIFF_RIGHT 
        ){
            //悬崖可转但不可走
            this.moveable = false;
            this.turnable = true;
        }
        else if(this.type === TILE_TYPE_ENUM.FLOOR){
            //地板可转可走
            this.turnable = true;
            this.moveable = true;
        }
        

        
        const sprite = this.node.addComponent(Sprite);
        sprite.spriteFrame = spriteFrame         

        //添加UI组件定义大小
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

        //设置位置
        this.node.setPosition(i*TILE_WIDTH, -j*TILE_HEIGHT);
    }
}


