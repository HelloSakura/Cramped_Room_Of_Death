System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, RenderRoot2D, Vec3, Singleton, DEFAULT_DURATION, DrawManager, createUINode, FadeManager, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEFAULT_DURATION(extras) {
    _reporterNs.report("DEFAULT_DURATION", "../scripts/ui/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawManager(extras) {
    _reporterNs.report("DrawManager", "../scripts/ui/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "../utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      RenderRoot2D = _cc.RenderRoot2D;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      DEFAULT_DURATION = _unresolved_3.DEFAULT_DURATION;
      DrawManager = _unresolved_3.DrawManager;
    }, function (_unresolved_4) {
      createUINode = _unresolved_4.createUINode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99f28Fx+XRB94kZt0rgb1ll", "FadeManager", undefined);

      __checkObsolete__(['director', 'RenderRoot2D', 'Vec3']);

      _export("default", FadeManager = class FadeManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);
          this._fader = null;
        }

        static get Instance() {
          return super.GetInstance();
        }

        get Fader() {
          if (this._fader !== null) {
            return this._fader;
          }

          const root = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          root.addComponent(RenderRoot2D);
          const faderNode = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          faderNode.setParent(root);
          faderNode.setPosition(Vec3.ZERO);
          this._fader = faderNode.addComponent(_crd && DrawManager === void 0 ? (_reportPossibleCrUseOfDrawManager({
            error: Error()
          }), DrawManager) : DrawManager);

          this._fader.init(); //声明为常驻节点

          /**
           引擎同时只会运行一个场景，当切换场景时，
           默认会将场景内所有节点和其他实例销毁。
           如果我们需要用一个组件控制所有场景的加载，
           或在场景之间传递参数数据，就需要将
           该组件所在节点标记为「常驻节点」，
           使它在场景切换时不被自动销毁，常驻内存
           */


          director.addPersistRootNode(root);
          return this._fader;
        }

        fadeIn(duration = _crd && DEFAULT_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_DURATION({
          error: Error()
        }), DEFAULT_DURATION) : DEFAULT_DURATION) {
          return this.Fader.fadeIn(duration);
        }

        fadeOut(duration = _crd && DEFAULT_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_DURATION({
          error: Error()
        }), DEFAULT_DURATION) : DEFAULT_DURATION) {
          return this.Fader.fadeOut(duration);
        }

        mask() {
          return this.Fader.mask();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cec1ec17fee78664f884a55953854e7469904c02.js.map