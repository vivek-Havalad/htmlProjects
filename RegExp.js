//content: string conversion using regular Expression
function regExp() {
  var text=document.getElementById("inString").value;
  var res1=text.replace(/:|\./g,",").replace(/'/,"[").replace(/'/,"]");
  document.getElementById("result").innerHTML=res1;
}
