System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, StateMachine, getInitParamsTrigger, getInitParamsNumber, PARAMS_NAME_ENUM, DeadSubStateMachine, IdleSubStateMachine, _dec, _class, _crd, ccclass, property, IronSkeletonStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsTrigger(extras) {
    _reporterNs.report("getInitParamsTrigger", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsNumber(extras) {
    _reporterNs.report("getInitParamsNumber", "../../base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "../../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeadSubStateMachine(extras) {
    _reporterNs.report("DeadSubStateMachine", "./DeadSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIdleSubStateMachine(extras) {
    _reporterNs.report("IdleSubStateMachine", "./IdleSubStateMachine", _context.meta, extras);
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
      StateMachine = _unresolved_2.StateMachine;
      getInitParamsTrigger = _unresolved_2.getInitParamsTrigger;
      getInitParamsNumber = _unresolved_2.getInitParamsNumber;
    }, function (_unresolved_3) {
      PARAMS_NAME_ENUM = _unresolved_3.PARAMS_NAME_ENUM;
    }, function (_unresolved_4) {
      DeadSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      IdleSubStateMachine = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48e7bGg98JItYPQagsTXI6v", "IronSkeletonStateMachine", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'Animation', 'Component', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronSkeletonStateMachine", IronSkeletonStateMachine = (_dec = ccclass('IronSkeletonStateMachine'), _dec(_class = class IronSkeletonStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //添加animation组件
            _this.animationComponent = _this.addComponent(Animation);

            _this.initParams();

            _this.initStateMachine(); //等待所有资源加载完毕，才结束init


            _this.initAnimationEvent();

            yield Promise.all(_this.waitingList);
          })();
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, (_crd && getInitParamsTrigger === void 0 ? (_reportPossibleCrUseOfgetInitParamsTrigger({
            error: Error()
          }), getInitParamsTrigger) : getInitParamsTrigger)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, (_crd && getInitParamsTrigger === void 0 ? (_reportPossibleCrUseOfgetInitParamsTrigger({
            error: Error()
          }), getInitParamsTrigger) : getInitParamsTrigger)());
        }

        initStateMachine() {
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && IdleSubStateMachine === void 0 ? (_reportPossibleCrUseOfIdleSubStateMachine({
            error: Error()
          }), IdleSubStateMachine) : IdleSubStateMachine)(this));
          this.stateMachine.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && DeadSubStateMachine === void 0 ? (_reportPossibleCrUseOfDeadSubStateMachine({
            error: Error()
          }), DeadSubStateMachine) : DeadSubStateMachine)(this));
        }

        initAnimationEvent() {}

        run() {
          /*
          1.判断一下当前是什么状态；
          2.如果当前处于某个状态，接下来判断参数列表；
          3.如果某个触发器处于触发状态，那么就需要进行状态的改变，就从对应状态机列表那里取到对应的
              状态机，并设置当前状态为改变后的状态
          4.使用set方式，可以在set里面调用当前状态的run方法走对应的逻辑
             */
          switch (this._currentState) {
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
            case this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH):
              if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH);
              } else if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachine.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=708a5201fb09b736aa8eaa1e11f1beaa5c365f27.js.map