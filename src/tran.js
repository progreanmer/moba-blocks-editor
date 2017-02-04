Blockly.Python["attack"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"Enemy") || "";
var arg1 = Blockly.Python.valueToCode(block,"msg=''") || "";
var code = "self.controller.attack("+")\n";
 return code;
}

Blockly.Python["is_allies"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"unit") || "";
var code = "self.controller.is_allies("+")\n";
 return code;
}

Blockly.Python["is_enemy"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"unit") || "";
var code = "self.controller.is_enemy("+")\n";
 return code;
}

Blockly.Python["move"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"pos_x") || "0";
var arg2 = Blockly.Python.valueToCode(block,"pos_y") || "0";
var arg3 = Blockly.Python.valueToCode(block,"msg") || "";
var code = "self.controller.move("+ arg1+","+ arg2+","+ arg3+")\n";
 return code;
}

Blockly.Python["update_message"] = function(block) {

var code = "self.controller.update_message("+")\n";
 return code;
}

Blockly.Python["update_status"] = function(block) {

var code = "self.controller.update_status("+")\n";
 return code;
}

Blockly.Python["use_skill"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"target") || "";
var arg1 = Blockly.Python.valueToCode(block,"hero_skill=0") || "";
var code = "self.controller.use_skill("+")\n";
 return code;
}

Blockly.Python["get_enemy_hp"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"enemy") || "";
var code = "hero_controller.HeroStatus.get_enemy_hp("+")\n";
 return code;
}

Blockly.Python["get_hp"] = function(block) {

var code = "hero_controller.HeroStatus.get_hp("+")\n";
 return code;
}

Blockly.Python["get_item_in_hero"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"hero") || "";
var code = "hero_controller.HeroStatus.get_item_in_hero("+")\n";
 return code;
}

Blockly.Python["get_mp"] = function(block) {

var code = "hero_controller.HeroStatus.get_mp("+")\n";
 return code;
}

Blockly.Python["buy_item"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "";
var code = "hero_controller.UsingItem.buy_item("+")\n";
 return code;
}

Blockly.Python["can_buy_item"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "";
var code = "hero_controller.UsingItem.can_buy_item("+")\n";
 return code;
}

Blockly.Python["can_sell_item"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "";
var code = "hero_controller.UsingItem.can_sell_item("+")\n";
 return code;
}

Blockly.Python["can_use"] = function(block) {

var code = "hero_controller.UsingItem.can_use("+")\n";
 return code;
}

Blockly.Python["get_damage"] = function(block) {

var code = "hero_controller.UsingItem.get_damage("+")\n";
 return code;
}

Blockly.Python["get_delay"] = function(block) {

var code = "hero_controller.UsingItem.get_delay("+")\n";
 return code;
}

Blockly.Python["get_own_item"] = function(block) {

var code = "hero_controller.UsingItem.get_own_item("+")\n";
 return code;
}

Blockly.Python["get_prize_when_buy"] = function(block) {

var code = "hero_controller.UsingItem.get_prize_when_buy("+")\n";
 return code;
}

Blockly.Python["get_prize_when_sell"] = function(block) {

var code = "hero_controller.UsingItem.get_prize_when_sell("+")\n";
 return code;
}

Blockly.Python["get_stack_in_hero"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"hero") || "";
var code = "hero_controller.UsingItem.get_stack_in_hero("+")\n";
 return code;
}

Blockly.Python["get_use_mana"] = function(block) {

var code = "hero_controller.UsingItem.get_use_mana("+")\n";
 return code;
}

Blockly.Python["sell_item"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "";
var code = "hero_controller.UsingItem.sell_item("+")\n";
 return code;
}

Blockly.Python["var"] = function(block) {

var arg0 = Blockly.Python.valueToCode(block,"int_name") || "";
var arg1 = Blockly.Python.valueToCode(block,"int_val") || "0";
var code = arg0 + " = " + arg1 + "\n";
 return code;
}
