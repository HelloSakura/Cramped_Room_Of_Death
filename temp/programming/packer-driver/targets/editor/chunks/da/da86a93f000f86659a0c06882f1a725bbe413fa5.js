System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, State, SPIKE_COUNT_ENUM, SpikeSubStateMachine, SpikeThreeSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKE_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKE_COUNT_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeSubStateMachine(extras) {
    _reporterNs.report("SpikeSubStateMachine", "./SpikeSubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      State = _unresolved_2.default;
    }, function (_unresolved_3) {
      SPIKE_COUNT_ENUM = _unresolved_3.SPIKE_COUNT_ENUM;
    }, function (_unresolved_4) {
      SpikeSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0290b8BCCdCcamONpKmMFJo", "SpikeThreeSubStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = "texture/spikes/spikesthree";

      _export("default", SpikeThreeSubStateMachine = class SpikeThreeSubStateMachine extends (_crd && SpikeSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikeSubStateMachine({
        error: Error()
      }), SpikeSubStateMachine) : SpikeSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).ZERO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/zero`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).ONE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/one`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).TWO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/two`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).THREE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/three`));
          this.stateMachine.set((_crd && SPIKE_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKE_COUNT_ENUM({
            error: Error()
          }), SPIKE_COUNT_ENUM) : SPIKE_COUNT_ENUM).FOUR, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/four`));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da86a93f000f86659a0c06882f1a725bbe413fa5.js.map