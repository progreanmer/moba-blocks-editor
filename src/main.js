function gencode(){
  Blockly.Python.INDENT = "    ";
  var raw_code = Blockly.Python.workspaceToCode(workspace);
  var split = raw_code.split("\n");
  var tab = "    ";

  var code = 'from sim_monitor.sim_client.api_game.hero_controller import HeroController\n'
  +'from sim_monitor.sim_client.api_game.my_hero import MyHero\n'
  +'from sim_monitor.model.status import status\n'
  +'import time\n\n\n'
  + 'class x(MyHero):\n' + '    def __init__(self):\n' + '        super().__init__()\n'
  + '        self.controller = HeroController()\n'
  + '        time.sleep(5)\n\n';
  for (n in split){
    code = code + tab + split[n] + "\n";
  }
  return code;
}
//show py code from block
function showCode() {
  code = gencode()
  alert(code);
}

//export block to py code
function exportCode() {
  code = gencode()
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

//save block to xml
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

//rate and valuate
function rate(){
  var code = gencode();
  var sha1_code = new Hashes.SHA1().hex(code);
  var name = sha1_code + ".log";

  var rfr = new XMLHttpRequest();
  // rfr.open('GET', "../log/" + name , false);

  rfr.open('GET', "./log/4147efece79bceaad0433494c5f5e5a896681ef8.log" , false);
  rfr.send('');

  var txt = rfr.responseText;
  // console.log(txt);
  var i,j;
  var lst = txt.split("\n");
  var word={},time={};
  var atk=0, dead=0, kill=0, end_time=0, start_time=0, tot_time;
  var r_kill, r_survive, r_fight, r_push, r_cpm;
  // console.log(lst);

  for (i=0;i<lst.length;i++){
    var sen = lst[i];
    // console.log(sen);
    word = sen.split(":");
    for(j=0;j<word.length;j++){
      var sw = word[j];
      // console.log(sw);
      if(sw == "atk"){
        atk += 1;
      }
      else if(sw == "dead"){
        dead += 1;
      }
      else if(sw == "use_skill"){
        atk += 1;
      }
      else if(sw == "kill"){
        kill += 1;
      }
      else if(sw == " team1 win" || sw == " team2 win"){
        var hrs = parseInt(word[0]);
        var mins = parseInt(word[1]);
        var sec = parseInt(word[2]);
        end_time = ( hrs * 3600 ) + ( mins * 60) + sec;
      }
      else if(sw == " begin"){
        var hrs = parseInt(word[0]);
        var mins = parseInt(word[1]);
        var sec = parseInt(word[2]);
        start_time = ( hrs * 3600 ) + ( mins * 60) + sec;
      }
    }
  }
  if(end_time > start_time){
    tot_time = end_time - start_time;
  }
  else{
    tot_time = (86400 - start_time) + end_time;
  }
  r_kill = rate_kill(kill, tot_time);
  r_survive = rate_survive(dead, tot_time);
  r_fight = rate_fight(atk, tot_time);
  r_push = rate_push(tot_time);
  r_cpm = rate_performance(kill, dead);
  // console.log(log);
  rate_result = "-----Code Rating-----\nKill: " + r_kill + "\nSurvive: " + r_survive + "\nFight: " + r_fight + "\nPush: " + r_push + "\nPerformance: " + r_cpm;
  if(start_time == 0 && end_time == 0){
    alert("ERROR : cannot find log file");
  }
  else{
        alert(rate_result);
  }
}

//function for calculate point of kill
function rate_kill(kill,time){
  if((kill/time) >= (1/120)){  //assume perfect code can kill more than or equal 30 heroes in 1 hours
    return 10.00;
  }
  else{
    return ((kill/time) * 1200);
  }
}

//function for calculate point of survive
function rate_survive(dead,time){
  if((time/dead) <= (1/600)){ //assume Perfect code must dead lower than or equal 6 in 1 hours
    return 10.00;
  }
  else{
    return ((time/dead)/(600))*10;
  }
}

//function for calculate point of fight
function rate_fight(atk, time){
  if((atk/time) >= (1/20)){
    return 10.00;
  }
  else{
    return ((atk/time)*200);
  }
}

//function for calculate point of push
function rate_push(time){
  if(time <= 1200){  // time at most 20 miniutes
    return 10.00;
  }
  else if(time >1200){ //time more than 20 minutes
    return (10*(1200/time));
  }
}

function rate_performance(kill,dead){
  var ratio = kill/dead
  if(ratio >= 1){
    return "GOOD";
  }
  else{
    return "BAD";
  }
}

// read xml file for loading to category

var xhrObj = new XMLHttpRequest();

xhrObj.open('GET', "gen_category.xml", false);
xhrObj.send('');

x = xhrObj.responseText;
workspace.updateToolbox(x);
