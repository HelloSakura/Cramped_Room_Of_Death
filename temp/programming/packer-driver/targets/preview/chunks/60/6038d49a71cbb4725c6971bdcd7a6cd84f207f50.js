System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EnemyManager, IronSkeletonStateMachine, _dec, _class, _crd, ccclass, property, IronSkeletonManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            //添加状态机
            _this.fsm = _this.addComponent(_crd && IronSkeletonStateMachine === void 0 ? (_reportPossibleCrUseOfIronSkeletonStateMachine({
              error: Error()
            }), IronSkeletonStateMachine) : IronSkeletonStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6038d49a71cbb4725c6971bdcd7a6cd84f207f50.js.map