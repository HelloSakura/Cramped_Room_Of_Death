System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, TileMapManager, levels, DataManager, TILE_HEIGHT, TILE_WIDTH, EventManager, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, SCENE_ENUM, createUINode, PlayerManager, WoodenSkeletonManager, DoorManager, IronSkeletonManager, BurstManager, SpikeManager, SmokeManager, FadeManager, ShakeManager, _dec, _class, _crd, ccclass, property, BattleManager;

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

  function _reportPossibleCrUseOfIRecord(extras) {
    _reporterNs.report("IRecord", "../../runtime/DataManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../enums", _context.meta, extras);
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

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "../../enums", _context.meta, extras);
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

  function _reportPossibleCrUseOfSmokeManager(extras) {
    _reporterNs.report("SmokeManager", "../smoke/SmokeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFadeManager(extras) {
    _reporterNs.report("FadeManager", "../../runtime/FadeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeManager(extras) {
    _reporterNs.report("ShakeManager", "../ui/ShakeManager", _context.meta, extras);
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
      SCENE_ENUM = _unresolved_7.SCENE_ENUM;
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
    }, function (_unresolved_15) {
      SmokeManager = _unresolved_15.SmokeManager;
    }, function (_unresolved_16) {
      FadeManager = _unresolved_16.default;
    }, function (_unresolved_17) {
      ShakeManager = _unresolved_17.ShakeManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06de0GklrJCQY3GR9NC9iXJ", "BattleManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec(_class = class BattleManager extends Component {
        constructor() {
          super(...arguments);
          this.level = void 0;
          this.stage = void 0;
          //分层渲染的思想很重要
          this._smokeLayer = void 0;
          this._inited = false;
        }

        //
        onLoad() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex = 1; //绑定切换关卡

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
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.generateSmoke, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP, this.record, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).REVOKE_STEP, this.revoke, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RESTART_LEVEL, this.initLevel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).OUT_BATTLE, this.outBattle, this);
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
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.generateSmoke);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP, this.record);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).REVOKE_STEP, this.revoke);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RESTART_LEVEL, this.initLevel);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).OUT_BATTLE, this.outBattle, this);
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
            console.log(_this.node.getWorldPosition());

            if (level) {
              if (_this._inited) {
                yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                  error: Error()
                }), FadeManager) : FadeManager).Instance.fadeIn();
              } else {
                yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                  error: Error()
                }), FadeManager) : FadeManager).Instance.mask();
              }

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
              yield Promise.all([_this.generateTileMap(), _this.generateBurst(), _this.generateSpikes(), _this.generateSmokeLayer(), _this.generateDoor(), _this.generateEnemy(), _this.generatePlayer()]); //生成player

              yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                error: Error()
              }), FadeManager) : FadeManager).Instance.fadeOut();
              _this._inited = true;
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
          if (!(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player || !(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door) return;
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
          this.stage.addComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager);
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

        generateSmoke(x, y, direction) {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            //循环利用
            var item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.smokes.find(smoke => smoke.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

            if (item) {
              item.x = x;
              item.y = y;
              item.direction = direction; //重新设置一下位置，保证烟雾生成的位置是实际希望的位置

              _this8.node.setPosition(x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
                error: Error()
              }), TILE_WIDTH) : TILE_WIDTH) - (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
                error: Error()
              }), TILE_WIDTH) : TILE_WIDTH) * 1.5, -y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
                error: Error()
              }), TILE_HEIGHT) : TILE_HEIGHT) + (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
                error: Error()
              }), TILE_HEIGHT) : TILE_HEIGHT) * 1.5);

              return;
            }

            var smoke = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            smoke.setParent(_this8._smokeLayer);
            var smokeManager = smoke.addComponent(_crd && SmokeManager === void 0 ? (_reportPossibleCrUseOfSmokeManager({
              error: Error()
            }), SmokeManager) : SmokeManager);
            yield smokeManager.init({
              x,
              y,
              direction,
              state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE,
              type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SMOKE
            });
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.smokes.push(smokeManager);
          })();
        }

        generateSmokeLayer() {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            _this9._smokeLayer = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();

            _this9._smokeLayer.setParent(_this9.stage);
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
          }), TILE_HEIGHT) : TILE_HEIGHT) * mapColumnCount / 2 + 100; //适配配置时取消震动

          this.stage.getComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager).stop();
          this.stage.setPosition(-disX, disY);
        }

        record() {
          var item = {
            player: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.y,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.type,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH ? (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE : (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state
            },
            door: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.y,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.type,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.direction,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.state
            },
            enemies: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.map(_ref => {
              var {
                x,
                y,
                direction,
                state,
                type
              } = _ref;
              return {
                x,
                y,
                direction,
                state,
                type
              };
            }),
            bursts: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.map(_ref2 => {
              var {
                x,
                y,
                direction,
                state,
                type
              } = _ref2;
              return {
                x,
                y,
                direction,
                state,
                type
              };
            }),
            spikes: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.map(_ref3 => {
              var {
                x,
                y,
                type,
                CurCount
              } = _ref3;
              return {
                x,
                y,
                type,
                CurCount
              };
            })
          };
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.push(item);
        }

        revoke() {
          var item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.pop();

          if (item) {
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.x = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetX = item.player.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.y = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetY = item.player.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.state = item.player.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.direction = item.player.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.x = item.door.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.y = item.door.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.state = item.door.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.direction = item.door.direction;

            for (var i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.length; i++) {
              var enemy = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i];
              enemy.x = item.enemies[i].x;
              enemy.y = item.enemies[i].y;
              enemy.state = item.enemies[i].state;
              enemy.direction = item.enemies[i].direction;
            }

            for (var _i = 0; _i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.length; _i++) {
              var burst = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[_i];
              burst.x = item.bursts[_i].x;
              burst.y = item.bursts[_i].y;
              burst.state = item.bursts[_i].state;
            }

            for (var _i2 = 0; _i2 < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.length; _i2++) {
              var spike = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[_i2];
              spike.x = item.spikes[_i2].x;
              spike.y = item.spikes[_i2].y;
              spike.type = item.spikes[_i2].type;
              spike.CurCount = item.spikes[_i2].CurCount;
            }
          }
        }

        outBattle() {
          return _asyncToGenerator(function* () {
            yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fadeIn();
            director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).Start);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=909d6415b43c7fb74274ece2b0628d7c767b31f6.js.map