import { _decorator, Component, director, Node } from "cc";
import FadeManager from "../../runtime/FadeManager";
import { SCENE_ENUM } from "../../enums";

const { ccclass, property } = _decorator;

@ccclass('StartManager')
export class StartManager extends Component {
    onLoad(){
        FadeManager.Instance.fadeOut(1000);
        this.node.once(Node.EventType.TOUCH_END, this._handleStart, this)
    }

    private async _handleStart(){
        await FadeManager.Instance.fadeIn(300);
        director.loadScene(SCENE_ENUM.Battle);
    }
}