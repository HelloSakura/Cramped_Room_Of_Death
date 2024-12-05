import {director, RenderRoot2D, Vec3 } from "cc";
import Singleton from "../base/Singleton";
import { DEFAULT_DURATION, DrawManager } from "../scripts/ui/DrawManager";
import { createUINode } from "../utils";


export default class FadeManager extends Singleton{
    static get Instance(){
        return super.GetInstance<FadeManager>();
    }

    private _fader:DrawManager = null;

    get Fader(){
        if(this._fader !== null){
            return this._fader;
        }


        const root = createUINode();
        root.addComponent(RenderRoot2D);
        const faderNode = createUINode();
        faderNode.setParent(root);
        faderNode.setPosition(Vec3.ZERO);
        this._fader = faderNode.addComponent(DrawManager);
        this._fader.init();
        //声明为常驻节点
        /**
         引擎同时只会运行一个场景，当切换场景时，
         默认会将场景内所有节点和其他实例销毁。
         如果我们需要用一个组件控制所有场景的加载，
         或在场景之间传递参数数据，就需要将
         该组件所在节点标记为「常驻节点」，
         使它在场景切换时不被自动销毁，常驻内存
         */
        director.addPersistRootNode(root);
        return this._fader;
    }

    fadeIn(duration:number = DEFAULT_DURATION){
        return this.Fader.fadeIn(duration);
    }

    fadeOut(duration:number = DEFAULT_DURATION){
        return this.Fader.fadeOut(duration);
    }

    mask(){
        return this.Fader.mask();
    }

}
