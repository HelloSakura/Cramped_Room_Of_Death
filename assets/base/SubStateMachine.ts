import { _decorator, AnimationClip, Animation, Component, SpriteFrame} from 'cc';
import { FSM_PARAMS_TYPE_ENUM } from '../enums';
import State from './State';
import { StateMachine } from './StateMachine';
const { ccclass, property } = _decorator;



export abstract class SubStateMachine{
    //当前状态
    private _currentState : State = null;

    stateMachine:Map<string, State> = new Map();

    constructor(public fsm: StateMachine){
        
    }

    //get
    get currentState(){
        return this._currentState;
    }

    //set
    set currentState(newState: State){
        this._currentState = newState;
        this._currentState.run();
    }


    abstract run():void;
}


