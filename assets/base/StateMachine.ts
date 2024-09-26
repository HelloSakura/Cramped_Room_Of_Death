import { _decorator, AnimationClip, Animation, Component, SpriteFrame} from 'cc';
import { FSM_PARAMS_TYPE_ENUM } from '../enums';
import State from './State';
import { SubStateMachine } from './SubStateMachine';
const { ccclass, property } = _decorator;

//参数值类型
type ParamsValueType = boolean | number;

export interface IParamsValue{
    type: FSM_PARAMS_TYPE_ENUM,
    value: ParamsValueType
}

export const getInitParamsTrigger = ()=>{
    return {
        type: FSM_PARAMS_TYPE_ENUM.TRIGGER,
        value: false
    }
}

export const getInitParamsNumber = ()=>{
    return {
        type: FSM_PARAMS_TYPE_ENUM.NUMBER,
        value: 0
    }
}

@ccclass('StateMachine')
export abstract class StateMachine extends Component {
    //当前状态
    protected _currentState : State | SubStateMachine = null;

    //需要一个参数列表和状态机列表
    params:Map<string, IParamsValue> = new Map();
    stateMachine:Map<string, State | SubStateMachine> = new Map();

    //动画组件
    animationComponent:Animation;

    //保证资源加载数组
    waitingList:Array<Promise<SpriteFrame[]>> = [];

    //get
    get currentState(){
        return this._currentState;
    }

    //set
    set currentState(newState){
        this._currentState = newState;
        this._currentState.run();
    }

    resetTrigger(){
        for(const [_, value] of this.params){
            if(value.type === FSM_PARAMS_TYPE_ENUM.TRIGGER){
                value.value = false;    //动画系统trigger触发后需要重置清空
            }
        }
    }

    getParams(paramsName: string){
        if(this.params.has(paramsName)){
            return this.params.get(paramsName).value;
        }
    }

    setParams(paramsName: string, value: ParamsValueType){
        if(this.params.has(paramsName)){
            this.params.get(paramsName).value = value;
            this.run();
            this.resetTrigger();
        }
    }


    abstract init():void;
    abstract run():void;
}


