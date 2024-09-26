System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, Sprite, ResourceManager, State, _crd, ANIMATION_SPEED;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourceManager(extras) {
    _reporterNs.report("ResourceManager", "../runtime/ResourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ResourceManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e39bMXHG5FqpU93M9yN1+I", "State", undefined); //需要知道animationClip
      //需要有播放动画的能力


      __checkObsolete__(['animation', 'AnimationClip', 'Sprite', 'SpriteFrame', 'UITransform']);

      //帧率1秒八帧
      ANIMATION_SPEED = 1 / 8; //需要播放动画的组件

      _export("default", State = class State {
        //fsm状态机状态
        //path资源路径
        //wrapMode播放类型
        constructor(fsm, path, wrapMode) {
          if (wrapMode === void 0) {
            wrapMode = AnimationClip.WrapMode.Normal;
          }

          //动画相关
          this.animationClip = void 0;
          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.init();
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            //加载图片资源
            var promise = (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
              error: Error()
            }), ResourceManager) : ResourceManager).Instance.loadDir(_this.path);

            _this.fsm.waitingList.push(promise);

            var spriteFrames = yield promise; //程序化编辑动画剪辑

            _this.animationClip = new AnimationClip();
            var track = new animation.ObjectTrack(); //使用对象轨道

            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); //找sprite组件，找对应spriteFrame属性
            //这种切分方式，map？？
            //对象轨道只有一条动画曲线，[时间，变化属性]

            var frames = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item]); //影分身是因为把外层的idle也加载进去了，这里去掉

            var subframes = frames.slice(0, frames.length - 1);
            track.channel.curve.assignSorted(subframes); //track.channel.curve.assignSorted(frames);
            //轨道添加到动画剪辑以应用

            _this.animationClip.addTrack(track);

            _this.animationClip.name = _this.path;
            _this.animationClip.duration = frames.length * ANIMATION_SPEED;
            _this.animationClip.wrapMode = _this.wrapMode;
          })();
        }

        run() {
          this.fsm.animationComponent.defaultClip = this.animationClip;
          this.fsm.animationComponent.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99571b8a7970c915a0fed0a90c354a88b6455f5d.js.map