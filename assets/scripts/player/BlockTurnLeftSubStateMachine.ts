import State from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { DIRECTION_ENUM } from "../../enums";
import DirectionSubStateMachine from "../../base/DirectionSubStateMachine";

const BASE_URL = "texture/player/blockturnleft"
export default class BlockTurnLeftSubStateMachine extends DirectionSubStateMachine{
    constructor(fsm: StateMachine)
    {
        super(fsm);
        this.stateMachine.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}/top`));
        this.stateMachine.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}/bottom`));
        this.stateMachine.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`));
        this.stateMachine.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`));
    }
}