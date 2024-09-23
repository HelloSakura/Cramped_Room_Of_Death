import { _decorator } from 'cc';
import {  DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import { EntityManager } from '../../base/EntityManager';
import { WoodenSkeletonStateMachine } from './WoodenSkeletonStateMachine';
import DataManager from '../../runtime/DataManager';
const { ccclass, property } = _decorator;




@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EntityManager {
    async init(){   
        //添加状态机
        this.fsm = this.addComponent(WoodenSkeletonStateMachine);
        await this.fsm.init();
        super.init({
            x:7,
            y:7,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this._onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onChangeDirection, this);
    }

    private _onChangeDirection(isInit:boolean = false){
        if(!DataManager.Instance.player) return;

        const {x:playerX, y:playerY} = DataManager.Instance.player;
        const disX = Math.abs(this.x - playerX);
        const disY = Math.abs(this.y - playerY);

        if(disX === disY && !isInit){
            return;
        }

        if(playerX >= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.RIGHT;
        }
        else if(playerX <= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.LEFT;
        }
        else if(playerX <= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.LEFT;
        }
        else if(playerX >= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.RIGHT;
        }
    }
}


