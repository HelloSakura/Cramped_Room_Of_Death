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
            x:2,
            y:4,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction:DIRECTION_ENUM.TOP,
            state:ENTITY_STATE_ENUM.IDLE
        });
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this._onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onAttack, this);

        //保证不管是敌人先生成or玩家先生成都会判断
        this._onChangeDirection(true);
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

    private _onAttack(){
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


