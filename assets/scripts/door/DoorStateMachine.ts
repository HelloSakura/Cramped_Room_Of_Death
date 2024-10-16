import { _decorator, AnimationClip, Animation, Component, SpriteFrame} from 'cc';
import { ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../enums';
import { getInitParamsNumber, getInitParamsTrigger, StateMachine } from '../../base/StateMachine';
import { EntityManager } from '../../base/EntityManager';
import IdleSubStateMachine from './IdleSubStateMachine';
import DeathSubStateMachine from './DeathSubStateMachine';



const { ccclass, property } = _decorator;

@ccclass('DoorStateMachine')
export class DoorStateMachine extends StateMachine {

    async init(){
        //添加animation组件
        this.animationComponent = this.addComponent(Animation);

        this.initParams();
        this.initStateMachine();
        //等待所有资源加载完毕，才结束init
        this.initAnimationEvent();
        await Promise.all(this.waitingList);
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this));
    }


    initAnimationEvent(){

    }


    run(){
        switch(this._currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
                if(this.params.get(PARAMS_NAME_ENUM.DEATH).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.IDLE).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE);
                }
                else{
                    this.currentState = this.currentState;
                }
                break;
            default:
                this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.IDLE);
        }
    }
}


