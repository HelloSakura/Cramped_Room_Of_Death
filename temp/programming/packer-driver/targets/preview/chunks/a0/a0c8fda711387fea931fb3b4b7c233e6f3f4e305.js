System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, EVENT_ENUM, SHAKE_TYPE_ENUM, EventManager, _dec, _class, _crd, ccclass, property, ShakeManager;

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../runtime/EventManager", _context.meta, extras);
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
      game = _cc.game;
    }, function (_unresolved_2) {
      EVENT_ENUM = _unresolved_2.EVENT_ENUM;
      SHAKE_TYPE_ENUM = _unresolved_2.SHAKE_TYPE_ENUM;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3d95nsrvlHhqCp8Kmh7HyA", "ShakeManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShakeManager", ShakeManager = (_dec = ccclass('ShakeManager'), _dec(_class = class ShakeManager extends Component {
        constructor() {
          super(...arguments);
          this._isShaking = false;
          this._oldTime = 0;
          this._oldPos = {
            x: 0,
            y: 0
          };
          this._type = void 0;
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, this.onShake, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, this.onShake);
        }

        onShake(type) {
          if (this._isShaking) {
            return;
          }

          this._type = type;
          this._oldTime = game.totalTime;
          this._isShaking = true;
          this._oldPos.x = this.node.position.x;
          this._oldPos.y = this.node.position.y;
        }

        stop() {
          this._isShaking = false;
        }

        update() {
          if (this._isShaking) {
            var duration = 200;
            var amount = 1.6;
            var frequency = 1.6;
            var curSecond = (game.totalTime - this._oldTime) / 1000;
            var totalSecond = duration / 1000;
            var offset = amount * Math.sin(frequency * Math.PI * curSecond);

            if (this._type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP) {
              this.node.setPosition(this._oldPos.x, this._oldPos.y - offset);
            } else if (this._type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM) {
              this.node.setPosition(this._oldPos.x, this._oldPos.y + offset);
            } else if (this._type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT) {
              this.node.setPosition(this._oldPos.x - offset, this._oldPos.y);
            } else if (this._type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT) {
              this.node.setPosition(this._oldPos.x + offset, this._oldPos.y);
            }

            if (curSecond > totalSecond) {
              this._isShaking = false;
              this.node.setPosition(this._oldPos.x, this._oldPos.y);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0c8fda711387fea931fb3b4b7c233e6f3f4e305.js.map