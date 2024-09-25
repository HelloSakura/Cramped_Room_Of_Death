import { _decorator, Component, Node } from 'cc';
import EventManager from '../../runtime/EventManager';
import { CONTROLLER_ENUM, EVENT_ENUM } from '../../enums';
const { ccclass, property } = _decorator;

@ccclass('ControllerManager')
export class ControllerManager extends Component {
    handleCtrl(evt:Event, type:string){
        //根据EVENT_ENUM.PLAYER_CTRL查找注册函数
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_CTRL, type as CONTROLLER_ENUM);
    }
}


