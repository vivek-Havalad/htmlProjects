// url processing
function identfy()
{
  var url=document.forms["url"]["full_url"].value;
  //path split
  var protocol=url.split(":")
  var para = document.createElement("p");
var node = document.createTextNode("Protocol is:"+protocol[0]);
para.appendChild(node);
var element = document.getElementById("result");
element.appendChild(para);
//sub protocal split
  var subprotocal=url.split("/")
  var para = document.createElement("p");
var node = document.createTextNode("subprotocal is:"+subprotocal[2]);
para.appendChild(node);
var element = document.getElementById("result");
element.appendChild(para);
//path split
  var loc=url.indexOf(subprotocal[3]);
  var path1=url.substr(loc);
  var path=path1.split("?")
  var para = document.createElement("p");
var node = document.createTextNode("path is:"+path[0]);
para.appendChild(node);
var element = document.getElementById("result");
element.appendChild(para);
//parameters split
  var parameters=path[1].split("&");
  for(var x in parameters)
  { var param=parameters[x].split("=")
    var para = document.createElement("p");
  var node = document.createTextNode("parameter is:"+param[0]);
  para.appendChild(node);
  var element = document.getElementById("result");
  element.appendChild(para);
    var para = document.createElement("p");
  var node = document.createTextNode("value is:"+param[1]);
  para.appendChild(node);
  var element = document.getElementById("result");
  element.appendChild(para);


  }


}
