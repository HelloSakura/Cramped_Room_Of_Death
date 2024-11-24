import { _decorator } from 'cc';
import {  DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import { EntityManager } from '../../base/EntityManager';
import DataManager from '../../runtime/DataManager';
import { EnemyManager } from '../../base/EnemyManager';
import { SmokeStateMachine } from './SmokeStateMachine';
const { ccclass, property } = _decorator;




@ccclass('SmokeManager')
export class SmokeManager extends EntityManager {
    
    onDestroy(): void {
        super.onDestroy();
    }
    
    async init(params){   
        //添加状态机
        this.fsm = this.addComponent(SmokeStateMachine);
        await this.fsm.init();
        super.init(params);
    }

}


