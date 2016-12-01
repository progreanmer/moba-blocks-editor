var mathChangeJson = {
  "message0": "Move to posX = %1 posY = %2 message = %3 .",
  "args0": [
    {"type": "input_value", "name": "posX","check": "Number"},
    {"type": "input_value", "name": "posY", "check": "Number"},
    {"type": "input_value", "name": "ms", "check": ["String", "Array"]}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330
};

Blockly.Blocks['test'] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Move Hero to target'
    });
  }
};
