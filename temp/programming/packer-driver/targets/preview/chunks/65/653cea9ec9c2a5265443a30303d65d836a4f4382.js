System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, EventManager, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "754d9L9fCJGmbHu5JZhTGhR", "EventManager", undefined);

      _export("default", EventManager = class EventManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          this.eventDic = new Map();
        }

        static get Instance() {
          return super.GetInstance();
        }

        /*JS函数调用非常诡异，地址经常根据调用情况指到不一样的对象上
        需要绑定上下文*/
        //注册绑定，ctx上下文
        on(eventName, func, ctx) {
          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).push({
              func,
              ctx
            });
          } else {
            this.eventDic.set(eventName, [{
              func,
              ctx
            }]);
          }
        } //解绑


        off(eventName, func) {
          if (this.eventDic.has(eventName)) {
            var index = this.eventDic.get(eventName).findIndex(i => i.func === func); //有点意思这写法，利用短路

            index > -1 && this.eventDic.get(eventName).splice(index, 1);
          }
        } //触发，补一下参数


        emit(evenName) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          if (this.eventDic.has(evenName)) {
            this.eventDic.get(evenName).forEach(_ref => {
              var {
                func,
                ctx
              } = _ref;
              ctx ? func.apply(ctx, params) : func(...params);
            });
          }
        } //清空


        clear() {
          this.eventDic.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=653cea9ec9c2a5265443a30303d65d836a4f4382.js.map