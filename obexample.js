
function obexample()
{
  var person={
    first:"vivek",
    last:"Havalad",
    age :23,
    gender:"male",
    loc:'shimoga',
    info :function(){
      return this.first+" "+this.last+" "+this.age+" "+this.gender+" "+this.loc+" ";
    }

  };
  var n= new obexample();
  document.getElementById("demo").innerHTML=n.info();
}
