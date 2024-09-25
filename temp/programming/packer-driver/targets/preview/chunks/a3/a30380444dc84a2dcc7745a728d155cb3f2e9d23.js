System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, UITransform, TILE_TYPE_ENUM, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileManger;

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "../../enums", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      TILE_TYPE_ENUM = _unresolved_2.TILE_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60001g9CkxLcaasxT8RZhkn", "TileManger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator); //瓦片尺寸

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TileManger", TileManger = (_dec = ccclass('TileManger'), _dec(_class = class TileManger extends Component {
        constructor() {
          super(...arguments);
          this.type = void 0;
          this.moveable = void 0;
          this.turnable = void 0;
        }

        init(type, spriteFrame, i, j) {
          this.type = type;

          if (this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_COLUMN || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_BOTTOM || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_TOP || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_BOTTOM || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_TOP || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW) {
            //墙壁不可走也不可转
            this.moveable = false;
            this.turnable = false;
          } else if (this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT || this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_RIGHT) {
            //悬崖可转但不可走
            this.moveable = false;
            this.turnable = true;
          } else if (this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
            error: Error()
          }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR) {
            //地板可转可走
            this.turnable = true;
            this.moveable = true;
          }

          var sprite = this.node.addComponent(Sprite);
          sprite.spriteFrame = spriteFrame; //添加UI组件定义大小

          var transform = this.getComponent(UITransform);
          transform.setContentSize(TILE_WIDTH, TILE_HEIGHT); //设置位置

          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a30380444dc84a2dcc7745a728d155cb3f2e9d23.js.map