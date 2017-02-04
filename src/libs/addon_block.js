var int_var={
  "message0":"int %1 = %2.",
  "args0": [
    {"type":"input_value","name":"int_name","check":["String", "Array"]},
    {"type":"input_value","name":"int_val","check":"Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 430
};
Blockly.Blocks["int_var"] = {
  init: function() {
    this.jsonInit(int_var);
    var thisBlock = this;
    this.setTooltip(function() {
    return "integer variable."
    });
  }
};

var var_name = {
  "message0":"%1",
  "arg0": [
    {"type":"output_value"}
  ]
}
