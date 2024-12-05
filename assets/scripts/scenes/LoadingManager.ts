import { _decorator, Component, director, Node, ProgressBar, resources } from "cc";
import FadeManager from "../../runtime/FadeManager";
import { SCENE_ENUM } from "../../enums";

const { ccclass, property } = _decorator;

@ccclass('LoadingManager')
export class LoadingManager extends Component {
    @property(ProgressBar)
    bar:ProgressBar = null;

    onLoad(){
        resources.loadDir('texture', (cur, total)=>{
            this.bar.progress = cur/total;
        },
        ()=>{
            director.loadScene(SCENE_ENUM.Start);
        })
    }

    private async _handleStart(){
        await FadeManager.Instance.fadeIn(300);
        director.loadScene(SCENE_ENUM.Battle);
    }
}