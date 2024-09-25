System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, AnimationClip, Sprite, ResourceManager, State, _crd, ANIMATION_SPEED;

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
        constructor(fsm, path, wrapMode = AnimationClip.WrapMode.Normal) {
          //动画相关
          this.animationClip = void 0;
          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.init();
        }

        async init() {
          //加载图片资源
          const promise = (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
            error: Error()
          }), ResourceManager) : ResourceManager).Instance.loadDir(this.path);
          this.fsm.waitingList.push(promise);
          const spriteFrames = await promise; //程序化编辑动画剪辑

          this.animationClip = new AnimationClip();
          const track = new animation.ObjectTrack(); //使用对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); //找sprite组件，找对应spriteFrame属性
          //这种切分方式，map？？
          //对象轨道只有一条动画曲线，[时间，变化属性]

          const frames = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item]); //影分身是因为把外层的idle也加载进去了，这里去掉

          const subframes = frames.slice(0, frames.length - 1);
          track.channel.curve.assignSorted(subframes); //track.channel.curve.assignSorted(frames);
          //轨道添加到动画剪辑以应用

          this.animationClip.addTrack(track);
          this.animationClip.name = this.path;
          this.animationClip.duration = frames.length * ANIMATION_SPEED;
          this.animationClip.wrapMode = this.wrapMode;
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
//# sourceMappingURL=aefbc31920e06f6582cf07197d5807ff9f269d61.js.map