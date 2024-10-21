System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManager, _crd;

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITILE(extras) {
    _reporterNs.report("ITILE", "../levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorManager(extras) {
    _reporterNs.report("DoorManager", "../scripts/door/DoorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "../scripts/player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileManger(extras) {
    _reporterNs.report("TileManger", "../scripts/tile/TileManger", _context.meta, extras);
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

      _cclegacy._RF.push({}, "8016bzb+cRKL5uiW4eD6t3W", "DataManager", undefined);

      _export("default", DataManager = class DataManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);
          this.mapInfo = void 0;
          this.tileInfo = void 0;
          this.mapRowCount = 0;
          this.mapColumnCount = 0;
          this.levelIndex = 1;
          this.player = void 0;
          this.door = void 0;
          this.enemies = void 0;
        }

        static get Instance() {
          return super.GetInstance();
        }

        reset() {
          this.mapInfo = [];
          this.tileInfo = [];
          this.mapColumnCount = 0;
          this.mapRowCount = 0;
          this.player = null;
          this.door = null;
          this.enemies = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=954b0e73891bc2f7fc96db38997cfdb99b941f24.js.map