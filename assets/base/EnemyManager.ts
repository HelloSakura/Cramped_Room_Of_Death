import { _decorator } from 'cc';
import { EVENT_ENUM, ENTITY_TYPE_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM } from '../enums';
import DataManager from '../runtime/DataManager';
import EventManager from '../runtime/EventManager';
import { WoodenSkeletonStateMachine } from '../scripts/woodenSkeleton/WoodenSkeletonStateMachine';
import { EntityManager } from './EntityManager';
import { IEntity } from '../levels';
const { ccclass, property } = _decorator;




@ccclass('EnemyManager')
export class EnemyManager extends EntityManager {
    
    onDestroy(): void {
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_BORN, this._onChangeDirection);
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this._onChangeDirection);
        EventManager.Instance.off(EVENT_ENUM.ATTACK_ENEMY, this._onDead);    
    }
    
    async init(params: IEntity){   
        //添加状态机
        super.init(params);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this._onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this._onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.ATTACK_ENEMY, this._onDead, this);

        //保证不管是敌人先生成or玩家先生成都会判断
        this._onChangeDirection(true);
    }

    private _onChangeDirection(isInit:boolean = false){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player) return;

        const {x:playerX, y:playerY} = DataManager.Instance.player;
        const disX = Math.abs(this.x - playerX);
        const disY = Math.abs(this.y - playerY);

        if(disX === disY && !isInit){
            return;
        }

        if(playerX >= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.RIGHT;
        }
        else if(playerX <= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.LEFT;
        }
        else if(playerX <= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.LEFT;
        }
        else if(playerX >= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.RIGHT;
        }
    }


    private _onDead(id:string){
        if(this.state === ENTITY_STATE_ENUM.DEATH){
            return
        }

        if(this.id === id){
            this.state = ENTITY_STATE_ENUM.DEATH;
        }
    }
}


