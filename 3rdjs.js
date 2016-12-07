function CompObj()
{
function person(name,lastName)
{
  this.name=name;
  this.last=lastName;
  var fullName=function()
  {
    return this.name+" "+this.last;
  }
}
var x=document.forms["obcomp"]["obj1"].value;
var y=document.forms["obcomp"]["obj2"].value;
if(x!=y)
{
  document.getElementById("result").innerHTML="Not equal contents";
}
else {
   x=x.split(" ");
   y=y.split(" ");
var  ob1=new person(x[0],x[1]);
  var ob2=new person(y[0],y[1]);
  // x=ob1.toString();
  // y=ob2.toString();
if(typeof ob1== typeof ob2)
{
  document.getElementById("result").innerHTML="both objects are same";
}
else{
  document.getElementById("result").innerHTML="objects are not same";
}
}

}
