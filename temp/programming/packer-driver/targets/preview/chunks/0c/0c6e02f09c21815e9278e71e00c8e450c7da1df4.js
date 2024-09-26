System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TileManger, createUINode, randomByRange, DataManager, ResourceManager, _dec, _class, _crd, ccclass, property, TileMapManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTileManger(extras) {
    _reporterNs.report("TileManger", "./TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "../../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomByRange(extras) {
    _reporterNs.report("randomByRange", "../../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceManager(extras) {
    _reporterNs.report("ResourceManager", "../../runtime/ResourceManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      TileManger = _unresolved_2.TileManger;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
      randomByRange = _unresolved_3.randomByRange;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      ResourceManager = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04b23hI1AZELYsRbh8noC/1", "TileMapManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'random', 'resources', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator); //导入瓦片信息

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var spriteFrames = yield (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
              error: Error()
            }), ResourceManager) : ResourceManager).Instance.loadDir("texture/tile/tile");
            var {
              mapInfo
            } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.tileInfo = []; //console.log(spriteFrames);

            for (var i = 0; i < mapInfo.length; i++) {
              var column = mapInfo[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.tileInfo[i] = [];

              var _loop = function* _loop() {
                var item = column[j]; //空值跳过

                if (item.src === null || item.type === null) {
                  return 1; // continue
                }

                var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                  error: Error()
                }), createUINode) : createUINode)(); //随机地板

                var number = item.src;

                if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
                  number += (_crd && randomByRange === void 0 ? (_reportPossibleCrUseOfrandomByRange({
                    error: Error()
                  }), randomByRange) : randomByRange)(0, 4);
                }

                var imageSrc = "tile (" + number + ")";
                var spriteFrame = spriteFrames.find(v => v.name === imageSrc) || spriteFrames[0]; //添加瓦片管理类，主要是之前太难看得封装一下

                var tileManger = node.addComponent(_crd && TileManger === void 0 ? (_reportPossibleCrUseOfTileManger({
                  error: Error()
                }), TileManger) : TileManger);
                var type = item.type;
                tileManger.init(type, spriteFrame, i, j);
                (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                  error: Error()
                }), DataManager) : DataManager).Instance.tileInfo[i][j] = tileManger;
                node.setParent(_this.node);
                /*封装以下到TileManager类
                //添加UI组件定义大小
                const node = new Node();
                const transform = node.addComponent(UITransform);
                transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
                  //设置layer
                node.layer = 1 << Layers.nameToLayer("UI_2D");
                  //设置位置
                node.setPosition(i*TILE_WIDTH, -j*TILE_HEIGHT);
                //挂载到父节点
                node.setParent(this.node);
                */
              };

              for (var j = 0; j < column.length; j++) {
                if (yield* _loop()) continue;
              }
            }
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c6e02f09c21815e9278e71e00c8e450c7da1df4.js.map