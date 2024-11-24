//需要知道animationClip
//需要有播放动画的能力

import { animation, AnimationClip, Sprite, SpriteFrame, UITransform } from "cc";
import ResourceManager from "../runtime/ResourceManager";
import { TILE_WIDTH, TILE_HEIGHT } from "../scripts/tile/TileManger";
import { StateMachine } from "./StateMachine";

//帧率1秒八帧
export const ANIMATION_SPEED = 1/8;

//需要播放动画的组件
export default class State{
    //动画相关
    private animationClip: AnimationClip;

    //fsm状态机状态
    //path资源路径
    //wrapMode播放类型
    constructor(
        private fsm: StateMachine, 
        private path: string, 
        private wrapMode: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal,
        private speed:number = ANIMATION_SPEED
    ){
        this.init();
    }

    async init(){
        //加载图片资源
        const promise = ResourceManager.Instance.loadDir(this.path);
        this.fsm.waitingList.push(promise);
        const spriteFrames = await promise;

        //程序化编辑动画剪辑
        this.animationClip = new AnimationClip();
        const track = new animation.ObjectTrack();  //使用对象轨道

        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame');   //找sprite组件，找对应spriteFrame属性
        //这种切分方式，map？？
        //对象轨道只有一条动画曲线，[时间，变化属性]
        const frames:Array<[number, SpriteFrame]> = spriteFrames.map((item:SpriteFrame, index:number)=>[ANIMATION_SPEED*index, item]);
        //影分身是因为把外层的idle也加载进去了，这里去掉
        const subframes = frames.slice(0, frames.length);
        track.channel.curve.assignSorted(subframes);
        //track.channel.curve.assignSorted(frames);

        //轨道添加到动画剪辑以应用
        this.animationClip.addTrack(track);
        this.animationClip.name = this.path;
        
        this.animationClip.duration = frames.length * ANIMATION_SPEED;
        this.animationClip.wrapMode = this.wrapMode;
    }

    run(){
        if(this.fsm.animationComponent?.defaultClip?.name === this.animationClip.name){
            return;
        }
        this.fsm.animationComponent.defaultClip = this.animationClip;
        this.fsm.animationComponent.play();
    }
}