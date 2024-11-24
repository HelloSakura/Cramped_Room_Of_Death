import { AnimationClip } from "cc";
import State, { ANIMATION_SPEED } from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, PARAMS_NAME_ENUM } from "../../enums";
import DirectionSubStateMachine from "../../base/DirectionSubStateMachine";

const BASE_URL = "texture/smoke/idle"
export default class IdleSubStateMachine extends DirectionSubStateMachine{
    constructor(fsm: StateMachine)
    {
        super(fsm);
        this.stateMachine.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED/1.5));
        this.stateMachine.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED/1.5));
        this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED/1.5));
        this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED/1.5));
    }
}