
var aliance_message={
  "message0" : "alliance_message msg = %1.",
  "args0": [
    {"type":"input_value", "name": "msg","check":["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour":250
};

Blockly.Blocks["aliance_message"] = {
  init: function() {
this.jsonInit(aliance_message);
var thisBlock = this;
    this.setTooltip(function() {
  return "The aliance_message is method for send message to hero in your team."
    });
  }
};

var attack={
  "message0" : "attack Enemy = %1 msg = %2 .",
  "args0": [
    {"type":"input_value", "name": "Enemy","check":["String", "Array"]},
    {"type":"input_value", "name": "msg","check":["String", "Array"]},
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
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

var buy_item={
  "message0" : "buy_item item = %1 msg = %2 .",
  "args0": [
    {"type":"field_dropdown", "name": "item", "options" : [
      ["ArmorBoot","ITEM1"],
      ["AssasinGrove","ITEM2"],
      ["BladeBoot","ITEM3"],
      ["Boot","ITEM4"],
      ["Emeral","ITEM5"],
      ["Grove","ITEM6"],
      ["Knife","ITEM7"],
      ["ManaPotion","ITEM8"],
      ["Potion","ITEM9"],
      ["Ruby","ITEM10"],
      ["Sapphire","ITEM11"],
      ["Shild","ITEM12"],
      ["SoulBox","ITEM13"],
      ["Sword","ITEM14"]
    ]},
    {"type":"input_value", "name": "msg","check":["String", "Array"]},
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
};
Blockly.Blocks["buy_item"] = {
  init: function() {
this.jsonInit(buy_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method use to buy item in the game."
    });
  }
};

var get_current_hp = {
  "message0" : "get_current_hp.",
  "type": "output",
  "colour": 250,
  "output": "Number"
};

Blockly.Blocks["get_current_hp"] = {
  init: function() {
this.jsonInit(get_current_hp);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return current_hp attibute  in Hero class."
    });
  }
};

var get_current_mp = {
  "message0" : "get_current_mp.",
  "type": "output",
  "colour": 250,
  "output": "Number"
};

Blockly.Blocks["get_current_mp"] = {
  init: function() {
this.jsonInit(get_current_mp);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return current mp or mana attibute in Hero class."
    });
  }
};

var get_hp_percent = {
  "message0" : "get_hp_percent.",
  "type": "output",
  "colour": 250,
  "output": "Number"
};

Blockly.Blocks["get_hp_percent"] = {
  init: function() {
this.jsonInit(get_hp_percent);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return the hp of your hero in percent ratio (1%=0.01)."
    });
  }
};

var get_item_in_hero = {
  "message0" : "get_item_in_hero.",
  "type": "output",
  "colour": 250,
  "output": ["String","Array"]
};

Blockly.Blocks["get_item_in_hero"] = {
  init: function() {
this.jsonInit(get_item_in_hero);
var thisBlock = this;
    this.setTooltip(function() {
  return "The get_item_in_hero method return list of item in your hero."
    });
  }
};

var get_max_mp = {
  "message0" : "get_max_mp.",
  "type": "output",
  "colour": 250,
  "output": "Number"
};

Blockly.Blocks["get_max_mp"] = {
  init: function() {
this.jsonInit(get_max_mp);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return max mp or mana attibute in Hero class."
    });
  }
};

var get_mp_percent = {
  "message0" : "get_mp_percent.",
  "type": "output",
  "colour": 250,
  "output": "Number"
};

Blockly.Blocks["get_mp_percent"] = {
  init: function() {
this.jsonInit(get_mp_percent);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method return max mp or mana attibute in Hero class."
    });
  }
};

var get_near_enemy = {
  "message0" : "get_near_enemy.",
  "type": "output",
  "colour": 250,
  "output": ["String","Array"]
};

Blockly.Blocks["get_near_enemy"] = {
  init: function() {
this.jsonInit(get_near_enemy);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return list of enemys who are near your hero."
    });
  }
};

var get_position = {
  "message0" : "get_position.",
  "type": "output",
  "colour": 250,
  "output": ["String","Array"]
};

Blockly.Blocks["get_position"] = {
  init: function() {
this.jsonInit(get_position);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return position of hero be Tuple (X,Y)."
    });
  }
};

