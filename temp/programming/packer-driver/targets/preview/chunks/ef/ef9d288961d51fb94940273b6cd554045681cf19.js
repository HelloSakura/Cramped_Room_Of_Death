System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, SpriteFrame, Singleton, ResourceManager, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "412efjF+C9P5596BHqHuNeb", "ResourceManager", undefined);

      __checkObsolete__(['resources', 'SpriteFrame']);

      _export("default", ResourceManager = class ResourceManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        static get Instance() {
          return super.GetInstance();
        } //"texture/tile/tile"


        loadDir(path, type) {
          if (type === void 0) {
            type = SpriteFrame;
          }

          return new Promise((resolve, reject) => {
            resources.loadDir(path, type, (err, assets) => {
              if (err) {
                reject(err);
                return;
              }

              resolve(assets);
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef9d288961d51fb94940273b6cd554045681cf19.js.map