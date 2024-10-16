import { _decorator, AnimationClip, Animation, Component, SpriteFrame} from 'cc';
import { ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../enums';
import { getInitParamsNumber, getInitParamsTrigger, StateMachine } from '../../base/StateMachine';
import IdleSubStateMachine from './IdleSubStateMachine';
import AttackSubStateMachine from './AttackSubStateMachine';
import { EntityManager } from '../../base/EntityManager';
import DeadSubStateMachine from './DeadSubStateMachine';


const { ccclass, property } = _decorator;

@ccclass('WoodenSkeletonStateMachine')
export class WoodenSkeletonStateMachine extends StateMachine {

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
        this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new DeadSubStateMachine(this));
    }


    initAnimationEvent(){
        //注册动画播放结束事件，检测
        this.animationComponent.on(Animation.EventType.FINISHED, ()=>{
        const name = this.animationComponent.defaultClip.name;
        const whiteList = ['attack'];
        if(whiteList.some(v => name.includes(v))){
            this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
        } 
        });
    }


    run(){
        /*
        1.判断一下当前是什么状态；
        2.如果当前处于某个状态，接下来判断参数列表；
        3.如果某个触发器处于触发状态，那么就需要进行状态的改变，就从对应状态机列表那里取到对应的
            状态机，并设置当前状态为改变后的状态
        4.使用set方式，可以在set里面调用当前状态的run方法走对应的逻辑

         */
        switch(this._currentState){
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK):
            case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
                if(this.params.get(PARAMS_NAME_ENUM.DEATH).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.ATTACK).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK);
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


