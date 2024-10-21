import { _decorator, AnimationClip, Animation, Component, SpriteFrame} from 'cc';
import { ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../enums';
import State from '../../base/State';
import { getInitParamsNumber, getInitParamsTrigger, StateMachine } from '../../base/StateMachine';
import TurnLeftSubStateMachine from './TurnLeftSubStateMachine';
import IdleSubStateMachine from './IdleSubStateMachine';
import TurnRightSubStateMachine from './TurnRightSubStateMachine';
import BlockFrontSubStateMachine from './BlockFrontSubStateMachine';
import { PlayerManager } from './PlayerManager';
import { EntityManager } from '../../base/EntityManager';
import BlockTurnLeftSubStateMachine from './BlockTurnLeftSubStateMachine';
import BlockLeftSubStateMachine from './BlockLeftSubStateMachine';
import BlockBackSubStateMachine from './BlockBackSubStateMachine';
import BlockTurnRightSubStateMachine from './BlockTurnRightSubStateMachine';
import BlockRightSubStateMachine from './BlockRightSubStateMachine';
import DeadSubStateMachine from './DeadSubStateMachine';
import AttackSubStateMachine from './AttackSubStateMachine';
const { ccclass, property } = _decorator;

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends StateMachine {

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
        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.TURNRIGHT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
        this.params.set(PARAMS_NAME_ENUM.BLOCKFRONT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.BLOCKLEFT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.BLOCKBACK, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.BLOCKRIGHT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParamsTrigger());
    }

    initStateMachine(){
        this.stateMachine.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNLEFT, new TurnLeftSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.TURNRIGHT, new TurnRightSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKFRONT, new BlockFrontSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKLEFT, new BlockLeftSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKBACK, new BlockBackSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKRIGHT, new BlockRightSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNLEFT, new BlockTurnLeftSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.BLOCKTURNRIGHT, new BlockTurnRightSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.DEATH, new DeadSubStateMachine(this));
        this.stateMachine.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this));
    }


    initAnimationEvent(){
        //注册动画播放结束事件，检测
        this.animationComponent.on(Animation.EventType.FINISHED, ()=>{
            const name = this.animationComponent.defaultClip.name;
            const whiteList = ['block','turn', 'attack'];
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
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKLEFT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKBACK):
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKRIGHT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.TURNRIGHT):
            case this.stateMachine.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachine.get(PARAMS_NAME_ENUM.DEATH):
            case this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK):
                if(this.params.get(PARAMS_NAME_ENUM.ATTACK).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.ATTACK);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.DEATH).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.DEATH);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNLEFT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKTURNRIGHT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKFRONT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKFRONT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKLEFT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKBACK).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKBACK);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.BLOCKRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.BLOCKRIGHT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.TURNLEFT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNLEFT);
                }
                else if(this.params.get(PARAMS_NAME_ENUM.TURNRIGHT).value){
                    this.currentState = this.stateMachine.get(PARAMS_NAME_ENUM.TURNRIGHT);
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


