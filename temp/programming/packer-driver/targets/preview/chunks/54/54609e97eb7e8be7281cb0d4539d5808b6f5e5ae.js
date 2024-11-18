System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, UITransform, PARAMS_NAME_ENUM, DIRECTION_ORDER_ENUM, TILE_WIDTH, TILE_HEIGHT, randomByLen, _dec, _class, _crd, ccclass, property, EntityManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ORDER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ORDER_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../scripts/tile/TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../scripts/tile/TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomByLen(extras) {
    _reporterNs.report("randomByLen", "../utils", _context.meta, extras);
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
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      DIRECTION_ORDER_ENUM = _unresolved_2.DIRECTION_ORDER_ENUM;
    }, function (_unresolved_3) {
      TILE_WIDTH = _unresolved_3.TILE_WIDTH;
      TILE_HEIGHT = _unresolved_3.TILE_HEIGHT;
    }, function (_unresolved_4) {
      randomByLen = _unresolved_4.randomByLen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7febo8ydRJhZfooOcASj4P", "EntityManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EntityManager", EntityManager = (_dec = ccclass('EntityManager'), _dec(_class = class EntityManager extends Component {
        constructor() {
          super(...arguments);
          this.id = (_crd && randomByLen === void 0 ? (_reportPossibleCrUseOfrandomByLen({
            error: Error()
          }), randomByLen) : randomByLen)(12);
          this.x = 0;
          this.y = 0;
          //状态机
          this.fsm = void 0;
          this._direction = void 0;
          this._state = void 0;
          this.type = void 0;
        }

        get direction() {
          return this._direction;
        }

        set direction(newDirection) {
          this._direction = newDirection;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION, (_crd && DIRECTION_ORDER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ORDER_ENUM({
            error: Error()
          }), DIRECTION_ORDER_ENUM) : DIRECTION_ORDER_ENUM)[this._direction]);
        }

        get state() {
          return this._state;
        }

        set state(newState) {
          this._state = newState;
          this.fsm.setParams(this._state, true);
        }

        init(params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //动画模块
            //添加一个spite组件
            var sprite = _this.addComponent(Sprite); //设置为custom模式，可以自定义宽高


            sprite.sizeMode = Sprite.SizeMode.CUSTOM; //设置宽高

            var transform = _this.getComponent(UITransform);

            transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
              error: Error()
            }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
              error: Error()
            }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
            _this.x = params.x;
            _this.y = params.y;
            _this.type = params.type;
            _this.direction = params.direction;
            _this.state = params.state;
          })();
        }

        update() {
          //虚拟坐标转换为瓦片坐标
          //瓦片地图左上角为原点
          //注意人物大小与瓦片之间的偏移
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) - (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 1.5, -this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 1.5);
        }

        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54609e97eb7e8be7281cb0d4539d5808b6f5e5ae.js.map