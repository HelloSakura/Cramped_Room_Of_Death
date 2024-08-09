import { _decorator, Component, Sprite, UITransform } from 'cc';
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, ENTITY_TYPE_ENUM } from '../enums';
import { PlayerStateMachine } from '../scripts/player/PlayerStateMachine';
import { TILE_WIDTH, TILE_HEIGHT } from '../scripts/tile/TileManger';
import { IEntity } from '../levels';

const { ccclass, property } = _decorator;




@ccclass('EntityManager')
export class EntityManager extends Component {

    x:number = 0;
    y:number = 0;

    //状态机
    fsm: PlayerStateMachine;

    private _direction:DIRECTION_ENUM;
    private _state:ENTITY_STATE_ENUM;
    private type:ENTITY_TYPE_ENUM;

    get direction(){
        return this._direction;
    }

    set direction(newDirection: DIRECTION_ENUM){
        this._direction = newDirection;
        this.fsm.setParams(PARAMS_NAME_ENUM.DIRECTION, DIRECTION_ORDER_ENUM[this._direction]);
    }

    get state(){
        return this._state;
    }

    set state(newState: ENTITY_STATE_ENUM){
        this._state = newState;
        this.fsm.setParams(this._state, true);
    }


    async init(params: IEntity){
        //动画模块
        //添加一个spite组件
        const sprite = this.addComponent(Sprite); 
        //设置为custom模式，可以自定义宽高
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        //设置宽高
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH*4, TILE_HEIGHT*4);


        this.x = params.x;
        this.y = params.y;
        this.type = params.type;
        this._direction = params.direction;
        this.state = params.state;
    }

    update(){
        //虚拟坐标转换为瓦片坐标
        //瓦片地图左上角为原点
        //注意人物大小与瓦片之间的偏移
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5);
    }

}


