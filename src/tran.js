Blockly.Python["block0"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"Enemy") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "self.controller.attack("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block1"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"unit") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "self.controller.is_allies("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block2"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"unit") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "self.controller.is_enemy("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block3"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"pos_x") || "0";
var arg2 = Blockly.Python.valueToCode(block,"pos_y") || "0";
var arg3 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "self.controller.move("+arg1+","+arg2+","+arg3+")\n";
 return code;
}

Blockly.Python["block4"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"target") || "0";
var arg2 = Blockly.Python.valueToCode(block,"hero_skill=0") || "0";
var arg3 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "self.controller.use_skill("+arg1+","+arg2+","+arg3+")\n";
 return code;
}

Blockly.Python["block5"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"enemy") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.HeroStatus.get_enemy_hp("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block6"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.HeroStatus.get_hp("+arg2+")\n";
 return code;
}

Blockly.Python["block7"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"hero") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.HeroStatus.get_item_in_hero("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block8"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.HeroStatus.get_mp("+arg2+")\n";
 return code;
}

Blockly.Python["block9"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.buy_item("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block10"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.can_buy_item("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block11"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.can_sell_item("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block12"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.can_use("+arg2+")\n";
 return code;
}

Blockly.Python["block13"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_damage("+arg2+")\n";
 return code;
}

Blockly.Python["block14"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_delay("+arg2+")\n";
 return code;
}

Blockly.Python["block15"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_own_item("+arg2+")\n";
 return code;
}

Blockly.Python["block16"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_prize_when_buy("+arg2+")\n";
 return code;
}

Blockly.Python["block17"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_prize_when_sell("+arg2+")\n";
 return code;
}

Blockly.Python["block18"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"hero") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_stack_in_hero("+arg1+","+arg2+")\n";
 return code;
}

Blockly.Python["block19"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.get_use_mana("+arg2+")\n";
 return code;
}

Blockly.Python["block20"] = function(block) {

var arg1 = Blockly.Python.valueToCode(block,"item") || "0";
var arg2 = Blockly.Python.valueToCode(block, "ms") || "";
var code = "apaimanee.UsingItem.sell_item("+arg1+","+arg2+")\n";
 return code;
}

