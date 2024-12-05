import State, { ANIMATION_SPEED } from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { DIRECTION_ENUM, SHAKE_TYPE_ENUM } from "../../enums";
import DirectionSubStateMachine from "../../base/DirectionSubStateMachine";
import { AnimationClip } from "cc";

const BASE_URL = "texture/player/attack"
export default class AttackSubStateMachine extends DirectionSubStateMachine {
    constructor(fsm: StateMachine) {
        super(fsm);
        this.stateMachine.set(
            DIRECTION_ENUM.TOP,
            new State(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [{
                frame: ANIMATION_SPEED * 4, //第5帧
                func: 'onAttackShake',
                params: [SHAKE_TYPE_ENUM.TOP],
            }])
        );
        this.stateMachine.set(
            DIRECTION_ENUM.BOTTOM, 
            new State(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [{
                frame: ANIMATION_SPEED * 4, //第5帧
                func: 'onAttackShake',
                params: [SHAKE_TYPE_ENUM.BOTTOM],
            }])
        );
        this.stateMachine.set(
            DIRECTION_ENUM.LEFT, 
            new State(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [{
                frame: ANIMATION_SPEED * 4, //第5帧
                func: 'onAttackShake',
                params: [SHAKE_TYPE_ENUM.LEFT],
            }])
        );
        this.stateMachine.set(
            DIRECTION_ENUM.RIGHT, 
            new State(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Normal, ANIMATION_SPEED, [{
                frame: ANIMATION_SPEED * 4, //第5帧
                func: 'onAttackShake',
                params: [SHAKE_TYPE_ENUM.RIGHT],
            }])
        );
    }
}