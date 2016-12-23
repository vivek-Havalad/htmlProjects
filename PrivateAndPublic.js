//create an object
var Vehicle=function(){
  //declare Public attributes
  Max_Speed=0;
    Type="";
    Displacement=0;
    //Drfine Public methods
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
//inherit the parent to child object
function inheritsFrom (child, parent) {
    child.prototype = Object.create(parent.prototype);
    //can be used for clone
}
   //another object
    function Bike(){
      var speeds=Max_Speed;
      //public method to access private method
     this.a=function () {
      return getSpeed();
     }
//private method
  var getSpeed = function() {
    return speeds;
  }
}

function nowL()
{
  //Bike.prototype=new Vehicle();inhertance can be done by this way also
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
