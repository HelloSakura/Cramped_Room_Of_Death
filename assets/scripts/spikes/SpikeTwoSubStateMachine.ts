import { AnimationClip } from "cc";
import State from "../../base/State";
import { StateMachine } from "../../base/StateMachine";
import { SPIKE_COUNT_ENUM } from "../../enums";
import SpikeSubStateMachine from "./SpikeSubStateMachine";

const BASE_URL = "texture/spikes/spikestwo"
export default class SpikeTwoSubStateMachine extends SpikeSubStateMachine{
    constructor(fsm: StateMachine)
    {
        super(fsm);
        this.stateMachine.set(SPIKE_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}/one`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}/two`));
        this.stateMachine.set(SPIKE_COUNT_ENUM.THREE, new State(fsm, `${BASE_URL}/three`));
        
    }
}