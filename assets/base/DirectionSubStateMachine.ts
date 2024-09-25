import { AnimationClip } from "cc";
import { PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM } from "../enums";
import { SubStateMachine } from "./SubStateMachine";


const BASE_URL = "texture/player/turnleft"
export default class DirectionSubStateMachine extends SubStateMachine{
    run(){
        const value = this.fsm.getParams(PARAMS_NAME_ENUM.DIRECTION);
        this.currentState = this.stateMachine.get(DIRECTION_ORDER_ENUM[value as number]);
    }
}