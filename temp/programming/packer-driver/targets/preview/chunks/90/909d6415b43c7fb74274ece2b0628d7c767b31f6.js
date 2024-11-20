System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, TileMapManager, levels, DataManager, TILE_HEIGHT, TILE_WIDTH, EventManager, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, createUINode, PlayerManager, WoodenSkeletonManager, DoorManager, IronSkeletonManager, BurstManager, SpikeManager, _dec, _class, _crd, ccclass, property, BattleManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTileMapManager(extras) {
    _reporterNs.report("TileMapManager", "../tile/TileMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevels(extras) {
    _reporterNs.report("levels", "../../levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "../../levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "../tile/TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "../tile/TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "../../utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "../player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenSkeletonManager(extras) {
    _reporterNs.report("WoodenSkeletonManager", "../woodenSkeleton/WoodenSkeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorManager(extras) {
    _reporterNs.report("DoorManager", "../door/DoorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSkeletonManager(extras) {
    _reporterNs.report("IronSkeletonManager", "../ironSkeleton/IronSkeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "../burst/BurstManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeManager(extras) {
    _reporterNs.report("SpikeManager", "../spikes/SpikeManager", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      TileMapManager = _unresolved_2.TileMapManager;
    }, function (_unresolved_3) {
      levels = _unresolved_3.default;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      TILE_HEIGHT = _unresolved_5.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_5.TILE_WIDTH;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.default;
    }, function (_unresolved_7) {
      ENTITY_STATE_ENUM = _unresolved_7.ENTITY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_7.ENTITY_TYPE_ENUM;
      EVENT_ENUM = _unresolved_7.EVENT_ENUM;
    }, function (_unresolved_8) {
      createUINode = _unresolved_8.createUINode;
    }, function (_unresolved_9) {
      PlayerManager = _unresolved_9.PlayerManager;
    }, function (_unresolved_10) {
      WoodenSkeletonManager = _unresolved_10.WoodenSkeletonManager;
    }, function (_unresolved_11) {
      DoorManager = _unresolved_11.DoorManager;
    }, function (_unresolved_12) {
      IronSkeletonManager = _unresolved_12.IronSkeletonManager;
    }, function (_unresolved_13) {
      BurstManager = _unresolved_13.BurstManager;
    }, function (_unresolved_14) {
      SpikeManager = _unresolved_14.SpikeManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06de0GklrJCQY3GR9NC9iXJ", "BattleManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec(_class = class BattleManager extends Component {
        constructor() {
          super(...arguments);
          this.level = void 0;
          this.stage = void 0;
        }

        //
        onLoad() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex = 12; //绑定切换关卡

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL, this._nextLevel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END, this._checkArrivedDoor, this);
        }

        onDestroy() {
          //解绑切换关卡
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL, this._nextLevel);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END, this._checkArrivedDoor);
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        initLevel() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
              error: Error()
            }), levels) : levels)["level" + (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.levelIndex];

            if (level) {
              _this.clearLevel();

              _this.level = level;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapInfo = _this.level.mapInfo;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapRowCount = _this.level.mapInfo.length || 0;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapColumnCount = _this.level.mapInfo[0].length || 0;
              yield Promise.all([_this.generateTileMap(), _this.generateBurst(), _this.generateSpikes(), _this.generateDoor(), _this.generateEnemy()]); //生成player

              yield _this.generatePlayer();
            }
          })();
        }

        _nextLevel() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex++;
          this.initLevel();
        } //检测玩家是否到门，且敌人全部死亡


        _checkArrivedDoor() {
          var {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door;

          if (playerX === doorX && playerY === doorY && doorState === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL);
          }
        }

        clearLevel() {
          //清空数据，销毁上一关地图后再加载下一关
          this.stage.destroyAllChildren();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.reset();
        }

        generateStage() {
          //创建舞台，所有单元放在舞台上
          this.stage = new Node();
          this.stage.setParent(this.node);
          this.stage.name = "stage";
        }

        generateTileMap() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            //创建瓦片地图节点
            var tileMap = new Node();
            tileMap.setParent(_this2.stage); //执行生成逻辑，放在组件上

            var tileMapManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
              error: Error()
            }), TileMapManager) : TileMapManager);
            yield tileMapManager.init(); //地图居中

            _this2.adaptPos();
          })();
        }

        generateBurst() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            _this3.level.bursts.forEach(burst => {
              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this3.stage);
              var manger = node.addComponent(_crd && BurstManager === void 0 ? (_reportPossibleCrUseOfBurstManager({
                error: Error()
              }), BurstManager) : BurstManager); //使用promise，避免等一个创造一个
              //可以一起等待，提高资源加载速度

              promise.push(manger.init(burst)); //注意名字大小写，大写是类名

              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts.push(manger);
            });

            yield Promise.all(promise);
          })();
        }

        generatePlayer() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var player = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            player.setParent(_this4.stage);
            var playManager = player.addComponent(_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
              error: Error()
            }), PlayerManager) : PlayerManager);
            yield playManager.init(_this4.level.player);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player = playManager;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_BORN, true);
          })();
        }

        generateSpikes() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            _this5.level.spikes.forEach(spike => {
              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this5.stage);
              var manger = node.addComponent(_crd && SpikeManager === void 0 ? (_reportPossibleCrUseOfSpikeManager({
                error: Error()
              }), SpikeManager) : SpikeManager); //使用promise，避免等一个创造一个
              //可以一起等待，提高资源加载速度

              promise.push(manger.init(spike)); //注意名字大小写，大写是类名

              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes.push(manger);
            });

            yield Promise.all(promise);
          })();
        }

        generateDoor() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var door = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            door.setParent(_this6.stage);
            var doorManager = door.addComponent(_crd && DoorManager === void 0 ? (_reportPossibleCrUseOfDoorManager({
              error: Error()
            }), DoorManager) : DoorManager);
            yield doorManager.init(_this6.level.door);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door = doorManager;
          })();
        }

        generateEnemy() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            _this7.level.enemies.forEach(enemy => {
              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this7.stage);
              var Manger = enemy.type === (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SKELETON_WOODEN ? _crd && WoodenSkeletonManager === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonManager({
                error: Error()
              }), WoodenSkeletonManager) : WoodenSkeletonManager : _crd && IronSkeletonManager === void 0 ? (_reportPossibleCrUseOfIronSkeletonManager({
                error: Error()
              }), IronSkeletonManager) : IronSkeletonManager;
              var manger = node.addComponent(Manger); //使用promise，避免等一个创造一个
              //可以一起等待，提高资源加载速度

              promise.push(manger.init(enemy)); //注意名字大小写，大写是类名

              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies.push(manger);
            });

            yield Promise.all(promise);
          })();
        }

        adaptPos() {
          //将舞台置为中间位置
          //解包
          var {
            mapRowCount,
            mapColumnCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var disX = (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * mapRowCount / 2;
          var disY = (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * mapColumnCount / 2 + 100;
          this.stage.setPosition(-disX, disY);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=909d6415b43c7fb74274ece2b0628d7c767b31f6.js.map