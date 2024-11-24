System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BlockInputEvents, Color, Component, game, Graphics, UITransform, view, _dec, _class, _crd, ccclass, property, SCREEN_WIDTH, SCREEN_HEIGHT, FADE_STATE_ENUM, DEFAULT_DURATION, DrawManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BlockInputEvents = _cc.BlockInputEvents;
      Color = _cc.Color;
      Component = _cc.Component;
      game = _cc.game;
      Graphics = _cc.Graphics;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2dbfdpKrWxMFahrksjWCxeW", "DrawManager", undefined);

      __checkObsolete__(['_decorator', 'BlockInputEvents', 'Color', 'Component', 'game', 'Graphics', 'Node', 'UITransform', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      SCREEN_WIDTH = view.getVisibleSize().width;
      SCREEN_HEIGHT = view.getVisibleSize().height;

      FADE_STATE_ENUM = /*#__PURE__*/function (FADE_STATE_ENUM) {
        FADE_STATE_ENUM[FADE_STATE_ENUM["IDLE"] = 0] = "IDLE";
        FADE_STATE_ENUM[FADE_STATE_ENUM["FADE_IN"] = 1] = "FADE_IN";
        FADE_STATE_ENUM[FADE_STATE_ENUM["FADE_OUT"] = 2] = "FADE_OUT";
        return FADE_STATE_ENUM;
      }(FADE_STATE_ENUM || {});

      ;

      _export("DEFAULT_DURATION", DEFAULT_DURATION = 2000);

      _export("DrawManager", DrawManager = (_dec = ccclass('DrawManager'), _dec(_class = class DrawManager extends Component {
        constructor(...args) {
          super(...args);
          this._ctx = void 0;
          this._state = void 0;
          this._oldTime = void 0;
          this._duration = void 0;
          this._fadeResolve = void 0;
          this._block = void 0;
        }

        //防止输入穿透到下层节点，一般用于上层UI的背景
        init() {
          this._block = this.addComponent(BlockInputEvents);
          this._ctx = this.addComponent(Graphics);
          const transform = this.getComponent(UITransform);
          transform.setAnchorPoint(0.5, 0.5);
          transform.setContentSize(SCREEN_WIDTH, SCREEN_HEIGHT);
          this.setAlpha(1);
        }

        setAlpha(percent) {
          //清空
          this._ctx.clear(); //画一个矩形


          this._ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT); //填充颜色


          this._ctx.fillColor = new Color(0, 0, 0, 255 * percent); //填满

          this._ctx.fill();

          this._block.enabled = percent === 1;
        }

        update() {
          const percent = (game.totalTime - this._oldTime) / this._duration;
          console.log(percent);

          switch (this._state) {
            case FADE_STATE_ENUM.FADE_IN:
              if (percent < 1) {
                this.setAlpha(percent);
              } else {
                this.setAlpha(1);
                this._state = FADE_STATE_ENUM.IDLE;

                this._fadeResolve(null);
              }

              break;

            case FADE_STATE_ENUM.FADE_OUT:
              if (percent < 1) {
                this.setAlpha(1 - percent);
              } else {
                this.setAlpha(0);
                this._state = FADE_STATE_ENUM.IDLE;

                this._fadeResolve(null);
              }

              break;
          }
        }

        fadeIn(duration = DEFAULT_DURATION) {
          this.setAlpha(0);
          this._duration = duration;
          this._oldTime = game.totalTime;
          this._state = FADE_STATE_ENUM.FADE_IN;
          return new Promise(resolve => {
            this._fadeResolve = resolve;
          });
        }

        fadeOut(duration = DEFAULT_DURATION) {
          this.setAlpha(1);
          this._duration = duration;
          this._oldTime = game.totalTime;
          this._state = FADE_STATE_ENUM.FADE_OUT;
          return new Promise(resolve => {
            this._fadeResolve = resolve;
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a9faf63d90ff9d9136e4efd922a7148c71b33d0.js.map