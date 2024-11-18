System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, EVENT_ENUM, EventManager, PlayerStateMachine, EntityManager, DataManager, _dec, _class, _crd, ccclass, property, PlayerManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTileManger(extras) {
    _reporterNs.report("TileManger", "../tile/TileManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONTROLLER_ENUM(extras) {
    _reporterNs.report("CONTROLLER_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "./PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../../base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../../base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "../burst/BurstManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CONTROLLER_ENUM = _unresolved_2.CONTROLLER_ENUM;
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      EVENT_ENUM = _unresolved_2.EVENT_ENUM;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      PlayerStateMachine = _unresolved_4.PlayerStateMachine;
    }, function (_unresolved_5) {
      EntityManager = _unresolved_5.EntityManager;
    }, function (_unresolved_6) {
      DataManager = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e9cb3R3G9G7JqNyuvU5di1", "PlayerManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'UITransform', 'Animation', 'AnimationClip', 'animation', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerManager", PlayerManager = (_dec = ccclass('PlayerManager'), _dec(_class = class PlayerManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        constructor() {
          super(...arguments);
          this.targetX = 0;
          this.targetY = 0;
          this._speed = 1 / 10;
          this._isMoving = false;
        }

        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            //添加状态机
            _this.fsm = _this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

            _this.targetX = _this.x;
            _this.targetY = _this.y; //await this.render();
            //move函数和EVENT_ENUM.PLAYER_CTRL信号绑定到了一起

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, _this.inputHandle, _this);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, _this._onDead, _this);
          })();
        }

        update() {
          this.updateXY(); //虚拟坐标转换为瓦片坐标
          //瓦片地图左上角为原点
          //注意人物大小与瓦片之间的偏移

          super.update();
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, this.inputHandle);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, this._onDead);
        }

        updateXY() {
          if (this.targetX < this.x) {
            //在目标右侧
            this.x -= this._speed; //向左移动
          } else if (this.targetX > this.x) {
            this.x += this._speed;
          }

          if (this.targetY < this.y) {
            //在目标上侧
            this.y -= this._speed; //向下移动
          } else if (this.targetY > this.y) {
            this.y += this._speed;
          } //达到一定距离直接赋值，防止鬼畜


          if (Math.abs(this.targetX - this.x) <= 0.1 && Math.abs(this.targetY - this.y) <= 0.1 && this._isMoving) {
            this._isMoving = false;
            this.x = this.targetX;
            this.y = this.targetY;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          }
        } //处理用户输入


        inputHandle(inputDirection) {
          //正在移动return
          if (this._isMoving) {
            return;
          } //人物死亡return掉


          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK) {
            return;
          } //判断攻击敌人


          var id = this._willAttack(inputDirection);

          if (id) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).ATTACK_ENEMY, id);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).DOOR_OPEN);
            return;
          } //撞了不用往下走了


          if (this.willBlock(inputDirection)) {
            console.log("block");
            return;
          }

          this.move(inputDirection);
        }

        _willAttack(inputDirection) {
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          for (var i = 0; i < enemies.length; i++) {
            var {
              x: enemyX,
              y: enemyY,
              id: enemyId
            } = enemies[i];

            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP && enemyX === this.x && enemyY === this.targetY - 2) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return enemyId;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT && enemyX === this.x - 2 && enemyY === this.targetY) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return enemyId;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT && enemyX === this.x + 2 && enemyY === this.targetY) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return enemyId;
            }

            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM && enemyX === this.x && enemyY === this.targetY + 2) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
              return enemyId;
            }
          }

          return null;
        }

        _onDead(type) {
          this.state = type;
        }

        move(inputDirection) {
          //console.log(DataManager.Instance.tileInfo);
          //注意Y轴是相反的
          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            this.targetY -= 1;
            this._isMoving = true;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            this.targetY += 1;
            this._isMoving = true;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            this.targetX += 1;
            this._isMoving = true;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            this.targetX -= 1;
            this._isMoving = true;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            //左转后进入该逻辑
            //左转后人物方向改变了
            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
            }

            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNLEFT;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT) {
            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
            }

            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNRIGHT;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          }
        } //判断是否撞墙了


        willBlock(inputDirection) {
          //解构出自己数据
          var {
            targetX: x,
            targetY: y,
            direction
          } = this; //解构出地图信息

          var tileInfo = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.tileInfo; //解构出门的信息

          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door; //解构出未死亡的敌人信息

          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH); //解构出地裂信息

          var bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            //输入方向为上
            //拿到下一个y坐标(用二维坐标来表示角色位置而不是position)
            var playerNextY = y - 1;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //人当前方向也是上
              //往上直接遇到墙
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //拿到下两个瓦片，一个是人物，一个是枪，总不能枪怼墙上


              var weaponNextY = y - 2;
              var playerTile = tileInfo[x][playerNextY];
              var weaponTile = tileInfo[x][weaponNextY]; //判断是否碰到了门

              if ((x === doorX && playerNextY === doorY || x === doorX && weaponNextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断是否碰到了敌人


              for (var i = 0; i < enemies.length; ++i) {
                var {
                  x: enemyX,
                  y: enemyY
                } = enemies[i];

                if (x === enemyX && playerNextY === enemyY || x === enemyX && weaponNextY === enemyY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              for (var _i = 0; _i < bursts.length; _i++) {
                var {
                  x: burstX,
                  y: burstY
                } = bursts[_i]; //人能走且枪能走

                if (x === burstX && playerNextY === burstY && (!weaponTile || weaponTile.turnable)) {
                  return false;
                }
              } //判断地图元素


              if (playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)) {//人能走 且 枪能走，要么瓦片不存在要么瓦片可以转动
                //empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              //当前方向为左
              //需要三个瓦片，左上角
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return;
              } //拿到下两个瓦片
              //这个时候枪是横向左，人可能不被挡住，但是枪会


              var weaponNextX = x - 1;
              var _playerTile = tileInfo[x][playerNextY];
              var _weaponTile = tileInfo[weaponNextX][playerNextY]; //是否碰到了门

              if ((x === doorX && playerNextY === doorY || weaponNextX === doorX && playerNextY === doorY) && doorState != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //是否碰到了敌人


              for (var _i2 = 0; _i2 < enemies.length; ++_i2) {
                var {
                  x: _enemyX,
                  y: _enemyY
                } = enemies[_i2];

                if (x === _enemyX && playerNextY === _enemyY || weaponNextX === _enemyX && playerNextY === _enemyY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              for (var _i3 = 0; _i3 < bursts.length; _i3++) {
                var {
                  x: _burstX,
                  y: _burstY
                } = bursts[_i3]; //人能走且枪能走

                if (x === _burstX && playerNextY === _burstY && (!_weaponTile || _weaponTile.turnable)) {
                  return false;
                }
              }

              if (_playerTile && _playerTile.moveable && (!_weaponTile || _weaponTile.turnable)) {//人能走
                //枪不存在，或者枪能转
              } else {
                //待定
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              //当前方向为下
              //只需要下一个瓦片可走就行
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return;
              } //拿到瓦片


              var _playerTile2 = tileInfo[x][playerNextY]; //是否碰到了门

              if (x === doorX && playerNextY === doorY && doorState != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //是否碰到了敌人


              for (var _i4 = 0; _i4 < enemies.length; ++_i4) {
                var {
                  x: _enemyX2,
                  y: _enemyY2
                } = enemies[_i4];

                if (x === _enemyX2 && playerNextY === _enemyY2) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              for (var _i5 = 0; _i5 < bursts.length; _i5++) {
                var {
                  x: _burstX2,
                  y: _burstY2
                } = bursts[_i5]; //人能走且枪能走

                if (x === _burstX2 && playerNextY === _burstY2) {
                  return false;
                }
              }

              if (_playerTile2 && _playerTile2.moveable) {//人能走就行
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              //当前方向为右
              //需要三个瓦片，右上角
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return;
              }

              var _weaponNextX = x + 1;

              var _playerTile3 = tileInfo[x][playerNextY];
              var _weaponTile2 = tileInfo[_weaponNextX][playerNextY]; //是否碰到了门

              if (x === doorX && playerNextY === doorY && doorState != (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //是否碰到了敌人


              for (var _i6 = 0; _i6 < enemies.length; ++_i6) {
                var {
                  x: _enemyX3,
                  y: _enemyY3
                } = enemies[_i6];

                if (x === _enemyX3 && playerNextY === _enemyY3 || _weaponNextX === _enemyX3 && playerNextY === _enemyY3) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              for (var _i7 = 0; _i7 < bursts.length; _i7++) {
                var {
                  x: _burstX3,
                  y: _burstY3
                } = bursts[_i7]; //人能走且枪能走

                if (x === _burstX3 && playerNextY === _burstY3 && (!_weaponTile2 || _weaponTile2.moveable)) {
                  return false;
                }
              }

              if (_playerTile3 && _playerTile3.moveable && (!_weaponTile2 || _weaponTile2.moveable)) {//人物：下一个瓦片且可移动
                //枪：不存在或能转动
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            //输入方向为左
            var playerNextX = x - 1;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //人物方向为上
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return;
              }

              var _weaponNextY = y - 1;

              var _playerTile4 = tileInfo[playerNextX][y];
              var _weaponTile3 = tileInfo[playerNextX][_weaponNextY]; //判断是否碰到了门

              if ((playerNextX === doorX && y === doorY || x === doorX && _weaponNextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断是否碰到了敌人


              for (var _i8 = 0; _i8 < enemies.length; ++_i8) {
                var {
                  x: _enemyX4,
                  y: _enemyY4
                } = enemies[_i8];

                if (playerNextX === _enemyX4 && y === _enemyY4 || x === _enemyX4 && _weaponNextY === _enemyY4) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              for (var _i9 = 0; _i9 < bursts.length; _i9++) {
                var {
                  x: _burstX4,
                  y: _burstY4
                } = bursts[_i9]; //人能走且枪能走

                if (playerNextX === _burstX4 && y === _burstY4 && (!_weaponTile3 || _weaponTile3.moveable)) {
                  return false;
                }
              }

              if (_playerTile4 && _playerTile4.moveable && (!_weaponTile3 || _weaponTile3.moveable)) {//人：能走
                //枪不存在，或者枪能转
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              //人物方向为左
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return;
              }

              var _weaponNextX2 = x - 2;

              var _playerTile5 = tileInfo[playerNextX][y];
              var _weaponTile4 = tileInfo[_weaponNextX2][y];

              if ((playerNextX === doorX && y === doorY || _weaponNextX2 === doorX && y === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断是否碰到了敌人


              for (var _i10 = 0; _i10 < enemies.length; ++_i10) {
                var {
                  x: _enemyX5,
                  y: _enemyY5
                } = enemies[_i10];

                if (playerNextX === _enemyX5 && y === _enemyY5 || _weaponNextX2 === _enemyX5 && y === _enemyY5) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              for (var _i11 = 0; _i11 < bursts.length; _i11++) {
                var {
                  x: _burstX5,
                  y: _burstY5
                } = bursts[_i11]; //人能走且枪能走

                if (playerNextX === _burstX5 && y === _burstY5 && (!_weaponTile4 || _weaponTile4.moveable)) {
                  return false;
                }
              }

              if (_playerTile5 && _playerTile5.moveable && (!_weaponTile4 || _weaponTile4.moveable)) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              //人物方向为下
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return;
              }

              var _weaponNextY2 = y + 1;

              var _playerTile6 = tileInfo[playerNextX][y];
              var _weaponTile5 = tileInfo[playerNextX][_weaponNextY2];

              if ((playerNextX === doorX && y === doorY || playerNextX === doorX && _weaponNextY2 === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断是否碰到了敌人


              for (var _i12 = 0; _i12 < enemies.length; ++_i12) {
                var {
                  x: _enemyX6,
                  y: _enemyY6
                } = enemies[_i12];

                if (playerNextX === _enemyX6 && y === _enemyY6 || playerNextX === _enemyX6 && _weaponNextY2 === _enemyY6) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              for (var _i13 = 0; _i13 < bursts.length; _i13++) {
                var {
                  x: _burstX6,
                  y: _burstY6
                } = bursts[_i13]; //人能走且枪能走

                if (playerNextX === _burstX6 && y === _burstY6 && (!_weaponTile5 || _weaponTile5.moveable)) {
                  return false;
                }
              }

              if (_playerTile6 && _playerTile6.moveable && (!_weaponTile5 || _weaponTile5.moveable)) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              //人物方向为右
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return;
              }

              var _playerTile7 = tileInfo[playerNextX][y];

              if (playerNextX === doorX && y === doorY && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断是否碰到了敌人


              for (var _i14 = 0; _i14 < enemies.length; ++_i14) {
                var {
                  x: _enemyX7,
                  y: _enemyY7
                } = enemies[_i14];

                if (playerNextX === _enemyX7 && y === _enemyY7) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              }

              if (_playerTile7 && _playerTile7.moveable) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            //输入方向向下
            var _playerNextY = y + 1;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //人物向上
              if (_playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return;
              }

              var _playerTile8 = tileInfo[x][_playerNextY]; //判断是否碰到了门

              if (x === doorX && _playerNextY === doorY && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断是否碰到了敌人


              for (var _i15 = 0; _i15 < enemies.length; ++_i15) {
                var {
                  x: _enemyX8,
                  y: _enemyY8
                } = enemies[_i15];

                if (x === _enemyX8 && _playerNextY === _enemyY8) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              for (var _i16 = 0; _i16 < bursts.length; _i16++) {
                var {
                  x: _burstX7,
                  y: _burstY7
                } = bursts[_i16]; //人能走且枪能走

                if (x === _burstX7 && _playerNextY === _burstY7) {
                  return false;
                }
              }

              if (_playerTile8 && _playerTile8.moveable) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              //人物向左
              if (_playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return;
              }

              var _weaponNextX3 = x - 1;

              var _playerTile9 = tileInfo[x][_playerNextY];
              var _weaponTile6 = tileInfo[_weaponNextX3][_playerNextY]; //判断是否碰到了门

              if ((x === doorX && _playerNextY === doorY || _weaponNextX3 === doorX && _playerNextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断是否碰到了敌人


              for (var _i17 = 0; _i17 < enemies.length; ++_i17) {
                var {
                  x: _enemyX9,
                  y: _enemyY9
                } = enemies[_i17];

                if (x === _enemyX9 && _playerNextY === _enemyY9 || _weaponNextX3 === _enemyX9 && _playerNextY === _enemyY9) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              for (var _i18 = 0; _i18 < bursts.length; _i18++) {
                var {
                  x: _burstX8,
                  y: _burstY8
                } = bursts[_i18]; //人能走且枪能走

                if (x === _burstX8 && _playerNextY === _burstY8 && (!_weaponTile6 || _weaponTile6.moveable)) {
                  return false;
                }
              }

              if (_playerTile9 && _playerTile9.moveable && (!_weaponTile6 || _weaponTile6.moveable)) {//人可走
                //枪不存在，或者枪能转
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$x$_weaponNe;

              //人物向下
              if (_playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return;
              }

              var _weaponNextY3 = y + 2;

              var _playerTile10 = tileInfo[x][_playerNextY];

              var _weaponTile7 = (_tileInfo$x$_weaponNe = tileInfo[x][_weaponNextY3]) != null ? _tileInfo$x$_weaponNe : null; //判断是否碰到了门


              if ((x === doorX && _playerNextY === doorY || x === doorX && _weaponNextY3 === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断是否碰到了敌人


              for (var _i19 = 0; _i19 < enemies.length; ++_i19) {
                var {
                  x: _enemyX10,
                  y: _enemyY10
                } = enemies[_i19];

                if (x === _enemyX10 && _playerNextY === _enemyY10 || x === _enemyX10 && _weaponNextY3 === _enemyY10) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              for (var _i20 = 0; _i20 < bursts.length; _i20++) {
                var {
                  x: _burstX9,
                  y: _burstY9
                } = bursts[_i20]; //人能走且枪能走

                if (x === _burstX9 && _playerNextY === _burstY9 && (!_weaponTile7 || _weaponTile7.turnable)) {
                  return false;
                }
              }

              if (_playerTile10 && _playerTile10.moveable && (!_weaponTile7 || _weaponTile7.turnable)) {//人可走
                //枪不存在，或者枪能转
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              //人物向右
              if (_playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return;
              }

              var _weaponNextX4 = x + 1;

              var _playerTile11 = tileInfo[x][_playerNextY];
              var _weaponTile8 = tileInfo[_weaponNextX4][_playerNextY]; //判断是否碰到了门

              if ((x === doorX && _playerNextY === doorY || _weaponNextX4 === doorX && _playerNextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断是否碰到了敌人


              for (var _i21 = 0; _i21 < enemies.length; ++_i21) {
                var {
                  x: _enemyX11,
                  y: _enemyY11
                } = enemies[_i21];

                if (x === _enemyX11 && _playerNextY === _enemyY11 || _weaponNextX4 === _enemyX11 && _playerNextY === _enemyY11) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              for (var _i22 = 0; _i22 < bursts.length; _i22++) {
                var {
                  x: _burstX10,
                  y: _burstY10
                } = bursts[_i22]; //人能走且枪能走

                if (x === _burstX10 && _playerNextY === _burstY10 && (!_weaponTile8 || _weaponTile8.moveable)) {
                  return false;
                }
              }

              if (_playerTile11 && _playerTile11.moveable && (!_weaponTile8 || _weaponTile8.moveable)) {//人可走
                //枪不存在，或者枪能转
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            //输入方向向右
            var _playerNextX = x + 1;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //人物向上
              if (_playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return;
              }

              var _weaponNextY4 = y - 1;

              var _playerTile12 = tileInfo[_playerNextX][y];
              var _weaponTile9 = tileInfo[_playerNextX][_weaponNextY4]; //判断是否碰到了门

              if ((_playerNextX === doorX && y === doorY || _playerNextX === doorX && _weaponNextY4 === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断是否碰到了敌人


              for (var _i23 = 0; _i23 < enemies.length; ++_i23) {
                var {
                  x: _enemyX12,
                  y: _enemyY12
                } = enemies[_i23];

                if (_playerNextX === _enemyX12 && y === _enemyY12 || _playerNextX === _enemyX12 && _weaponNextY4 === _enemyY12) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂


              for (var _i24 = 0; _i24 < bursts.length; _i24++) {
                var {
                  x: _burstX11,
                  y: _burstY11
                } = bursts[_i24]; //人能走且枪能走

                if (_playerNextX === _burstX11 && y === _burstY11 && (!_weaponTile9 || _weaponTile9.moveable)) {
                  return false;
                }
              }

              if (_playerTile12 && _playerTile12.moveable && (!_weaponTile9 || _weaponTile9.moveable)) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              //人物向左
              if (_playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return;
              }

              var _playerTile13 = tileInfo[_playerNextX][y]; //判断是否碰到了门

              if (_playerNextX === doorX && y === doorY && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断是否碰到了敌人


              for (var _i25 = 0; _i25 < enemies.length; ++_i25) {
                var {
                  x: _enemyX13,
                  y: _enemyY13
                } = enemies[_i25];

                if (_playerNextX === _enemyX13 && y === _enemyY13) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂


              for (var _i26 = 0; _i26 < bursts.length; _i26++) {
                var {
                  x: _burstX12,
                  y: _burstY12
                } = bursts[_i26]; //人能走且枪能走

                if (_playerNextX === _burstX12 && y === _burstY12) {
                  return false;
                }
              }

              if (_playerTile13 && _playerTile13.moveable) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              //人物向下
              if (_playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return;
              }

              var _weaponNextY5 = y + 1;

              var _playerTile14 = tileInfo[_playerNextX][y];
              var _weaponTile10 = tileInfo[_playerNextX][_weaponNextY5]; //判断是否碰到了门

              if ((_playerNextX === doorX && y === doorY || _playerNextX === doorX && _weaponNextY5 === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断是否碰到了敌人


              for (var _i27 = 0; _i27 < enemies.length; ++_i27) {
                var {
                  x: _enemyX14,
                  y: _enemyY14
                } = enemies[_i27];

                if (_playerNextX === _enemyX14 && y === _enemyY14 || _playerNextX === _enemyX14 && _weaponNextY5 === _enemyY14) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂


              for (var _i28 = 0; _i28 < bursts.length; _i28++) {
                var {
                  x: _burstX13,
                  y: _burstY13
                } = bursts[_i28]; //人能走且枪能走

                if (_playerNextX === _burstX13 && y === _burstY13 && (!_weaponTile10 || _weaponTile10.moveable)) {
                  return false;
                }
              }

              if (_playerTile14 && _playerTile14.moveable && (!_weaponTile10 || _weaponTile10.moveable)) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              //人物向右
              if (_playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return;
              }

              var _weaponNextX5 = x + 2;

              var _playerTile15 = tileInfo[_playerNextX][y];
              var _weaponTile11 = tileInfo[_weaponNextX5][y]; //判断是否碰到了门

              if ((_playerNextX === doorX && y === doorY || _weaponNextX5 === doorX && y === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断是否碰到了敌人


              for (var _i29 = 0; _i29 < enemies.length; ++_i29) {
                var {
                  x: _enemyX15,
                  y: _enemyY15
                } = enemies[_i29];

                if (_playerNextX === _enemyX15 && y === _enemyY15 || _weaponNextX5 === _enemyX15 && y === _enemyY15) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂


              for (var _i30 = 0; _i30 < bursts.length; _i30++) {
                var {
                  x: _burstX14,
                  y: _burstY14
                } = bursts[_i30]; //人能走且枪能走

                if (_playerNextX === _burstX14 && y === _burstY14 && (!_weaponTile11 || _weaponTile11.moveable)) {
                  return false;
                }
              }

              if (_playerTile15 && _playerTile15.moveable && (!_weaponTile11 || _weaponTile11.moveable)) {} else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            //输入方向向左转
            //需要判断三个瓦片
            var nextX;
            var nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              nextX = x - 1;
              nextY = y - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextX = x + 1;
              nextY = y + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextX = x - 1;
              nextY = y + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextX = x + 1;
              nextY = y - 1;
            } //判断是否碰到了门


            if ((x === doorX && nextY === doorY || nextX === doorX && y === doorY || nextX === doorX && nextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //判断是否碰到了敌人


            for (var _i31 = 0; _i31 < enemies.length; ++_i31) {
              var {
                x: _enemyX16,
                y: _enemyY16
              } = enemies[_i31];

              if (x === _enemyX16 && nextY === _enemyY16 || nextX === _enemyX16 && y === _enemyY16 || nextX === _enemyX16 && nextY === _enemyY16) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
            }

            if ((!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)) {//empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            }

            return false;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT) {
            //输入方向向左转
            //需要判断三个瓦片
            var _nextX;

            var _nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              _nextX = x + 1;
              _nextY = y - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              _nextX = x - 1;
              _nextY = y + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              _nextX = x - 1;
              _nextY = y - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              _nextX = x + 1;
              _nextY = y + 1;
            } //判断是否碰到了门


            if ((x === doorX && _nextY === doorY || _nextX === doorX && y === doorY || _nextX === doorX && _nextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断是否碰到了敌人


            for (var _i32 = 0; _i32 < enemies.length; ++_i32) {
              var {
                x: _enemyX17,
                y: _enemyY17
              } = enemies[_i32];

              if (x === _enemyX17 && _nextY === _enemyY17 || _nextX === _enemyX17 && y === _enemyY17 || _nextX === _enemyX17 && _nextY === _enemyY17) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            }

            if ((!tileInfo[x][_nextY] || tileInfo[x][_nextY].turnable) && (!tileInfo[_nextX][y] || tileInfo[_nextX][y].turnable) && (!tileInfo[_nextX][_nextY] || tileInfo[_nextX][_nextY].turnable)) {//empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            }

            return false;
          }

          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f04e49bcfa43316acf6e4839facfd59124125744.js.map