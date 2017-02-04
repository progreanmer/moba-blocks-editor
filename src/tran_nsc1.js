Blockly.Python["aliance_message"] = function(block) {

var arg0 = Blockly.Python.valueToCode(block,"msg") || "";
var code = "self.controller.aliance_message("+ arg0 + ")\n";
 return code;
}

Blockly.Python["attack"] = function(block) {

var arg0 = Blockly.Python.valueToCode(block,"Enemy") || "";
var arg1 = Blockly.Python.valueToCode(block,"msg") || "";
var code = "self.controller.attack(" + arg0 + ","+ arg1 + ")\n";
 return code;
}


Blockly.Python["buy_item"] = function(block) {

var ITEMTRAN = {
  'ITEM1':'ArmorBoot',
  'ITEM2':'AssasinGrove',
  'ITEM3':'BladeBoot',
  'ITEM4':'Boot',
  'ITEM5':'Emeral',
  'ITEM6':'Grove',
  'ITEM7':'Knife',
  'ITEM8':'ManaPotion',
  'ITEM9':'Potion',
  'ITEM10':'Ruby',
  'ITEM11':'Sapphire',
  'ITEM12':'Shild',
  'ITEM13':'SoulBox',
  'ITEM14':'Sword'
};
  var itemtran = ITEMTRAN[block.getFieldValue('item')];
  var arg0 = Blockly.Python.valueToCode(block,"msg") || "";
  if(arg0 == ""){
    var code = "self.controller.buy_item(" + itemtran + ")\n";
  }
  else{
    var code = "self.controller.buy_item(" + itemtran + ","+ arg0 + ")\n";
  }
 return code;
}

Blockly.Python["get_current_hp"] = function(block) {
  var code = "self.controller.get_current_hp()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_current_mp"] = function(block) {
  var code = "self.controller.get_current_mp()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_hp_percent"] = function(block) {
  var code = "self.controller.get_hp_percent()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_item_in_hero"] = function(block) {
  var code = "self.controller.get_item_in_hero()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_max_mp"] = function(block) {
  var code = "self.controller.get_max_mp()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_mp_percent"] = function(block) {
  var code = "self.controller.get_mp_percent())";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_near_enemy"] = function(block) {
  var code = "self.controller.get_near_enemy())";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_position"] = function(block) {
  var code = "self.controller.get_position())";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["move"] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block,"pos_x") || "0";
  var arg1 = Blockly.Python.valueToCode(block,"pos_y") || "0";
  var arg2 = Blockly.Python.valueToCode(block,"msg") || "''";
  var code = "self.controller.get_position(" + arg0 + "," + arg1 + "," + arg2 + ")\n";
 return code;
}

Blockly.Python["update_message"] = function(block) {
  var code = "self.controller.update_message()\n";
 return code;
}

Blockly.Python["update_status"] = function(block) {
  var code = "self.controller.update_status()\n";
 return code;
}

Blockly.Python["upgrade_skill"] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block,"skill_num") || "0";
  var arg1 = Blockly.Python.valueToCode(block,"msg") || "''";
  if (arg1 == "''"){
    var code = "self.controller.ungrade_skill(" + arg0 + ")\n";
  }
  else{
    var code = "self.controller.upgrade_skill(" + arg0 + "," + arg1 + ")\n";
  }
 return code;
}

Blockly.Python["use_item"] = function(block) {
  var arg0 = block.getFieldValue('item') || "''";
  var arg1 = Blockly.Python.valueToCode(block,"msg") || "''";
  var code = "self.controller.use_item(" + arg0 + "," + arg1 + ")\n";
 return code;
}

Blockly.Python["use_skill"] = function(block) {
  var arg0 = (Blockly.Python.valueToCode(block,"skill_num") || "0");
  var arg1 = Blockly.Python.valueToCode(block,"target") || "''";
  var arg2 = Blockly.Python.valueToCode(block,"msg") || "''";
  var code = "self.controller.use_skill(" + arg0 + "," + arg1 + "," + arg2 + ")\n";
 return code;
}

Blockly.Python["get_rev_message"] = function(block) {
  var code = "self.controller.get_rev_message()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_connection"] = function(block) {
  var code = "self.controller.get_connection()";
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["get_gold"] = function(block) {
  var code = "self.controller.get_gold()";
 return [code, Blockly.Python.ORDER_NONE];
}

//addon translate
Blockly.Python["variable_init"] = function(block) {

var arg0 = block.getFieldValue("var_init_name");
var arg1 = Blockly.Python.valueToCode(block,"var_val") || "0";
var code = arg0 + " = " + arg1 + "\n";
 return code;
}

Blockly.Python["func"] = function(block) {

var arg0 = block.getFieldValue("func_name");
var arg1 = Blockly.Python.statementToCode(block,"internal_func") || Blockly.Python.PASS;
var code = "def " + arg0 + " (self):\n" + arg1;
 return code;
}

Blockly.Python["var_out"] = function(block) {
  var arg0 = block.getFieldValue("vo_name");
  var code = arg0;
 return [code, Blockly.Python.ORDER_NONE];
}
Blockly.Python["var_in"] = function(block) {
  var arg0 = block.getFieldValue("vi_name");
  var arg1 = Blockly.Python.valueToCode(block,"vi_ch") || "None";
  var code = arg0 + " = " + arg1;
 return code;
}

Blockly.Python["for_in"] = function(block){
  var arg0 = block.getFieldValue("for_in_1");
  var arg1 = Blockly.Python.valueToCode(block,"for_in_2") || "NONE";
  var code = "for " + arg0 + "in " + arg1;
 return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python["bc_in"] = function(block){
  var arg0 = Blockly.Python.valueToCode(block,"bc_in") || "NONE";
  var code = "in" + " " +arg0;
 return [code, Blockly.Python.ORDER_RELATIONAL];
}

Blockly.Python["ck_item"] = function(block){
  var arg0 = block.getFieldValue("ck_item");
  var arg1 = Blockly.Python.valueToCode(block,"ck_in") || "NONE";
  var code = "'" + arg0 + "'" + " " + arg1;
 return [code, Blockly.Python.ORDER_RELATIONAL];
}

Blockly.Python["time_sleep"] = function(block){
  var arg0 = Blockly.Python.valueToCode(block,"sp_time") || "0";
  var code = "time.sleep(" + arg0 + ")\n";
 return code;
}

Blockly.Python["func_call"] = function(block){
  var arg0 = block.getFieldValue("fn_name");
  var code = "self." + arg0 + "()\n"
 return code;
}
