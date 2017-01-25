var attack={
     "message0":"attack Enemy = %1 msg='' = %2 .",
 "args0": [
{"type":"input_value", "name": "Enemy","check":Number},
{"type":"input_value", "name": "msg=''","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["attack"] = {
  init: function() {
this.jsonInit(attack);
var thisBlock = this;
    this.setTooltip(function() {
  return "The attack method is controlling the actor to attack Enemy."
    });
  }
};

var is_allies={
     "message0":"is_allies unit = %1 .",
 "args0": [
{"type":"input_value", "name": "unit","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["is_allies"] = {
  init: function() {
this.jsonInit(is_allies);
var thisBlock = this;
    this.setTooltip(function() {
  return "the is_allies method use to check allies of this actor."
    });
  }
};

var is_enemy={
     "message0":"is_enemy unit = %1 .",
 "args0": [
{"type":"input_value", "name": "unit","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["is_enemy"] = {
  init: function() {
this.jsonInit(is_enemy);
var thisBlock = this;
    this.setTooltip(function() {
  return "The is_enemy method use to check Enemy of this actor."
    });
  }
};

var move={
     "message0":"move pos_x = %1 pos_y = %2 msg = %3 .",
 "args0": [
{"type":"input_value", "name": "pos_x","check":"Number"},
{"type":"input_value", "name": "pos_y","check":"Number"},
{"type":"input_value", "name": "msg","check":["String", "Array"]},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["move"] = {
  init: function() {
this.jsonInit(move);
var thisBlock = this;
    this.setTooltip(function() {
  return "The movement method move the actor.argument in function have 3 argument: pos_x,pos_y"
    });
  }
};

var update_message={
     "message0":"update_message .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["update_message"] = {
  init: function() {
this.jsonInit(update_message);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method use to update message from server for handle event when your hero found some event."
    });
  }
};

var update_status={
     "message0":"update_status .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["update_status"] = {
  init: function() {
this.jsonInit(update_status);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method use to update status from server for HeroController."
    });
  }
};

var use_skill={
     "message0":"use_skill target = %1 hero_skill=0 = %2 .",
 "args0": [
{"type":"input_value", "name": "target","check":Number},
{"type":"input_value", "name": "hero_skill=0","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["use_skill"] = {
  init: function() {
this.jsonInit(use_skill);
var thisBlock = this;
    this.setTooltip(function() {
  return "The use_skill method is controlling the actor use skill which actorhave to target."
    });
  }
};

var get_enemy_hp={
     "message0":"get_enemy_hp enemy = %1 .",
 "args0": [
{"type":"input_value", "name": "enemy","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_enemy_hp"] = {
  init: function() {
this.jsonInit(get_enemy_hp);
var thisBlock = this;
    this.setTooltip(function() {
  return "of Hero class.if enemy is’nt in enemy_list will return 0."
    });
  }
};

var get_hp={
     "message0":"get_hp .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_hp"] = {
  init: function() {
this.jsonInit(get_hp);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return hp attibute  in Hero class."
    });
  }
};

var get_item_in_hero={
     "message0":"get_item_in_hero hero = %1 .",
 "args0": [
{"type":"input_value", "name": "hero","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_item_in_hero"] = {
  init: function() {
this.jsonInit(get_item_in_hero);
var thisBlock = this;
    this.setTooltip(function() {
  return "to know."
    });
  }
};

var get_mp={
     "message0":"get_mp .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_mp"] = {
  init: function() {
this.jsonInit(get_mp);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return mp attibute in Hero class."
    });
  }
};

var buy_item={
     "message0":"buy_item item = %1 .",
 "args0": [
{"type":"input_value", "name": "item","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["buy_item"] = {
  init: function() {
this.jsonInit(buy_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method control hero to buy item."
    });
  }
};

var can_buy_item={
     "message0":"can_buy_item item = %1 .",
 "args0": [
{"type":"input_value", "name": "item","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["can_buy_item"] = {
  init: function() {
this.jsonInit(can_buy_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return boolean from item which can buy."
    });
  }
};

var can_sell_item={
     "message0":"can_sell_item item = %1 .",
 "args0": [
{"type":"input_value", "name": "item","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["can_sell_item"] = {
  init: function() {
this.jsonInit(can_sell_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return boolean from item which can sell."
    });
  }
};

var can_use={
     "message0":"can_use .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["can_use"] = {
  init: function() {
this.jsonInit(can_use);
var thisBlock = this;
    this.setTooltip(function() {
  return "The can_use method return true if the item can use in the time."
    });
  }
};

var get_damage={
     "message0":"get_damage .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_damage"] = {
  init: function() {
this.jsonInit(get_damage);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_damage method return damage of the item can make."
    });
  }
};

var get_delay={
     "message0":"get_delay .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_delay"] = {
  init: function() {
this.jsonInit(get_delay);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_delay method return the delay of available the item."
    });
  }
};

var get_own_item={
     "message0":"get_own_item .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_own_item"] = {
  init: function() {
this.jsonInit(get_own_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return List of owner this item."
    });
  }
};

var get_prize_when_buy={
     "message0":"get_prize_when_buy .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_prize_when_buy"] = {
  init: function() {
this.jsonInit(get_prize_when_buy);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_prize_when_buy method return prize of item in the shop."
    });
  }
};

var get_prize_when_sell={
     "message0":"get_prize_when_sell .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_prize_when_sell"] = {
  init: function() {
this.jsonInit(get_prize_when_sell);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_prize_when_sell method return prize of item when sell item."
    });
  }
};

var get_stack_in_hero={
     "message0":"get_stack_in_hero hero = %1 .",
 "args0": [
{"type":"input_value", "name": "hero","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_stack_in_hero"] = {
  init: function() {
this.jsonInit(get_stack_in_hero);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_stack method return the number of item in the hero."
    });
  }
};

var get_use_mana={
     "message0":"get_use_mana .",
 "args0": [
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["get_use_mana"] = {
  init: function() {
this.jsonInit(get_use_mana);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_use_mana method return mana of item using."
    });
  }
};

var sell_item={
     "message0":"sell_item item = %1 .",
 "args0": [
{"type":"input_value", "name": "item","check":Number},
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["sell_item"] = {
  init: function() {
this.jsonInit(sell_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method control hero to sell item."
    });
  }
};

