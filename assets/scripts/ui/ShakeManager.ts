import { _decorator, Component, game } from 'cc';
import { EVENT_ENUM, SHAKE_TYPE_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
const { ccclass, property } = _decorator;

@ccclass('ShakeManager')
export class ShakeManager extends Component {
    private _isShaking: boolean = false;
    private _oldTime: number = 0;
    private _oldPos: { x: number, y: number } = { x: 0, y: 0 };
    private _type:SHAKE_TYPE_ENUM;

    onLoad() {
        EventManager.Instance.on(EVENT_ENUM.SCREEN_SHAKE, this.onShake, this);
    }

    onDestroy() {
        EventManager.Instance.off(EVENT_ENUM.SCREEN_SHAKE, this.onShake);
    }


    onShake(type: SHAKE_TYPE_ENUM) {
        if (this._isShaking) {
            return;
        }

        this._type = type;
        this._oldTime = game.totalTime;
        this._isShaking = true;
        this._oldPos.x = this.node.position.x;
        this._oldPos.y = this.node.position.y;
    }

    stop(){
        this._isShaking = false;
    }

    update() {
        if (this._isShaking) {
            const duration = 200;
            const amount = 1.6;
            const frequency = 1.6;
            const curSecond = (game.totalTime - this._oldTime) / 1000;
            const totalSecond = duration / 1000;
            const offset = amount * Math.sin(frequency * Math.PI * curSecond);
            
            if(this._type === SHAKE_TYPE_ENUM.TOP){
                this.node.setPosition(this._oldPos.x, this._oldPos.y - offset);
            }
            else if(this._type === SHAKE_TYPE_ENUM.BOTTOM){
                this.node.setPosition(this._oldPos.x, this._oldPos.y + offset);
            }
            else if(this._type === SHAKE_TYPE_ENUM.LEFT){
                this.node.setPosition(this._oldPos.x - offset, this._oldPos.y);
            }
            else if(this._type === SHAKE_TYPE_ENUM.RIGHT){
                this.node.setPosition(this._oldPos.x + offset, this._oldPos.y);
            }
            

            if (curSecond > totalSecond) {
                this._isShaking = false;
                this.node.setPosition(this._oldPos.x, this._oldPos.y);
            }
        }
    }
}
