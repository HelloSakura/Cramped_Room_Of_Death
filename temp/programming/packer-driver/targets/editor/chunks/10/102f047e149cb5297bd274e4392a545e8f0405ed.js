System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SubStateMachine, PARAMS_NAME_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM, SpikeSubStateMachine, _crd;

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "../../base/SubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_MAP_NUMBER_ENUM", "../../enums", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SubStateMachine = _unresolved_2.SubStateMachine;
    }, function (_unresolved_3) {
      PARAMS_NAME_ENUM = _unresolved_3.PARAMS_NAME_ENUM;
      SPIKES_COUNT_MAP_NUMBER_ENUM = _unresolved_3.SPIKES_COUNT_MAP_NUMBER_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c51cdm4tQRBpIqiPh8331m5", "SpikeSubStateMachine", undefined);

      _export("default", SpikeSubStateMachine = class SpikeSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          const value = this.fsm.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CUR_COUNT);
          this.currentState = this.stateMachine.get((_crd && SPIKES_COUNT_MAP_NUMBER_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM({
            error: Error()
          }), SPIKES_COUNT_MAP_NUMBER_ENUM) : SPIKES_COUNT_MAP_NUMBER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=102f047e149cb5297bd274e4392a545e8f0405ed.js.map