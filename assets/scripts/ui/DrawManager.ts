import { _decorator, BlockInputEvents, Color, Component, game, Graphics, Node, UITransform, view } from 'cc';
import EventManager from '../../runtime/EventManager';
import { CONTROLLER_ENUM, EVENT_ENUM } from '../../enums';
const { ccclass, property } = _decorator;

const SCREEN_WIDTH = view.getVisibleSize().width;
const SCREEN_HEIGHT = view.getVisibleSize().height;

enum FADE_STATE_ENUM{
    IDLE,
    FADE_IN,
    FADE_OUT
};

export const DEFAULT_DURATION = 2000;

@ccclass('DrawManager')
export class DrawManager extends Component {
    private _ctx:Graphics;
    private _state:FADE_STATE_ENUM;
    private _oldTime:number = 0;
    private _duration:number = 0;
    private _fadeResolve:(value:PromiseLike<null>)=>void;
    private _block:BlockInputEvents;    //防止输入穿透到下层节点，一般用于上层UI的背景

    init(){
        this._block = this.addComponent(BlockInputEvents);
        this._ctx = this.addComponent(Graphics);
        const transform = this.getComponent(UITransform);
        transform.setAnchorPoint(0, 0);
        transform.setContentSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.setAlpha(1);
    }

    setAlpha(percent:number){
        //清空
        this._ctx.clear();
        //画一个矩形
        this._ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        //填充颜色
        this._ctx.fillColor = new Color(0, 0, 0, 255 * percent);
        //填满
        this._ctx.fill();
        this._block.enabled = percent === 1;
    }

    update(){
        const percent = (game.totalTime - this._oldTime) / this._duration;
        ////console.log(percent);
        switch(this._state){
            case FADE_STATE_ENUM.FADE_IN:
                if(percent < 1){
                    this.setAlpha(percent);
                }
                else{
                    this.setAlpha(1);
                    this._state = FADE_STATE_ENUM.IDLE;
                    this._fadeResolve(null);
                }
                break;
            case FADE_STATE_ENUM.FADE_OUT:
                if(percent < 1){
                    this.setAlpha(1 - percent);
                }
                else{
                    this.setAlpha(0);
                    this._state = FADE_STATE_ENUM.IDLE;
                    this._fadeResolve(null);
                }
                break;    
        
        }
    }

    fadeIn(duration:number = DEFAULT_DURATION){
        this.setAlpha(0);
        this._duration = duration;
        this._oldTime = game.totalTime;
        this._state = FADE_STATE_ENUM.FADE_IN;
        return new Promise((resolve)=>{
            this._fadeResolve = resolve;
        });
    }

    fadeOut(duration:number = DEFAULT_DURATION){
        this.setAlpha(1);
        this._duration = duration;
        this._oldTime = game.totalTime;
        this._state = FADE_STATE_ENUM.FADE_OUT;
        return new Promise((resolve)=>{
            this._fadeResolve = resolve;
        });
    }

    mask(){
        this.setAlpha(1);
        return new Promise((resolve)=>{
            setTimeout(resolve, DEFAULT_DURATION);
        });
    }
}


