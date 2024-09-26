System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM, EVENT_ENUM, CONTROLLER_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82a84HNjadO773QNkiy9nuv", "index", undefined);

      //墙壁类型
      _export("TILE_TYPE_ENUM", TILE_TYPE_ENUM = /*#__PURE__*/function (TILE_TYPE_ENUM) {
        TILE_TYPE_ENUM["WALL_ROW"] = "WALL_ROW";
        TILE_TYPE_ENUM["WALL_COLUMN"] = "WALL_COLUMN";
        TILE_TYPE_ENUM["WALL_LEFT_TOP"] = "WALL_LEFT_TOP";
        TILE_TYPE_ENUM["WALL_LEFT_BOTTOM"] = "WALL_LEFT_BOTTOM";
        TILE_TYPE_ENUM["WALL_RIGHT_TOP"] = "WALL_RIGHT_TOP";
        TILE_TYPE_ENUM["WALL_RIGHT_BOTTOM"] = "WALL_RIGHT_BOTTOM";
        TILE_TYPE_ENUM["CLIFF_CENTER"] = "CLIFF_CENTER";
        TILE_TYPE_ENUM["CLIFF_LEFT"] = "CLIFF_LEFT";
        TILE_TYPE_ENUM["CLIFF_RIGHT"] = "CLIFF_RIGHT";
        TILE_TYPE_ENUM["FLOOR"] = "FLOOR";
        return TILE_TYPE_ENUM;
      }({}));

      _export("EVENT_ENUM", EVENT_ENUM = /*#__PURE__*/function (EVENT_ENUM) {
        EVENT_ENUM["NEXT_LEVEL"] = "NEXT_LEVEL";
        EVENT_ENUM["PLAYER_CTRL"] = "PLAYER_CTRL";
        EVENT_ENUM["PLAYER_MOVE_END"] = "PLAYER_CTRL";
        EVENT_ENUM["PLAYER_BORN"] = "PLAYER_BORN";
        EVENT_ENUM["ATTACK_PLAYER"] = "ATTACK_PLAYER";
        return EVENT_ENUM;
      }({})); //方向枚举


      _export("CONTROLLER_ENUM", CONTROLLER_ENUM = /*#__PURE__*/function (CONTROLLER_ENUM) {
        CONTROLLER_ENUM["TOP"] = "TOP";
        CONTROLLER_ENUM["BOTTOM"] = "BOTTOM";
        CONTROLLER_ENUM["LEFT"] = "LEFT";
        CONTROLLER_ENUM["RIGHT"] = "RIGHT";
        CONTROLLER_ENUM["TURNLEFT"] = "TURNLEFT";
        CONTROLLER_ENUM["TURNRIGHT"] = "TURNRIGHT";
        return CONTROLLER_ENUM;
      }({})); //状态机参数类型


      _export("FSM_PARAMS_TYPE_ENUM", FSM_PARAMS_TYPE_ENUM = /*#__PURE__*/function (FSM_PARAMS_TYPE_ENUM) {
        FSM_PARAMS_TYPE_ENUM["NUMBER"] = "NUMBER";
        FSM_PARAMS_TYPE_ENUM["TRIGGER"] = "TRIGGER";
        return FSM_PARAMS_TYPE_ENUM;
      }({})); //状态机参数字串


      _export("PARAMS_NAME_ENUM", PARAMS_NAME_ENUM = /*#__PURE__*/function (PARAMS_NAME_ENUM) {
        PARAMS_NAME_ENUM["IDLE"] = "IDLE";
        PARAMS_NAME_ENUM["TURNLEFT"] = "TURNLEFT";
        PARAMS_NAME_ENUM["TURNRIGHT"] = "TURNRIGHT";
        PARAMS_NAME_ENUM["DIRECTION"] = "DIRECTION";
        PARAMS_NAME_ENUM["BLOCKFRONT"] = "BLOCKFRONT";
        PARAMS_NAME_ENUM["BLOCKRIGHT"] = "BLOCKRIGHT";
        PARAMS_NAME_ENUM["BLOCKLEFT"] = "BLOCKLEFT";
        PARAMS_NAME_ENUM["BLOCKBACK"] = "BLOCKBACK";
        PARAMS_NAME_ENUM["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        PARAMS_NAME_ENUM["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        PARAMS_NAME_ENUM["ATTACK"] = "ATTACK";
        PARAMS_NAME_ENUM["DEATH"] = "DEATH";
        PARAMS_NAME_ENUM["AIRDEATH"] = "AIRDEATH";
        return PARAMS_NAME_ENUM;
      }({})); //方向枚举


      _export("DIRECTION_ENUM", DIRECTION_ENUM = /*#__PURE__*/function (DIRECTION_ENUM) {
        DIRECTION_ENUM["TOP"] = "TOP";
        DIRECTION_ENUM["BOTTOM"] = "BOTTOM";
        DIRECTION_ENUM["LEFT"] = "LEFT";
        DIRECTION_ENUM["RIGHT"] = "RIGHT";
        return DIRECTION_ENUM;
      }({})); //数字与方向枚举映射


      _export("DIRECTION_ORDER_ENUM", DIRECTION_ORDER_ENUM = /*#__PURE__*/function (DIRECTION_ORDER_ENUM) {
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["TOP"] = 0] = "TOP";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["BOTTOM"] = 1] = "BOTTOM";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["LEFT"] = 2] = "LEFT";
        DIRECTION_ORDER_ENUM[DIRECTION_ORDER_ENUM["RIGHT"] = 3] = "RIGHT";
        return DIRECTION_ORDER_ENUM;
      }({})); //人物状态


      _export("ENTITY_STATE_ENUM", ENTITY_STATE_ENUM = /*#__PURE__*/function (ENTITY_STATE_ENUM) {
        ENTITY_STATE_ENUM["IDLE"] = "IDLE";
        ENTITY_STATE_ENUM["TURNLEFT"] = "TURNLEFT";
        ENTITY_STATE_ENUM["TURNRIGHT"] = "TURNRIGHT";
        ENTITY_STATE_ENUM["BLOCKFRONT"] = "BLOCKFRONT";
        ENTITY_STATE_ENUM["BLOCKRIGHT"] = "BLOCKRIGHT";
        ENTITY_STATE_ENUM["BLOCKLEFT"] = "BLOCKLEFT";
        ENTITY_STATE_ENUM["BLOCKBACK"] = "BLOCKBACK";
        ENTITY_STATE_ENUM["BLOCKTURNLEFT"] = "BLOCKTURNLEFT";
        ENTITY_STATE_ENUM["BLOCKTURNRIGHT"] = "BLOCKTURNRIGHT";
        ENTITY_STATE_ENUM["ATTACK"] = "ATTACK";
        ENTITY_STATE_ENUM["DEATH"] = "DEATH";
        ENTITY_STATE_ENUM["AIRDEATH"] = "AIRDEATH";
        return ENTITY_STATE_ENUM;
      }({})); //实体类型


      _export("ENTITY_TYPE_ENUM", ENTITY_TYPE_ENUM = /*#__PURE__*/function (ENTITY_TYPE_ENUM) {
        ENTITY_TYPE_ENUM["PLAYER"] = "PLAYER";
        return ENTITY_TYPE_ENUM;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f332674417baec9a5b68aabc783149dd84fdcfd.js.map