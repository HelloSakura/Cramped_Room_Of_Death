System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, FadeManager, SCENE_ENUM, _dec, _class, _crd, ccclass, property, StartManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfFadeManager(extras) {
    _reporterNs.report("FadeManager", "../../runtime/FadeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      FadeManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      SCENE_ENUM = _unresolved_3.SCENE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25064V6Q8FP3LWWnizp3aDE", "StartManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartManager", StartManager = (_dec = ccclass('StartManager'), _dec(_class = class StartManager extends Component {
        onLoad() {
          (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
            error: Error()
          }), FadeManager) : FadeManager).Instance.fadeOut(1000);
          this.node.once(Node.EventType.TOUCH_END, this._handleStart, this);
        }

        _handleStart() {
          return _asyncToGenerator(function* () {
            yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fadeIn(300);
            director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).Battle);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7070250c34a0e12430fee91421b6ad036dd020a6.js.map