import { _decorator, UITransform } from 'cc';
import {  DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import DataManager from '../../runtime/DataManager';
import { EntityManager } from '../../base/EntityManager';
import { BurstStateMachine } from './BurstStateMachine';
import { TILE_WIDTH, TILE_HEIGHT } from '../tile/TileManger';
const { ccclass, property } = _decorator;




@ccclass('BurstManager')
export class BurstManager extends EntityManager {
    
    onDestroy(): void {
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._onBurst);  
    }
    
    async init(params){   
        //添加状态机
        this.fsm = this.addComponent(BurstStateMachine);
        await this.fsm.init();
        super.init(params);
        //改写父类对于瓦片大小的设定，burst只占一个瓦片大小
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onBurst, this);     
    }

    update(): void {
        //重写update，不需要做偏移
        this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT);
    }
    
    private _onBurst(){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return;

        //拿到玩家信息并判断坐标是否一致
        const {x:playerX, y:playerY} = DataManager.Instance.player;
        if(this.x === playerX && this.y === playerY && this.state === ENTITY_STATE_ENUM.IDLE){
            this.state = ENTITY_STATE_ENUM.ATTACK;
        }
        else if(this.state === ENTITY_STATE_ENUM.ATTACK){
            this.state = ENTITY_STATE_ENUM.DEATH;
            if(this.x === playerX && this.y === playerY){
                EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.AIRDEATH);
            }
        }
    }

}


