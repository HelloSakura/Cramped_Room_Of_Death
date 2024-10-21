System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EnemyManager, IronSkeletonStateMachine, _dec, _class, _crd, ccclass, property, IronSkeletonManager;

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../../base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSkeletonStateMachine(extras) {
    _reporterNs.report("IronSkeletonStateMachine", "./IronSkeletonStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EnemyManager = _unresolved_2.EnemyManager;
    }, function (_unresolved_3) {
      IronSkeletonStateMachine = _unresolved_3.IronSkeletonStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b0b1ZPZetFK5b2CFgUPgRX", "IronSkeletonManager", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronSkeletonManager", IronSkeletonManager = (_dec = ccclass('IronSkeletonManager'), _dec(_class = class IronSkeletonManager extends (_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager) {
        onDestroy() {
          super.onDestroy();
        }

        async init(params) {
          //添加状态机
          this.fsm = this.addComponent(_crd && IronSkeletonStateMachine === void 0 ? (_reportPossibleCrUseOfIronSkeletonStateMachine({
            error: Error()
          }), IronSkeletonStateMachine) : IronSkeletonStateMachine);
          await this.fsm.init();
          super.init(params);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6038d49a71cbb4725c6971bdcd7a6cd84f207f50.js.map