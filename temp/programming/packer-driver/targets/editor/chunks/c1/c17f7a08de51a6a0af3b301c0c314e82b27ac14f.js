System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, ENTITY_TYPE_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, getInitParamsNumber, StateMachine, SpikeOneSubStateMachine, SpikeTwoSubStateMachine, SpikeFourSubStateMachine, SpikeThreeSubStateMachine, SpikeManager, _dec, _class, _crd, ccclass, property, SpikeStateMachine;

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsNumber(extras) {
    _reporterNs.report("getInitParamsNumber", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeOneSubStateMachine(extras) {
    _reporterNs.report("SpikeOneSubStateMachine", "./SpikeOneSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeTwoSubStateMachine(extras) {
    _reporterNs.report("SpikeTwoSubStateMachine", "./SpikeTwoSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeFourSubStateMachine(extras) {
    _reporterNs.report("SpikeFourSubStateMachine", "./SpikeFourSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeThreeSubStateMachine(extras) {
    _reporterNs.report("SpikeThreeSubStateMachine", "./SpikeThreeSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikeManager(extras) {
    _reporterNs.report("SpikeManager", "./SpikeManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      getInitParamsNumber = _unresolved_3.getInitParamsNumber;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SpikeOneSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      SpikeTwoSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      SpikeFourSubStateMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      SpikeThreeSubStateMachine = _unresolved_7.default;
    }, function (_unresolved_8) {
      SpikeManager = _unresolved_8.SpikeManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2ec1PsRyVPQKR+/nXFKVL4", "SpikeStateMachine", undefined);

      __checkObsolete__(['_decorator', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikeStateMachine", SpikeStateMachine = (_dec = ccclass('SpikeStateMachine'), _dec(_class = class SpikeStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        async init() {
          //添加animation组件
          this.animationComponent = this.addComponent(Animation);
          this.initParams();
          this.initStateMachine(); //等待所有资源加载完毕，才结束init

          this.initAnimationEvent();
          await Promise.all(this.waitingList);
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CUR_COUNT, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE, new (_crd && SpikeOneSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikeOneSubStateMachine({
            error: Error()
          }), SpikeOneSubStateMachine) : SpikeOneSubStateMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO, new (_crd && SpikeTwoSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikeTwoSubStateMachine({
            error: Error()
          }), SpikeTwoSubStateMachine) : SpikeTwoSubStateMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE, new (_crd && SpikeThreeSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikeThreeSubStateMachine({
            error: Error()
          }), SpikeThreeSubStateMachine) : SpikeThreeSubStateMachine)(this));
          this.stateMachine.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR, new (_crd && SpikeFourSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikeFourSubStateMachine({
            error: Error()
          }), SpikeFourSubStateMachine) : SpikeFourSubStateMachine)(this));
        }

        initAnimationEvent() {
          //播到最大数量放回
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            const name = this.animationComponent.defaultClip.name;
            const value = this.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT);

            if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE && name.includes('spikesone/two') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO && name.includes('spikestwo/three') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE && name.includes('spikesthree/four') || value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR && name.includes('spikesfour/five')) {
              this.node.getComponent(_crd && SpikeManager === void 0 ? (_reportPossibleCrUseOfSpikeManager({
                error: Error()
              }), SpikeManager) : SpikeManager).backZero();
            }
          });
        }

        run() {
          /*
          1.判断一下当前是什么状态；
          2.如果当前处于某个状态，接下来判断参数列表；
          3.如果某个触发器处于触发状态，那么就需要进行状态的改变，就从对应状态机列表那里取到对应的
              状态机，并设置当前状态为改变后的状态
          4.使用set方式，可以在set里面调用当前状态的run方法走对应的逻辑
             */
          //获取总点数
          const value = this.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT);

          switch (this._currentState) {
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE):
            case this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR):
              if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE);
              } else if (value === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR) {
                this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachine.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c17f7a08de51a6a0af3b301c0c314e82b27ac14f.js.map