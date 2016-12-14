// json object manupaltion
function jsonob()
{
  var x='{	"1245": {	"artist": "Robert Palmer","tracks": []	},'+
 	'"2468": {"album": "1999","artist": "Prince","tracks": ["1999","Little Red Corvette"]},'+
	'"2548": {"album": "Slippery When Wet","artist": "Bon Jovi","tracks": ["Let It Rock","You Give Love a Bad Name"]},'+
	'"5439": {"album": "ABBA Gold"}'+
'}';
  jsonObj=JSON.parse(x);
}
jsonob.prototype.setval = function (id,prop,name) {
jsonObj[id][prop]=name;
  };

    jsonob.prototype.setTracks = function (id,val) {
    if(jsonObj[id].tracks)
    {
      jsonObj[id].tracks.push(val);
    }
    else{
      //create an new array within an json ob
      jsonObj[id]["tracks"]=new Array();
      jsonObj[id].tracks.push(val);
    }
      };
jsonob.prototype.del = function (id,prop) {
  delete jsonObj[id][prop];

};
jsonob.prototype.disp = function (id) {
    var node=document.createElement("p");
    var para=document.createTextNode("id"+": "+id);
    node.appendChild(para);
    var ele=document.getElementById("result");
ele.appendChild(node);
//check for the presence of the pretecular property
if (jsonObj[id].hasOwnProperty("album")) {
  var node=document.createElement("p");
  var para=document.createTextNode("album"+": "+jsonObj[id].album);
  node.appendChild(para);
  var ele=document.getElementById("result");
ele.appendChild(node);
}
if (jsonObj[id].hasOwnProperty("artist")) {
  var node=document.createElement("p");
  var para=document.createTextNode("artist"+": "+jsonObj[id].artist);
  node.appendChild(para);
  var ele=document.getElementById("result");
ele.appendChild(node);
}
if (jsonObj[id].hasOwnProperty("tracks")) {
  var i=0;
  var node=document.createElement("br");
  var ele=document.getElementById("result");
ele.appendChild(node);
var node=document.createElement("span");
var para=document.createTextNode("tracks"+": ");
node.appendChild(para);
var ele=document.getElementById("result");
ele.appendChild(node);
while (i<Object.keys(jsonObj[id].tracks).length) {
  var node=document.createElement("span");
  var para=document.createTextNode(jsonObj[id].tracks[i]+',');
  node.appendChild(para);
  var ele=document.getElementById("result");
  ele.appendChild(node);i++;


}
}
};
js=new jsonob();
function check()
{
  var id=document.forms["albumVal"]["id"].value;
  var opt=document.forms["albumVal"]["opt"].value;
  var val=document.forms["albumVal"]["val"].value;
  console.log(opt);
  if(opt=="tracks" && val!="")
{
  js.setTracks(id,val);
  js.disp(id);
}
else if(opt!="" && val==""){
  js.del(id,opt);
  js.disp(id);
}//if no id by default call 1st object in json
else if(id==""){
  js.disp(1245);
}
else if(opt!="" && val!="")
{
js.setval(id,opt,val);
js.disp(id);
}

}
