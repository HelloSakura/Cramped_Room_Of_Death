System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, FSM_PARAMS_TYPE_ENUM, _dec, _class, _crd, ccclass, property, getInitParamsTrigger, getInitParamsNumber, StateMachine;

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "../enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "./SubStateMachine", _context.meta, extras);
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
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fce7cdRsqZNpriDL91iqd3T", "StateMachine", undefined);

      __checkObsolete__(['_decorator', 'AnimationClip', 'Animation', 'Component', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator); //参数值类型

      _export("getInitParamsTrigger", getInitParamsTrigger = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER,
          value: false
        };
      });

      _export("getInitParamsNumber", getInitParamsNumber = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).NUMBER,
          value: 0
        };
      });

      _export("StateMachine", StateMachine = (_dec = ccclass('StateMachine'), _dec(_class = class StateMachine extends Component {
        constructor(...args) {
          super(...args);
          //当前状态
          this._currentState = null;
          //需要一个参数列表和状态机列表
          this.params = new Map();
          this.stateMachine = new Map();
          //动画组件
          this.animationComponent = void 0;
          //保证资源加载数组
          this.waitingList = [];
        }

        //get
        get currentState() {
          return this._currentState;
        } //set


        set currentState(newState) {
          this._currentState = newState;

          this._currentState.run();
        }

        resetTrigger() {
          for (const [_, value] of this.params) {
            if (value.type === (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
              error: Error()
            }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER) {
              value.value = false; //动画系统trigger触发后需要重置清空
            }
          }
        }

        getParams(paramsName) {
          if (this.params.has(paramsName)) {
            return this.params.get(paramsName).value;
          }
        }

        setParams(paramsName, value) {
          if (this.params.has(paramsName)) {
            this.params.get(paramsName).value = value;
            this.run();
            this.resetTrigger();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56ef7feb43bd302320695e5f94ed6831496eae7e.js.map