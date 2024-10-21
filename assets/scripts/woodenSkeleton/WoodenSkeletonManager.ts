import { _decorator } from 'cc';
import {  DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import { WoodenSkeletonStateMachine } from './WoodenSkeletonStateMachine';
import DataManager from '../../runtime/DataManager';
import { EnemyManager } from '../../base/EnemyManager';
const { ccclass, property } = _decorator;




@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EnemyManager {
    
    onDestroy(): void {
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._onAttack);  
    }
    
    async init(params){   
        //添加状态机
        this.fsm = this.addComponent(WoodenSkeletonStateMachine);
        await this.fsm.init();
        super.init(params);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onAttack, this);     
    }


    private _onAttack(){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return;

        const {x:playerX, y:playerY, state:playerState} = DataManager.Instance.player;
        if(
           ((this.x === playerX && Math.abs(this.y - playerY) <= 1)
        || (this.y === playerY && Math.abs(this.x - playerX) <= 1))
        && (playerState !== ENTITY_STATE_ENUM.DEATH)
        && (playerState !== ENTITY_STATE_ENUM.AIRDEATH)
        ){
            this.state = ENTITY_STATE_ENUM.ATTACK;
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH);
        }
        else{
            this.state = ENTITY_STATE_ENUM.IDLE;
        }
         
    }

}


