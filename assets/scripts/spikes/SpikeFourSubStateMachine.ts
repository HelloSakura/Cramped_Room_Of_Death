import { AnimationClip } from "cc";
import State from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { PARAMS_NAME_ENUM, SPIKE_COUNT_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM } from "../../enums";
import SpikeSubStateMachine from "./SpikeSubStateMachine";

const BASE_URL = "texture/spikes/spikesfour"
export default class SpikeFourSubStateMachine extends SpikeSubStateMachine{
    constructor(fsm: StateMachine)
    {
        super(fsm);
        this.stateMachine.set(SPIKE_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}/one`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}/two`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.THREE, new State(fsm, `${BASE_URL}/three`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.FOUR, new State(fsm, `${BASE_URL}/four`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.FIVE, new State(fsm, `${BASE_URL}/five`));
    }
}