import State from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { DIRECTION_ENUM } from "../../enums";
import DirectionSubStateMachine from "../../base/DirectionSubStateMachine";

//一张空图片，使用door的死亡动画
const BASE_URL = "texture/door/death"
export default class DeadSubStateMachine extends DirectionSubStateMachine{
    constructor(fsm: StateMachine)
    {
        super(fsm);
        this.stateMachine.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}`));
        this.stateMachine.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}`));
        this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}`));
        this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}`));
    }
}