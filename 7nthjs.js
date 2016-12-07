/* to calculate two given input function using currying function
currying function: currying function allows us to use patial application
of functions arguments means we can pass all the arguments together
or we can pass subset of arrgument to the function*/
function  Calcutor()
{
  var add=function(a)
  {
    return function(b)
    {
      return a+b;
    };
  };
  var sub=function(a)
  {
    return function(){
      return a-b;
    };
  };
  var mul=function(a)
  {
    return function(b){
      return a*b;
    };
  };
  var div=function(a){
    return function(b){
      return a/b;
    };
  };
  var a=document.forms["cal"]["fir"].value;
  var b=document.forms["cal"]["sec"].value;
a=parseFloat(a);
 b=parseFloat(b);
  var choice= document.forms["cal"]["option"].value;
  var result=0.0;
  switch (choice) {
    case "add":result=add(a)(b);
      break;
case "subt":result=sub(a)(b);

  break;
  case "mul":result=mul(a)(b);

    break;
    case "div":if (b == 0) {
      document.getElementById("result").value="infinity";
      return;
    }
    else {
      result=div(a)(b);
    }

      break;
    default:result="no choice";

  }
  document.getElementById("result").value=result;
}
