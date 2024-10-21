System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AnimationClip, State, DIRECTION_ENUM, DirectionSubStateMachine, IdleSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirectionSubStateMachine(extras) {
    _reporterNs.report("DirectionSubStateMachine", "../../base/DirectionSubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      State = _unresolved_2.default;
    }, function (_unresolved_3) {
      DIRECTION_ENUM = _unresolved_3.DIRECTION_ENUM;
    }, function (_unresolved_4) {
      DirectionSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c383NMlKRJiI5UK9dqRaOh", "IdleSubStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = "texture/ironskeleton/idle";

      _export("default", IdleSubStateMachine = class IdleSubStateMachine extends (_crd && DirectionSubStateMachine === void 0 ? (_reportPossibleCrUseOfDirectionSubStateMachine({
        error: Error()
      }), DirectionSubStateMachine) : DirectionSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/top", AnimationClip.WrapMode.Loop));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/bottom", AnimationClip.WrapMode.Loop));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/left", AnimationClip.WrapMode.Loop));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/right", AnimationClip.WrapMode.Loop));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ec9e58aa498902f92a7b61790a0e4424dd0016e.js.map