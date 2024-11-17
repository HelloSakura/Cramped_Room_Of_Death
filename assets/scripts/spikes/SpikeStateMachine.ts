import { _decorator, Animation } from 'cc';
import { ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM } from '../../enums';
import { getInitParamsNumber, getInitParamsTrigger, StateMachine } from '../../base/StateMachine';
import SpikeOneSubStateMachine from './SpikeOneSubStateMachine';
import SpikeTwoSubStateMachine from './SpikeTwoSubStateMachine';
import SpikeFourSubStateMachine from './SpikeFourSubStateMachine';
import SpikeThreeSubStateMachine from './SpikeThreeSubStateMachine';
import { EntityManager } from '../../base/EntityManager';
import { SpikeManager } from './SpikeManager';


const { ccclass, property } = _decorator;

@ccclass('SpikeStateMachine')
export class SpikeStateMachine extends StateMachine {

    async init() {
        //添加animation组件
        this.animationComponent = this.addComponent(Animation);

        this.initParams();
        this.initStateMachine();
        //等待所有资源加载完毕，才结束init
        this.initAnimationEvent();
        await Promise.all(this.waitingList);
    }

    initParams() {
        this.params.set(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT, getInitParamsNumber());
        this.params.set(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, getInitParamsNumber());
    }

    initStateMachine() {
        this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_ONE, new SpikeOneSubStateMachine(this));
        this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_TWO, new SpikeTwoSubStateMachine(this));
        this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_THREE, new SpikeThreeSubStateMachine(this));
        this.stateMachine.set(ENTITY_TYPE_ENUM.SPIKES_FOUR, new SpikeFourSubStateMachine(this));
    }


    initAnimationEvent() {
        //播到最大数量放回
        this.animationComponent.on(Animation.EventType.FINISHED, ()=>{
            const name = this.animationComponent.defaultClip.name;
            const value = this.getParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT);
            if((value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE && name.includes('spikesone/two'))
            || (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO  && name.includes('spikestwo/three'))
            || (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE && name.includes('spikesthree/four'))
            || (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR && name.includes('spikesfour/five'))
            ){
                this.node.getComponent(SpikeManager).backZero();
            }
            
        });
    }


    run() {
        /*
        1.判断一下当前是什么状态；
        2.如果当前处于某个状态，接下来判断参数列表；
        3.如果某个触发器处于触发状态，那么就需要进行状态的改变，就从对应状态机列表那里取到对应的
            状态机，并设置当前状态为改变后的状态
        4.使用set方式，可以在set里面调用当前状态的run方法走对应的逻辑

         */
        //获取总点数
        const value = this.getParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT);

        switch (this._currentState) {
            case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE):
            case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_TWO):
            case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_THREE):
            case this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_FOUR):
                if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE) {
                    this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE);
                }
                else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_TWO) {
                    this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_TWO);
                }
                else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_THREE) {
                    this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_THREE);
                }
                else if (value === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR) {
                    this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_FOUR);
                }
                else {
                    this.currentState = this.currentState;
                }
                break;
            default:
                this.currentState = this.stateMachine.get(ENTITY_TYPE_ENUM.SPIKES_ONE);
        }
    }
}


