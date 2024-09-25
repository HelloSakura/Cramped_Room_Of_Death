System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Singleton, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a4e5AklnpF+ox78wh68OE0", "Singleton", undefined);

      _export("default", Singleton = class Singleton {
        static GetInstance() {
          if (this._instance == null) {
            this._instance = new this();
          }

          return this._instance;
        }

      });

      Singleton._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4d178c0c918df797703014b4d42859943b24d7c.js.map