//content: string conversion using regular Expression
function regExp() {
  var text=document.getElementById("inString").value;
  // var res1=text.replace(/:|\./g,",").replace(/'/,"[").replace(/'/,"]");
  var res1=text.split(/\W+/);
  var str="["+res1;
  // str=str.replace(/,/,"");
  // res=str.replace(/,$/,"");
  for (var i = 0; i < str.length; i++) {

  document.getElementById("result").innerHTML+=str[i];
}
document.getElementById("result").innerHTML+="]";
}
