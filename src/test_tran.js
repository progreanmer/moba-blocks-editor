Blockly.Python['block3'] = function(block) {

  var arg1 = Blockly.Python.valueToCode(block, 'pos_x') || '0';
  var arg2 = Blockly.Python.valueToCode(block, 'pos_y') || '0';
  var arg3 = Blockly.Python.valueToCode(block, 'ms') || 'NULL';
  var code = "self.Herocontroller.move" + "(" + arg1 + "," + arg2 + "," + arg3 + ")\n";
    return code;
};
