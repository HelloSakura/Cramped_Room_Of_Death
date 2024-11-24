System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, TileMapManager, levels, DataManager, TILE_HEIGHT, TILE_WIDTH, EventManager, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, createUINode, PlayerManager, WoodenSkeletonManager, DoorManager, IronSkeletonManager, BurstManager, SpikeManager, SmokeManager, FadeManager, _dec, _class, _crd, ccclass, property, BattleManager;

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
    }, function (_unresolved_15) {
      SmokeManager = _unresolved_15.SmokeManager;
    }, function (_unresolved_16) {
      FadeManager = _unresolved_16.default;
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
        constructor(...args) {
          super(...args);
          this.level = void 0;
          this.stage = void 0;
          //分层渲染的思想很重要
          this._smokeLayer = void 0;
        }

        //
        onLoad() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex = 4; //绑定切换关卡

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
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.generateSmoke, this);
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        async initLevel() {
          const level = (_crd && levels === void 0 ? (_reportPossibleCrUseOflevels({
            error: Error()
          }), levels) : levels)[`level${(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex}`];

          if (level) {
            await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fadeIn();
            this.clearLevel();
            this.level = level;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapInfo = this.level.mapInfo;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapRowCount = this.level.mapInfo.length || 0;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            await Promise.all([this.generateTileMap(), this.generateBurst(), this.generateSpikes(), this.generateSmokeLayer(), this.generateDoor(), this.generateEnemy(), this.generatePlayer()]); //生成player

            await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fadeOut();
          }
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
          let {
            x: playerX,
            y: playerY
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player;
          let {
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

        async generateTileMap() {
          //创建瓦片地图节点
          let tileMap = new Node();
          tileMap.setParent(this.stage); //执行生成逻辑，放在组件上

          const tileMapManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          await tileMapManager.init(); //地图居中

          this.adaptPos();
        }

        async generateBurst() {
          let promise = [];
          this.level.bursts.forEach(burst => {
            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const manger = node.addComponent(_crd && BurstManager === void 0 ? (_reportPossibleCrUseOfBurstManager({
              error: Error()
            }), BurstManager) : BurstManager); //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度

            promise.push(manger.init(burst)); //注意名字大小写，大写是类名

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.push(manger);
          });
          await Promise.all(promise);
        }

        async generatePlayer() {
          const player = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          player.setParent(this.stage);
          const playManager = player.addComponent(_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager);
          await playManager.init(this.level.player);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player = playManager;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_BORN, true);
        }

        async generateSpikes() {
          let promise = [];
          this.level.spikes.forEach(spike => {
            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const manger = node.addComponent(_crd && SpikeManager === void 0 ? (_reportPossibleCrUseOfSpikeManager({
              error: Error()
            }), SpikeManager) : SpikeManager); //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度

            promise.push(manger.init(spike)); //注意名字大小写，大写是类名

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.push(manger);
          });
          await Promise.all(promise);
        }

        async generateDoor() {
          const door = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          door.setParent(this.stage);
          const doorManager = door.addComponent(_crd && DoorManager === void 0 ? (_reportPossibleCrUseOfDoorManager({
            error: Error()
          }), DoorManager) : DoorManager);
          await doorManager.init(this.level.door);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door = doorManager;
        }

        async generateEnemy() {
          let promise = [];
          this.level.enemies.forEach(enemy => {
            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const Manger = enemy.type === (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SKELETON_WOODEN ? _crd && WoodenSkeletonManager === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonManager({
              error: Error()
            }), WoodenSkeletonManager) : WoodenSkeletonManager : _crd && IronSkeletonManager === void 0 ? (_reportPossibleCrUseOfIronSkeletonManager({
              error: Error()
            }), IronSkeletonManager) : IronSkeletonManager;
            const manger = node.addComponent(Manger); //使用promise，避免等一个创造一个
            //可以一起等待，提高资源加载速度

            promise.push(manger.init(enemy)); //注意名字大小写，大写是类名

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.push(manger);
          });
          await Promise.all(promise);
        }

        async generateSmoke(x, y, direction) {
          //循环利用
          const item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.smokes.find(smoke => smoke.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (item) {
            item.x = x;
            item.y = y;
            item.direction = direction; //重新设置一下位置，保证烟雾生成的位置是实际希望的位置

            this.node.setPosition(x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
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

          const smoke = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          smoke.setParent(this._smokeLayer);
          const smokeManager = smoke.addComponent(_crd && SmokeManager === void 0 ? (_reportPossibleCrUseOfSmokeManager({
            error: Error()
          }), SmokeManager) : SmokeManager);
          await smokeManager.init({
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
        }

        async generateSmokeLayer() {
          this._smokeLayer = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();

          this._smokeLayer.setParent(this.stage);
        }

        adaptPos() {
          //将舞台置为中间位置
          //解包
          const {
            mapRowCount,
            mapColumnCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const disX = (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * mapRowCount / 2;
          const disY = (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
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