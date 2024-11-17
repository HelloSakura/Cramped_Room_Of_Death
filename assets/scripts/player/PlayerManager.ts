import { _decorator, Component, Node, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc';
import { TILE_HEIGHT, TILE_WIDTH, TileManger } from '../tile/TileManger';
import ResourceManager from '../../runtime/ResourceManager';
import { CONTROLLER_ENUM, DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM } from '../../enums';
import EventManager from '../../runtime/EventManager';
import { PlayerStateMachine } from './PlayerStateMachine';
import { EntityManager } from '../../base/EntityManager';
import DataManager from '../../runtime/DataManager';
import { IEntity } from '../../levels';
import { EnemyManager } from '../../base/EnemyManager';
import { BurstManager } from '../burst/BurstManager';
let { ccclass, property } = _decorator;




@ccclass('PlayerManager')
export class PlayerManager extends EntityManager {

    targetX:number = 0;
    targetY:number = 0;
    private  readonly _speed = 1/10;
    private _isMoving:boolean = false;


    async init(params: IEntity){   
        //添加状态机
        this.fsm = this.addComponent(PlayerStateMachine);
        await this.fsm.init();
        super.init(params);

        this.targetX = this.x;
        this.targetY = this.y;

        //await this.render();
        //move函数和EVENT_ENUM.PLAYER_CTRL信号绑定到了一起
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.inputHandle, this);
        EventManager.Instance.on(EVENT_ENUM.ATTACK_PLAYER, this._onDead, this);
    }

    update(){
        this.updateXY();
        //虚拟坐标转换为瓦片坐标
        //瓦片地图左上角为原点
        //注意人物大小与瓦片之间的偏移
        super.update();
    }

    updateXY(){
        if(this.targetX < this.x){  //在目标右侧
            this.x -= this._speed;  //向左移动
        }
        else if(this.targetX > this.x){
            this.x += this._speed;
        }

        if(this.targetY < this.y){  //在目标上侧
            this.y -= this._speed;  //向下移动
        }
        else if(this.targetY > this.y){
            this.y += this._speed;
        }

        //达到一定距离直接赋值，防止鬼畜
        if(Math.abs(this.targetX - this.x) <= 0.1 && Math.abs(this.targetY - this.y) <= 0.1 && this._isMoving){
            this._isMoving = false;
            this.x = this.targetX;
            this.y = this.targetY;
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
    }


    //处理用户输入
    inputHandle(inputDirection: CONTROLLER_ENUM){
        //正在移动return
        if(this._isMoving){
            return;
        }
        //人物死亡return掉
        if(this.state === ENTITY_STATE_ENUM.DEATH 
        || this.state === ENTITY_STATE_ENUM.AIRDEATH 
        || this.state === ENTITY_STATE_ENUM.ATTACK
        ){
            return;
        }

        //判断攻击敌人
        let id = this._willAttack(inputDirection)
        if(id){
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_ENEMY, id);
            EventManager.Instance.emit(EVENT_ENUM.DOOR_OPEN);
            return;
        }
        //撞了不用往下走了
        if(this.willBlock(inputDirection)){
            console.log("block");
            return; 
        }
        this.move(inputDirection);

    }

    private _willAttack(inputDirection:CONTROLLER_ENUM):boolean{
        let enemies = DataManager.Instance.enemies.filter(enemy => enemy.state !== ENTITY_STATE_ENUM.DEATH);
        for (let i = 0; i < enemies.length; i++) {
            let {x:enemyX, y:enemyY, id:enemyId} = enemies[i];
            if(this.direction === DIRECTION_ENUM.TOP
            && inputDirection === CONTROLLER_ENUM.TOP
            && enemyX === this.x
            && enemyY === this.targetY - 2
            ){
                this.state = ENTITY_STATE_ENUM.ATTACK;
                return enemyId;
            }
            else if(this.direction === DIRECTION_ENUM.LEFT
            && inputDirection === CONTROLLER_ENUM.LEFT
            && enemyX === this.x - 2
            && enemyY === this.targetY
            ){
                this.state = ENTITY_STATE_ENUM.ATTACK;
                return enemyId;
            }
            else if(this.direction === DIRECTION_ENUM.RIGHT
            && inputDirection === CONTROLLER_ENUM.RIGHT
            && enemyX === this.x + 2
            && enemyY === this.targetY
            ){
                this.state = ENTITY_STATE_ENUM.ATTACK;
                return enemyId;
            }
            if(this.direction === DIRECTION_ENUM.BOTTOM
            && inputDirection === CONTROLLER_ENUM.BOTTOM
            && enemyX === this.x
            && enemyY === this.targetY + 2
            ){
                this.state = ENTITY_STATE_ENUM.ATTACK;
                return enemyId;
            }
        
        }
        return null;
    }

    private _onDead(type:ENTITY_STATE_ENUM){
        this.state = type;
    }

    move(inputDirection: CONTROLLER_ENUM){
        
        //console.log(DataManager.Instance.tileInfo);
        //注意Y轴是相反的
        if(inputDirection === CONTROLLER_ENUM.TOP){
            this.targetY -=1;
            this._isMoving = true;
        }
        else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
            this.targetY +=1;
            this._isMoving = true;
        }
        else if(inputDirection === CONTROLLER_ENUM.RIGHT){
            this.targetX +=1;
            this._isMoving = true;
        }
        else if(inputDirection === CONTROLLER_ENUM.LEFT){
            this.targetX -=1;
            this._isMoving = true;
        }
        else if(inputDirection === CONTROLLER_ENUM.TURNLEFT){
            //左转后进入该逻辑
            //左转后人物方向改变了
            if(this.direction === DIRECTION_ENUM.TOP){
                this.direction = DIRECTION_ENUM.LEFT;
            }
            else if(this.direction === DIRECTION_ENUM.LEFT){
                this.direction = DIRECTION_ENUM.BOTTOM;
            }
            else if(this.direction === DIRECTION_ENUM.BOTTOM){
                this.direction = DIRECTION_ENUM.RIGHT;
            }
            else if(this.direction === DIRECTION_ENUM.RIGHT){
                this.direction = DIRECTION_ENUM.TOP;
            }
            this.state = ENTITY_STATE_ENUM.TURNLEFT;
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
        else if(inputDirection === CONTROLLER_ENUM.TURNRIGHT){
            if(this.direction === DIRECTION_ENUM.TOP){
                this.direction = DIRECTION_ENUM.RIGHT;
            }
            else if(this.direction === DIRECTION_ENUM.RIGHT){
                this.direction = DIRECTION_ENUM.BOTTOM;
            }
            else if(this.direction === DIRECTION_ENUM.BOTTOM){
                this.direction = DIRECTION_ENUM.LEFT;
            }
            else if(this.direction === DIRECTION_ENUM.LEFT){
                this.direction = DIRECTION_ENUM.TOP;
            }
            this.state = ENTITY_STATE_ENUM.TURNRIGHT;
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
    }


    //判断是否撞墙了
    willBlock(inputDirection: CONTROLLER_ENUM):boolean{
        //解构出自己数据
        let {targetX:x, targetY:y, direction} = this;
        //解构出地图信息
        let {tileInfo} = DataManager.Instance;
        //解构出门的信息
        let {x:doorX, y:doorY, state:doorState} = DataManager.Instance.door;
        //解构出未死亡的敌人信息
        let enemies:EnemyManager[] = DataManager.Instance.enemies.filter(enemy=>enemy.state !== ENTITY_STATE_ENUM.DEATH);
        //解构出地裂信息
        let bursts:BurstManager[] = DataManager.Instance.bursts.filter(burst=>burst.state !== ENTITY_STATE_ENUM.DEATH);

        
        if(inputDirection === CONTROLLER_ENUM.TOP){
            //输入方向为上
            //拿到下一个y坐标(用二维坐标来表示角色位置而不是position)
            let playerNextY = y - 1;
            if(direction === DIRECTION_ENUM.TOP){
                //人当前方向也是上
                //往上直接遇到墙
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }

                //拿到下两个瓦片，一个是人物，一个是枪，总不能枪怼墙上
                let weaponNextY = y - 2;
                let playerTile = tileInfo[x][playerNextY];
                let weaponTile = tileInfo[x][weaponNextY];

                //判断是否碰到了门
                if(((x === doorX && playerNextY === doorY)|| (x === doorX && weaponNextY === doorY))
                && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;    
                }

                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY)
                    || (x === enemyX && weaponNextY === enemyY)
                    ){
                            this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                            return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.turnable)){
                        return false;
                    }
                }

                //判断地图元素
                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)){
                    //人能走 且 枪能走，要么瓦片不存在要么瓦片可以转动
                    //empty
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }

            }
            else if(direction === DIRECTION_ENUM.LEFT){
                //当前方向为左
                //需要三个瓦片，左上角
                
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return;
                }

                //拿到下两个瓦片
                //这个时候枪是横向左，人可能不被挡住，但是枪会
                let weaponNextX = x - 1;
                let playerTile = tileInfo[x][playerNextY];
                let weaponTile = tileInfo[weaponNextX][playerNextY];

                //是否碰到了门
                if(((x === doorX && playerNextY === doorY) || (weaponNextX === doorX && playerNextY === doorY))
                && doorState != ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;
                }
                
                //是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY) || (weaponNextX === enemyX && playerNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                        return true;
                    }
                }
                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.turnable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)){
                    //人能走
                    //枪不存在，或者枪能转
                }
                else{
                    //待定
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;
                }


            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                //当前方向为下
                //只需要下一个瓦片可走就行
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return;
                }
                //拿到瓦片
                let playerTile = tileInfo[x][playerNextY];
                //是否碰到了门
                if((x === doorX && playerNextY === doorY) && doorState != ENTITY_STATE_ENUM.DEATH){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;
                }
    
                //是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if(x === enemyX && playerNextY === enemyY){
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                        return true;
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if(x === burstX && playerNextY === burstY){
                        return false;
                    }
                }


                if(playerTile && playerTile.moveable){
                    //人能走就行
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                //当前方向为右
                //需要三个瓦片，右上角
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return;
                }

                let weaponNextX = x + 1;
                let playerTile = tileInfo[x][playerNextY];
                let weaponTile = tileInfo[weaponNextX][playerNextY];

                //是否碰到了门
                if((x === doorX && playerNextY === doorY) && doorState != ENTITY_STATE_ENUM.DEATH){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;
                }
    
                //是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY)
                    || (weaponNextX === enemyX && playerNextY === enemyY)
                    ){
                            this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                            return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }


                
                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){
                    //人物：下一个瓦片且可移动
                    //枪：不存在或能转动

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;
                }

            }
        }
        else if(inputDirection === CONTROLLER_ENUM.LEFT){
            //输入方向为左
            let playerNextX = x - 1;
            if(direction === DIRECTION_ENUM.TOP){
                //人物方向为上
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return;
                }
                let weaponNextY = y - 1;
                let playerTile = tileInfo[playerNextX][y];
                let weaponTile = tileInfo[playerNextX][weaponNextY]
                //判断是否碰到了门
                if(((playerNextX === doorX && y === doorY)|| (x === doorX && weaponNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY) || (x === enemyX && weaponNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){
                    //人：能走
                    //枪不存在，或者枪能转
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }

            }
            else if(direction === DIRECTION_ENUM.LEFT){
                //人物方向为左
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return;
                }
                let weaponNextX = x - 2;
                let playerTile = tileInfo[playerNextX][y];
                let weaponTile = tileInfo[weaponNextX][y];

                if(((playerNextX === doorX && y === doorY)|| (weaponNextX === doorX && y === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY)|| (weaponNextX === enemyX && y === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                        return true;    
                    }
                }
                
                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }
                
                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;
                }

            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                //人物方向为下
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return;
                }
                let weaponNextY = y + 1;
                let playerTile:TileManger = tileInfo[playerNextX][y];
                let weaponTile:TileManger = tileInfo[playerNextX][weaponNextY];
                if(((playerNextX === doorX && y === doorY)|| (playerNextX === doorX && weaponNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY)|| (playerNextX === enemyX && weaponNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                        return true;    
                    }
                }
                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;
                }


            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                //人物方向为右
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return;
                }

                let playerTile = tileInfo[playerNextX][y];
                if((playerNextX === doorX && y === doorY) && doorState !== ENTITY_STATE_ENUM.DEATH){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if(playerNextX === enemyX && y === enemyY){
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                        return true;    
                    }
                }

                if(playerTile && playerTile.moveable){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;
                }
            }
        }
        else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
            //输入方向向下
            let playerNextY:number = y + 1;
            if(direction === DIRECTION_ENUM.TOP){
                //人物向上
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return;
                }
                
                let playerTile = tileInfo[x][playerNextY];
                //判断是否碰到了门
                if((x === doorX && playerNextY === doorY)
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if(x === enemyX && playerNextY === enemyY){
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if(x === burstX && playerNextY === burstY){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.LEFT){
                //人物向左
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return;
                }
                let weaponNextX = x - 1;
                let playerTile = tileInfo[x][playerNextY];
                let weaponTile = tileInfo[weaponNextX][playerNextY];
                //判断是否碰到了门
                if(((x === doorX && playerNextY === doorY)|| (weaponNextX === doorX && playerNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY)|| (weaponNextX === enemyX && playerNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){
                    //人可走
                    //枪不存在，或者枪能转
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                //人物向下
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return;
                }
                let weaponNextY:number = y + 2;
                let playerTile:TileManger = tileInfo[x][playerNextY];
                let weaponTile:TileManger = tileInfo[x][weaponNextY];

                //判断是否碰到了门
                if(((x === doorX && playerNextY === doorY)|| (x === doorX && weaponNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY)|| (x === enemyX && weaponNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){
                    //人可走
                    //枪不存在，或者枪能转
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                //人物向右
                if(playerNextY < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return;
                }
                let weaponNextX = x + 1;
                let playerTile = tileInfo[x][playerNextY];
                let weaponTile = tileInfo[weaponNextX][playerNextY];
                //判断是否碰到了门
                if(((x === doorX && playerNextY === doorY)|| (weaponNextX === doorX && playerNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((x === enemyX && playerNextY === enemyY)|| (weaponNextX === enemyX && playerNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((x === burstX && playerNextY === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){
                    //人可走
                    //枪不存在，或者枪能转
                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;
                }
            }
        }
        else if(inputDirection === CONTROLLER_ENUM.RIGHT){
            //输入方向向右
            let playerNextX = x + 1;
            if(direction === DIRECTION_ENUM.TOP){
                //人物向上
                
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return;
                }
                let weaponNextY = y - 1;
                let playerTile = tileInfo[playerNextX][y];
                let weaponTile = tileInfo[playerNextX][weaponNextY];
                //判断是否碰到了门
                if(((playerNextX === doorX && y === doorY)|| (playerNextX === doorX && weaponNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY)|| (playerNextX === enemyX && weaponNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.LEFT){
                //人物向左
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return;
                }
                let playerTile = tileInfo[playerNextX][y];
                //判断是否碰到了门
                if((playerNextX === doorX && y === doorY)
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if(playerNextX === enemyX && y === enemyY){
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if(playerNextX === burstX && y === burstY){
                        return false;
                    }
                }


                if(playerTile && playerTile.moveable){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT;
                    return true;
                }
            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                //人物向下
                
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return;
                }
                let weaponNextY = y + 1;
                let playerTile = tileInfo[playerNextX][y];
                let weaponTile = tileInfo[playerNextX][weaponNextY];
                //判断是否碰到了门
                if(((playerNextX === doorX && y === doorY)|| (playerNextX === doorX && weaponNextY === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY)|| (playerNextX === enemyX && weaponNextY === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                        return true;    
                    }
                }
                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK;
                    return true;
                }

            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                //人物向右
                if(playerNextX < 0){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return;
                }
                let weaponNextX = x + 2;
                let playerTile = tileInfo[playerNextX][y];
                let weaponTile = tileInfo[weaponNextX][y];
                //判断是否碰到了门
                if(((playerNextX === doorX && y === doorY)|| (weaponNextX === doorX && y === doorY))
                    && doorState !== ENTITY_STATE_ENUM.DEATH
                ){
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;  
                }
    
                //判断是否碰到了敌人
                for(let i = 0; i < enemies.length; ++i){
                    let {x:enemyX, y:enemyY} = enemies[i];
                    if((playerNextX === enemyX && y === enemyY)|| (weaponNextX === enemyX && y === enemyY)){
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                        return true;    
                    }
                }

                //判断地裂
                for (let i = 0; i < bursts.length; i++) {
                    let {x:burstX, y:burstY} = bursts[i];
                    //人能走且枪能走
                    if((playerNextX === burstX && y === burstY) && (!weaponTile || weaponTile.moveable)){
                        return false;
                    }
                }

                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.moveable)){

                }
                else{
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT;
                    return true;
                }

            }
        }
        else if(inputDirection === CONTROLLER_ENUM.TURNLEFT){
            //输入方向向左转
            //需要判断三个瓦片
            let nextX;
            let nextY;

            if(direction === DIRECTION_ENUM.TOP){
                nextX = x - 1;
                nextY = y - 1;
            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                nextX = x + 1;
                nextY = y + 1;
            }
            else if(direction === DIRECTION_ENUM.LEFT){
                nextX = x - 1;
                nextY = y + 1;
            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                nextX = x + 1;
                nextY = y - 1;
            }

            //判断是否碰到了门
            if(((x === doorX && nextY === doorY) || (nextX === doorX && y === doorY) || (nextX === doorX && nextY === doorY))
                && doorState !== ENTITY_STATE_ENUM.DEATH
            ){
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                return true;  
            }

            //判断是否碰到了敌人
            for(let i = 0; i < enemies.length; ++i){
                let {x:enemyX, y:enemyY} = enemies[i];
                if((x === enemyX && nextY === enemyY) || (nextX === enemyX && y === enemyY) || (nextX === enemyX && nextY === enemyY)){
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                    return true;    
                }
            }

            

            if(
                   (!tileInfo[x][nextY] || tileInfo[x][nextY].turnable)
                && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable)
                && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)
            ){
                //empty
            }
            else{
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                return true;
            }

            return false;
        }
        else if(inputDirection === CONTROLLER_ENUM.TURNRIGHT){
            //输入方向向左转
            //需要判断三个瓦片
            let nextX;
            let nextY;
            if(direction === DIRECTION_ENUM.TOP){
                nextX = x + 1;
                nextY = y - 1;
            }
            else if(direction === DIRECTION_ENUM.BOTTOM){
                nextX = x - 1;
                nextY = y + 1;
            }
            else if(direction === DIRECTION_ENUM.LEFT){
                nextX = x - 1;
                nextY = y - 1;
            }
            else if(direction === DIRECTION_ENUM.RIGHT){
                nextX = x + 1;
                nextY = y + 1;
            }

            //判断是否碰到了门
            if(((x === doorX && nextY === doorY) || (nextX === doorX && y === doorY) || (nextX === doorX && nextY === doorY))
                && doorState !== ENTITY_STATE_ENUM.DEATH
            ){
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT;
                return true;  
            }

            //判断是否碰到了敌人
            for(let i = 0; i < enemies.length; ++i){
                let {x:enemyX, y:enemyY} = enemies[i];
                if((x === enemyX && nextY === enemyY) || (nextX === enemyX && y === enemyY) || (nextX === enemyX && nextY === enemyY)){
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT;
                    return true;    
                }
            }

            if(
                   (!tileInfo[x][nextY] || tileInfo[x][nextY].turnable)
                && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable)
                && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)
            ){
                //empty
            }
            else{
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT;
                return true;
            }

            return false;
        }

        return false;

    }

    
}


