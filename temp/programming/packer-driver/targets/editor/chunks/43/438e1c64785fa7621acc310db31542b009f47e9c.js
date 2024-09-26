System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, SubStateMachine, DirectionSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "./SubStateMachine", _context.meta, extras);
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
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
    }, function (_unresolved_3) {
      SubStateMachine = _unresolved_3.SubStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b9bfUtkGJOA5uMo1dyZwpw", "DirectionSubStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = "texture/player/turnleft";

      _export("default", DirectionSubStateMachine = class DirectionSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          const value = this.fsm.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION);
          this.currentState = this.stateMachine.get((_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=438e1c64785fa7621acc310db31542b009f47e9c.js.map