var move={
  "message0" : "move pos_x = %1 pos_y = %2 msg = %3 .",
  "args0": [
    {"type":"input_value", "name": "pos_x","check":"Number"},
    {"type":"input_value", "name": "pos_y","check":"Number"},
    {"type":"input_value", "name": "msg","check":["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
};
Blockly.Blocks["move"] = {
  init: function() {
this.jsonInit(move);
var thisBlock = this;
    this.setTooltip(function() {
  return "The movement method move the actor."
    });
  }
};

var update_message = {
  "message0" : "update_message.",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
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

var update_status = {
  "message0" : "update_status.",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
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

var upgrade_skill={
  "message0" : "upgrade_skill skill_num = %1 msg = %2.",
  "args0": [
    {"type":"input_value", "name": "skill_num","check":"Number"},
    {"type":"input_value", "name": "msg","check":["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
};
Blockly.Blocks["upgrade_skill"] = {
  init: function() {
this.jsonInit(upgrade_skill);
var thisBlock = this;
    this.setTooltip(function() {
  return "The upgrade_skill is method which used to upgrade skill of hero."
    });
  }
};

var use_item={
  "message0" : "use_item item = %1 msg = %2.",
  "args0": [
    {"type":"field_input", "name": "item","text" : "Input name of item here"},
    {"type":"input_value", "name": "msg","check":["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
};
Blockly.Blocks["use_item"] = {
  init: function() {
this.jsonInit(use_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "TThe use_item method is controlling the hero to use item which in hero."
    });
  }
};

var use_skill={
  "message0" : "use_skill skill_num = %1 target = %2 msg = %3 .",
  "args0": [
    {"type":"input_value", "name": "skill_num","check":"Number"},
    {"type":"input_value", "name": "target","check":["String", "Array"]},
    {"type":"input_value", "name": "msg","check":["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 250
};
Blockly.Blocks["use_skill"] = {
  init: function() {
this.jsonInit(use_skill);
var thisBlock = this;
    this.setTooltip(function() {
  return "TThe use_item method is controlling the hero to use item which in hero."
    });
  }
};

var get_rev_message= {
  "message0" : "get_rev_message.",
  "type": "output",
  "colour": 250,
  "output": ["String","Array"]
};

Blockly.Blocks["get_rev_message"] = {
  init: function() {
this.jsonInit(get_rev_message);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return rev_message parameter."
    });
  }
};

var get_connection = {
  "message0" : "get_connection.",
  "type": "output",
  "colour": 250,
  "output": "Boolean"
};

Blockly.Blocks["get_connection"] = {
  init: function() {
this.jsonInit(get_connection);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return status of connection (True or False)."
    });
  }
};

var get_connection = {
  "message0" : "get_connection.",
  "type": "output",
  "colour": 250,
  "output": "Boolean"
};

Blockly.Blocks["get_connection"] = {
  init: function() {
this.jsonInit(get_connection);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return status of connection (True or False)."
    });
  }
};

var get_gold = {
  "message0" : "get_gold.",
  "type": "output",
  "colour": 250,
  "output": "Boolean"
};

Blockly.Blocks["get_gold"] = {
  init: function() {
this.jsonInit(get_gold);
var thisBlock = this;
    this.setTooltip(function() {
  return "This method will return status of connection (True or False)."
    });
  }
};

//addon Blocks

var variable_init ={
  "message0" : "variable %1 = %2.",
  "args0": [
    {"type":"field_input", "name": "var_init_name", "text": "Name variable here"},
    {"type":"input_value", "name": "var_val"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour":350
};

Blockly.Blocks["variable_init"] = {
  init: function() {
this.jsonInit(variable_init);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for create variable.\nName of variable must begin with character"
    });
  }
};

var func = {
  "type": "controls_repeat_ext",
  "message0": "def %1 (self):",
  "args0": [
    {"type": "field_input", "name": "func_name", "text": "Name function here"}
  ],
  "message1": "%1",
  "args1": [
    {"type": "input_statement", "name": "internal_func"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 350
}
Blockly.Blocks["func"] = {
  init: function() {
this.jsonInit(func);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for define function"
    });
  }
};

var for_in = {
  "type": "controls_repeat_ext",
  "message0": "for %1 in %2 :",
  "args0": [
    {"type": "field_input", "name": "for_in_1"},
    {"type": "input_value", "name": "for_in_2", "check": ["String","Array","Number"]}
  ],
  "message1": "%1",
  "args1": [
    {"type": "input_statement", "name": "internal_forin"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
}
Blockly.Blocks["for_in"] = {
  init: function() {
this.jsonInit(for_in);
var thisBlock = this;
    this.setTooltip(function() {
  return "loop for in "
    });
  }
};

var var_out ={
  "message0" : " %1.",
  "args0": [
    {"type":"field_input", "name": "vo_name", "text": "input variable"}
  ],
  "type" : "output",
  "output" : ["Number","String","Array","Boolean"],
  "colour":350
};

Blockly.Blocks["var_out"] = {
  init: function() {
this.jsonInit(var_out);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for use variable which was create"
    });
  }
};

var var_in ={
  "message0" : " %1 = %2.",
  "args0": [
    {"type":"field_input", "name": "vi_name", "text": "input variable"},
    {"type":"input_value", "name": "vi_ch", "check": ["String","Array","Number","Boolean"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour":350
};

Blockly.Blocks["var_in"] = {
  init: function() {
this.jsonInit(var_in);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for use variable which was create for change value"
    });
  }
};

var bc_in ={
  "message0" : " in %1",
  "args0": [
    {"type":"input_value", "name": "bc_in", "check": ["String","Array","Number"]}
  ],
  "type" : "output",
  "output" : "Boolean",
  "colour": 210
};

Blockly.Blocks["bc_in"] = {
  init: function() {
this.jsonInit(bc_in);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for check something in something"
    });
  }
};

var ck_item ={
  "message0" : " %1 %2 ",
  "args0": [
    {"type":"field_input", "name": "ck_item", "text": "item_name"},
    {"type":"input_value", "name": "ck_in", "check": ["String","Array,","Boolean"]}
  ],
  "type" : "output",
  "output" : "Boolean",
  "colour": 350
};

Blockly.Blocks["ck_item"] = {
  init: function() {
this.jsonInit(ck_item);
var thisBlock = this;
    this.setTooltip(function() {
  return "block for check something in something"
    });
  }
};

var time_sleep={
  "message0" : "sleep time %1 second.",
  "args0": [
    {"type":"input_value", "name": "sp_time","check":"Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour":150
};

Blockly.Blocks["time_sleep"] = {
  init: function() {
this.jsonInit(time_sleep);
var thisBlock = this;
    this.setTooltip(function() {
  return "Sleep time in initial second."
    });
  }
};

var func_call={
  "message0" : "%1 function.",
  "args0": [
    {"type":"field_input", "name": "fn_name","text":"Name_of_function"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour":350
};

Blockly.Blocks["func_call"] = {
  init: function() {
this.jsonInit(func_call);
var thisBlock = this;
    this.setTooltip(function() {
  return "call another function in one function."
    });
  }
};
