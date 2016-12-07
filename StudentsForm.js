/*Extract the student info using location.search*/
function inform()
{//get query string
  var param=window.location.search;
//remove ?
  var query1=param.substr(param.indexOf("?")+1);
//split the parameters in query string
  var query=query1.split("&");
  //process parameters one by one
  for(var i=0; i< query.length ;i++)
  {
    var combi=query[i].split("=");
//create a p tag
var node=document.createElement("p");
//define some text using text node
var para=document.createTextNode(combi[0]+": "+combi[1]);
//append th text to the tag
node.appendChild(para);
//get the container location by id
var ele=document.getElementById("disp");
//put the tag inside the container
ele.appendChild(node);
}
}
