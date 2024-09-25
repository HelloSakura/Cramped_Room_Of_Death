System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TileManger, createUINode, randomByRange, DataManager, ResourceManager, _dec, _class, _crd, ccclass, property, TileMapManager;

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
        async init() {
          const spriteFrames = await (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
            error: Error()
          }), ResourceManager) : ResourceManager).Instance.loadDir("texture/tile/tile");
          const {
            mapInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.tileInfo = []; //console.log(spriteFrames);

          for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.tileInfo[i] = [];

            for (let j = 0; j < column.length; j++) {
              const item = column[j]; //空值跳过

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)(); //随机地板

              let number = item.src;

              if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
                number += (_crd && randomByRange === void 0 ? (_reportPossibleCrUseOfrandomByRange({
                  error: Error()
                }), randomByRange) : randomByRange)(0, 4);
              }

              const imageSrc = `tile (${number})`;
              const spriteFrame = spriteFrames.find(v => v.name === imageSrc) || spriteFrames[0]; //添加瓦片管理类，主要是之前太难看得封装一下

              const tileManger = node.addComponent(_crd && TileManger === void 0 ? (_reportPossibleCrUseOfTileManger({
                error: Error()
              }), TileManger) : TileManger);
              const type = item.type;
              tileManger.init(type, spriteFrame, i, j);
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.tileInfo[i][j] = tileManger;
              node.setParent(this.node);
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
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c6e02f09c21815e9278e71e00c8e450c7da1df4.js.map