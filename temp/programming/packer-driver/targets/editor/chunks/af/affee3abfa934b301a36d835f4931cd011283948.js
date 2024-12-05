System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, State, ANIMATION_SPEED, DIRECTION_ENUM, SHAKE_TYPE_ENUM, DirectionSubStateMachine, AnimationClip, AttackSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIMATION_SPEED(extras) {
    _reporterNs.report("ANIMATION_SPEED", "../../base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../enums", _context.meta, extras);
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
      ANIMATION_SPEED = _unresolved_2.ANIMATION_SPEED;
    }, function (_unresolved_3) {
      DIRECTION_ENUM = _unresolved_3.DIRECTION_ENUM;
      SHAKE_TYPE_ENUM = _unresolved_3.SHAKE_TYPE_ENUM;
    }, function (_unresolved_4) {
      DirectionSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52731RwaJNMRL8gqr4E/gS5", "AttackSubStateMachine", undefined);

      __checkObsolete__(['AnimationClip']);

      BASE_URL = "texture/player/attack";

      _export("default", AttackSubStateMachine = class AttackSubStateMachine extends (_crd && DirectionSubStateMachine === void 0 ? (_reportPossibleCrUseOfDirectionSubStateMachine({
        error: Error()
      }), DirectionSubStateMachine) : DirectionSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            //第5帧
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP]
          }]));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            //第5帧
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM]
          }]));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            //第5帧
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT]
          }]));
          this.stateMachine.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            //第5帧
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT]
          }]));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=affee3abfa934b301a36d835f4931cd011283948.js.map