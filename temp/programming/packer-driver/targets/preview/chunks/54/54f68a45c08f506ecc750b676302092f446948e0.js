System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EntityManager, SmokeStateMachine, _dec, _class, _crd, ccclass, property, SmokeManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../../base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeStateMachine(extras) {
    _reporterNs.report("SmokeStateMachine", "./SmokeStateMachine", _context.meta, extras);
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
      EntityManager = _unresolved_2.EntityManager;
    }, function (_unresolved_3) {
      SmokeStateMachine = _unresolved_3.SmokeStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b441nom61KC7RoI07wyhWB", "SmokeManager", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SmokeManager", SmokeManager = (_dec = ccclass('SmokeManager'), _dec(_class = class SmokeManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        onDestroy() {
          super.onDestroy();
        }

        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            //添加状态机
            _this.fsm = _this.addComponent(_crd && SmokeStateMachine === void 0 ? (_reportPossibleCrUseOfSmokeStateMachine({
              error: Error()
            }), SmokeStateMachine) : SmokeStateMachine);
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
//# sourceMappingURL=54f68a45c08f506ecc750b676302092f446948e0.js.map