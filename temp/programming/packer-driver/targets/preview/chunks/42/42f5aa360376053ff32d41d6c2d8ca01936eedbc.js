System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SubStateMachine, _crd, ccclass, property;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export("SubStateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6e1fEPNcxHe6lSpwc/dXi8", "SubStateMachine", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'Animation', 'Component', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SubStateMachine", SubStateMachine = class SubStateMachine {
        constructor(fsm) {
          //当前状态
          this._currentState = null;
          this.stateMachine = new Map();
          this.fsm = fsm;
        } //get


        get currentState() {
          return this._currentState;
        } //set


        set currentState(newState) {
          this._currentState = newState;

          this._currentState.run();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42f5aa360376053ff32d41d6c2d8ca01936eedbc.js.map