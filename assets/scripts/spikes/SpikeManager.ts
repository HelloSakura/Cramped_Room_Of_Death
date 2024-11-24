import { _decorator, Component, Sprite, UITransform } from 'cc';
import { StateMachine } from '../../base/StateMachine';
import { ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM } from '../../enums';
import { ISpikes } from '../../levels';
import { randomByLen } from '../../utils';
import { TILE_WIDTH, TILE_HEIGHT } from '../tile/TileManger';
import { SpikeStateMachine } from './SpikeStateMachine';
import EventManager from '../../runtime/EventManager';
import DataManager from '../../runtime/DataManager';


const { ccclass, property } = _decorator;

@ccclass('SpikeManager')
export class SpikeManager extends Component {
    id:string = randomByLen(12);
    x:number = 0;
    y:number = 0;

    //状态机
    fsm: StateMachine;

    private _curCount:number;
    private _totalCount:number;
    private type:ENTITY_TYPE_ENUM;

    get CurCount(){
        return this._curCount;
    }

    set CurCount(newCount: number){
        this._curCount = newCount;
        this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, newCount);
    }

    get TotalCount(){
        return this._totalCount;
    }

    set TotalCount(newCount: number){
        this._totalCount = newCount;
        this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, newCount);
    }


    async init(params: ISpikes){
        //动画模块
        //添加一个spite组件
        const sprite = this.addComponent(Sprite); 
        //设置为custom模式，可以自定义宽高
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        //设置宽高
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH*4, TILE_HEIGHT*4);

        //添加状态机
        this.fsm = this.addComponent(SpikeStateMachine);
        await this.fsm.init();
        this.x = params.x;
        this.y = params.y;
        this.type = params.type;
        this.TotalCount = SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[this.type]
        this.CurCount = params.count;

        //监听移动事件，改变尖刺数量
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onLoop, this);
    }

    update(){
        //虚拟坐标转换为瓦片坐标
        //瓦片地图左上角为原点
        //注意人物大小与瓦片之间的偏移
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5);
    }

    onDestroy(): void {
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._onLoop);
    }

    private _onLoop(){
        if(this.CurCount == this.TotalCount){
            this.CurCount = 1;
        }
        else{
            this.CurCount++;
        }
        this.onAttack();
    }

    //播放的次数回到零
    public backZero(){
        this.CurCount = 0;
    }

    onAttack(){
        if(!DataManager.Instance.player) return;
        const {x:playerX, y:playerY} = DataManager.Instance.player;
        if(this.x === playerX && this.y === playerY && this.CurCount == this.TotalCount){
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH);
        }
    }
}


