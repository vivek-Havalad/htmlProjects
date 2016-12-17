var Vehicle=function(){
  Max_Speed=0;
    Type="";
    Displacement=0;
  this.SetSpeed=function (speed) {
    Max_Speed=speed;
    }
    this.SetType=function (type) {
      Type=type;
    }
    this.SetDisplacement=function(disp){
      Displacement=disp;
    }

}
function inheritsFrom (child, parent) {
    child.prototype = Object.create(parent.prototype);
}

    function Bike(){
      var speeds=Max_Speed;
     this.a=function () {
      return getSpeed();
     }

  var getSpeed = function() {
    return speeds;
  }
}

function nowL()
{
  //Bike.prototype=new Vehicle();
  inheritsFrom(Bike,Vehicle);
Bike.prototype.constructor = Bike;
var ints=document.getElementsByName("Speed")[0].value;
var avt=new Vehicle();
avt.SetSpeed(ints);
var inty=document.getElementsByName("Type")[0].value;
avt.SetType(inty);
var intd=document.getElementsByName("Displacement")[0].value;
avt.SetDisplacement(intd);
var bi=new Bike();
document.getElementsByName("Bike")[0].value=bi.a();

}
