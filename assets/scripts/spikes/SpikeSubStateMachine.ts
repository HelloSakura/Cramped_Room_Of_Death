import { SubStateMachine } from "../../base/SubStateMachine";
import { PARAMS_NAME_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM } from "../../enums";
export default class SpikeSubStateMachine extends SubStateMachine {
    run(): void {
        const value = this.fsm.getParams(PARAMS_NAME_ENUM.SPIKES_CUR_COUNT);
        this.currentState = this.stateMachine.get(SPIKES_COUNT_MAP_NUMBER_ENUM[value as number]);
    }
}
