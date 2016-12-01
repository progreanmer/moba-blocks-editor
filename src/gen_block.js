var block0={
     "message0":"attack Enemy = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "Enemy","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block0"] = {
  init: function() {
this.jsonInit(block0);
var thisBlock = this;
    this.setTooltip(function() {
  return "The attack method is controlling the actor to attack Enemy."
    });
  }
};

var block1={
     "message0":"is_allies unit = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "unit","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block1"] = {
  init: function() {
this.jsonInit(block1);
var thisBlock = this;
    this.setTooltip(function() {
  return "the is_allies method use to check allies of this actor."
    });
  }
};

var block2={
     "message0":"is_enemy unit = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "unit","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block2"] = {
  init: function() {
this.jsonInit(block2);
var thisBlock = this;
    this.setTooltip(function() {
  return "The is_enemy method use to check Enemy of this actor."
    });
  }
};

var block3={
     "message0":"move pos_x = %1 pos_y = %2 message = %3.",
 "args0": [
{"type":"input_value", "name": "pos_x","check":"Number"},
{"type":"input_value", "name": "pos_y","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block3"] = {
  init: function() {
this.jsonInit(block3);
var thisBlock = this;
    this.setTooltip(function() {
  return "The movement method move the actor."
    });
  }
};

var block4={
     "message0":"use_skill target = %1 hero_skill=0 = %2 message = %3.",
 "args0": [
{"type":"input_value", "name": "target","check":"Number"},
{"type":"input_value", "name": "hero_skill=0","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block4"] = {
  init: function() {
this.jsonInit(block4);
var thisBlock = this;
    this.setTooltip(function() {
  return "The use_skill method is controlling the actor use skill which actorhave to target."
    });
  }
};

var block5={
     "message0":"get_enemy_hp enemy = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "enemy","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block5"] = {
  init: function() {
this.jsonInit(block5);
var thisBlock = this;
    this.setTooltip(function() {
  return "of Hero class.if enemy is’nt in enemy_list will return 0."
    });
  }
};

var block6={
     "message0":"get_hp message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block6"] = {
  init: function() {
this.jsonInit(block6);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return hp attibute  in Hero class."
    });
  }
};

var block7={
     "message0":"get_item_in_hero hero = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "hero","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block7"] = {
  init: function() {
this.jsonInit(block7);
var thisBlock = this;
    this.setTooltip(function() {
  return "to know."
    });
  }
};

var block8={
     "message0":"get_mp message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block8"] = {
  init: function() {
this.jsonInit(block8);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return mp attibute in Hero class."
    });
  }
};

var block9={
     "message0":"buy_item item = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "item","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block9"] = {
  init: function() {
this.jsonInit(block9);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method control hero to buy item."
    });
  }
};

var block10={
     "message0":"can_buy_item item = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "item","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block10"] = {
  init: function() {
this.jsonInit(block10);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return boolean from item which can buy."
    });
  }
};

var block11={
     "message0":"can_sell_item item = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "item","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block11"] = {
  init: function() {
this.jsonInit(block11);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return boolean from item which can sell."
    });
  }
};

var block12={
     "message0":"can_use message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block12"] = {
  init: function() {
this.jsonInit(block12);
var thisBlock = this;
    this.setTooltip(function() {
  return "The can_use method return true if the item can use in the time."
    });
  }
};

var block13={
     "message0":"get_damage message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block13"] = {
  init: function() {
this.jsonInit(block13);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_damage method return damage of the item can make."
    });
  }
};

var block14={
     "message0":"get_delay message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block14"] = {
  init: function() {
this.jsonInit(block14);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_delay method return the delay of available the item."
    });
  }
};

var block15={
     "message0":"get_own_item message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block15"] = {
  init: function() {
this.jsonInit(block15);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return List of owner this item."
    });
  }
};

var block16={
     "message0":"get_prize_when_buy message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block16"] = {
  init: function() {
this.jsonInit(block16);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_prize_when_buy method return prize of item in the shop."
    });
  }
};

var block17={
     "message0":"get_prize_when_sell message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block17"] = {
  init: function() {
this.jsonInit(block17);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_prize_when_sell method return prize of item when sell item."
    });
  }
};

var block18={
     "message0":"get_stack_in_hero hero = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "hero","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block18"] = {
  init: function() {
this.jsonInit(block18);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_stack method return the number of item in the hero."
    });
  }
};

var block19={
     "message0":"get_use_mana message = %1.",
 "args0": [
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block19"] = {
  init: function() {
this.jsonInit(block19);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_use_mana method return mana of item using."
    });
  }
};

var block20={
     "message0":"sell_item item = %1 message = %2.",
 "args0": [
{"type":"input_value", "name": "item","check":"Number"},
{"type":"input_value", "name": "ms", "check":["String", "Array"]}
],
"previousStatement": null,
"nextStatement": null,
"colour": 430
};
Blockly.Blocks["block20"] = {
  init: function() {
this.jsonInit(block20);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method control hero to sell item."
    });
  }
};

