//generation of random nos using Math.random()
function genrateRandomWhole(min,max){
  return Math.floor(Math.random()*(max - min + 1) )+min;
}
function WholeRandom() {
document.getElementsByName("buton")[0].addEventListener("click",function(){
  console.log("hi");
  var min=parseInt(document.getElementById("min").value);
  var max=parseInt(document.getElementById("max").value);
var n =genrateRandomWhole(min,max);
if (n%2==0) {
  document.getElementById("result").innerHTML=n;
}
else {
  document.getElementById("result").innerHTML=n-1;
}
});
}
