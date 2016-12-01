
var code = 'from sim_monitor.sim_client.api_game.hero_controller import HeroController\n'
+'from sim_monitor.sim_client.api_game.my_hero import MyHero\n'
+'import time\n\n\n'
+ 'class x(MyHero):\n' + '    def __init__(self):\n' + '        super().__init__()\n'
+ '        self.controller = HeroController()\n'
+ '        time.sleep(5)\n\n' +'    def run(self):\n'
+ '        ' + Blockly.Python.workspaceToCode(workspace);

function showCode() {
  alert(code);
}

function exportCode() {

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
