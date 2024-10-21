//墙壁类型
export enum TILE_TYPE_ENUM {
    WALL_ROW = 'WALL_ROW',                          //横墙
    WALL_COLUMN = 'WALL_COLUMN',                    //竖墙
    WALL_LEFT_TOP = 'WALL_LEFT_TOP',                //左上角
    WALL_LEFT_BOTTOM = 'WALL_LEFT_BOTTOM',          //左下角
    WALL_RIGHT_TOP = 'WALL_RIGHT_TOP',              //右上角
    WALL_RIGHT_BOTTOM = 'WALL_RIGHT_BOTTOM',        //右下角
    CLIFF_CENTER = 'CLIFF_CENTER',                  //悬崖
    CLIFF_LEFT = 'CLIFF_LEFT',                      //左悬崖
    CLIFF_RIGHT = 'CLIFF_RIGHT',                    //右悬崖
    FLOOR = 'FLOOR'                                 //地板
}


export enum EVENT_ENUM{
    NEXT_LEVEL = "NEXT_LEVEL",      //下一关
    PLAYER_CTRL = "PLAYER_CTRL",    //button方向控制信号
    PLAYER_MOVE_END = "PLAYER_MOVE_END", //人物移动停止
    PLAYER_BORN = "PLAYER_BORN",      //人物出生
    ATTACK_PLAYER = "ATTACK_PLAYER",   //攻击
    ATTACK_ENEMY = "ATTACK_ENEMY",       //人物攻击
    DOOR_OPEN = "DOOR_OPEN"             //门开了
}


//方向枚举
export enum CONTROLLER_ENUM{
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    TURNLEFT = "TURNLEFT",
    TURNRIGHT = "TURNRIGHT"
}


//状态机参数类型
export enum FSM_PARAMS_TYPE_ENUM{
    NUMBER = "NUMBER",
    TRIGGER = "TRIGGER"         //触发器，一般用boolean
}

//状态机参数字串
export enum PARAMS_NAME_ENUM{
    IDLE = "IDLE",
    TURNLEFT = "TURNLEFT",
    TURNRIGHT = "TURNRIGHT",
    DIRECTION = "DIRECTION",
    BLOCKFRONT = "BLOCKFRONT", //向前撞
    BLOCKRIGHT = "BLOCKRIGHT",
    BLOCKLEFT = "BLOCKLEFT",
    BLOCKBACK = "BLOCKBACK",
    BLOCKTURNLEFT = "BLOCKTURNLEFT",
    BLOCKTURNRIGHT = "BLOCKTURNRIGHT",
    ATTACK = "ATTACK",
    DEATH = "DEATH",            //地面死
    AIRDEATH = "AIRDEATH"       //空中死
}

//方向枚举
export enum DIRECTION_ENUM{
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

//数字与方向枚举映射
export enum DIRECTION_ORDER_ENUM{
    TOP = 0,
    BOTTOM = 1,
    LEFT = 2,
    RIGHT = 3,
}


//人物状态

export enum ENTITY_STATE_ENUM{
    IDLE = "IDLE",
    TURNLEFT = "TURNLEFT",
    TURNRIGHT = "TURNRIGHT",
    BLOCKFRONT = "BLOCKFRONT", //向前撞
    BLOCKRIGHT = "BLOCKRIGHT",
    BLOCKLEFT = "BLOCKLEFT",
    BLOCKBACK = "BLOCKBACK",
    BLOCKTURNLEFT = "BLOCKTURNLEFT",
    BLOCKTURNRIGHT = "BLOCKTURNRIGHT",
    ATTACK = "ATTACK",
    DEATH = "DEATH",            //地面死
    AIRDEATH = "AIRDEATH"       //空中死
}


//实体类型
export enum ENTITY_TYPE_ENUM{
    PLAYER = "PLAYER",
    SKELETON_WOODEN = "SKELETON_WOODEN",
    SKELETON_IRON = "SKELETON_IRON",
    DOOR = "DOOR"
}