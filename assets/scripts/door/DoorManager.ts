import { _decorator } from 'cc';
import {  DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import { EntityManager } from '../../base/EntityManager';
import { DoorStateMachine } from './DoorStateMachine';
import DataManager from '../../runtime/DataManager';
const { ccclass, property } = _decorator;




@ccclass('DoorManager')
export class DoorManager extends EntityManager {
    
    onDestroy(): void {
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.DOOR_OPEN, this._onOpen); 
    }
    
    async init(){   
        //添加状态机
        this.fsm = this.addComponent(DoorStateMachine);
        await this.fsm.init();
        super.init({
            x:7,
            y:8,
            type: ENTITY_TYPE_ENUM.DOOR,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        EventManager.Instance.on(EVENT_ENUM.DOOR_OPEN, this._onOpen, this);
   
    }

    private _onOpen(){
        if(DataManager.Instance.enemies.every(enemy=>enemy.state === ENTITY_STATE_ENUM.DEATH) 
        && this.state !== ENTITY_STATE_ENUM.DEATH
        ){
            this.state = ENTITY_STATE_ENUM.DEATH;
        }
    }


}


