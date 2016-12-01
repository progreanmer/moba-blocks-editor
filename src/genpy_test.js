Blockly.Python['math_change_test'] = function(block) {
  // Add to a variable in place.
  Blockly.Python.definitions_['from_numbers_import_Number'] =
      'from numbers import Number';
  var argument0 = Blockly.Python.valueToCode(block, 'DELTA',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = (' + varName + ' if isinstance(' + varName +
      ', Number) else 0) + ' + argument0 + '\n';
};
