

function showCode() {

  var code = 'from sim_monitor.sim_client.api_game.hero_controller import HeroController\n'
  +'from sim_monitor.sim_client.api_game.my_hero import MyHero\n'
  +'import time\n\n\n'
  + 'class x(MyHero):\n' + '    def __init__(self):\n' + '        super().__init__()\n'
  + '        self.controller = HeroController()\n'
  + '        time.sleep(5)\n\n' +'    def run(self):\n'
  + '        ' + Blockly.Python.workspaceToCode(workspace);

  alert(code);
}

function exportCode() {

  var code = 'from sim_monitor.sim_client.api_game.hero_controller import HeroController\n'
  +'from sim_monitor.sim_client.api_game.my_hero import MyHero\n'
  +'import time\n\n\n'
  + 'class x(MyHero):\n' + '    def __init__(self):\n' + '        super().__init__()\n'
  + '        self.controller = HeroController()\n'
  + '        time.sleep(5)\n\n' +'    def run(self):\n'
  + '        ' + Blockly.Python.workspaceToCode(workspace);

  Blockly.Python.INFINITE_LOOP_TRAP = null;

  var gen_file = document.createElement('a');
  var file_name = document.getElementById('fname').value


   gen_file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
   gen_file.setAttribute('download',file_name);

  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      gen_file.dispatchEvent(event);
  }
  else {
      gen_file.click();
  }
}

function saveBlock() {
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToPrettyText(xml)

  Blockly.Python.INFINITE_LOOP_TRAP = null;

  var gen_file = document.createElement('a');
  var file_name = document.getElementById('fname').value


   gen_file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml_text));
   gen_file.setAttribute('download',file_name);

  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      gen_file.dispatchEvent(event);
  }
  else {
      gen_file.click();
  }
}

function openBlock(raw_file) {
  var xml = Blockly.Xml.textToDom(raw_file);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    openBlock(contents);
  };
  reader.readAsText(file);
}
document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
