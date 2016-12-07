function myfun()
{
  var num1=document.forms["cal"]["fir"].value;
  var num2=document.forms["cal"]["sec"].value;
  var choice= document.forms["cal"]["option"].value;
var num1=parseFloat(num1);
var num2=parseFloat(num2);
  var result=0.0;
  switch (choice) {
    case "add":result=num1+num2;
      break;
case "subt":result=num1-num2;

  break;
  case "mul":result=num1*num2;

    break;
    case "div":if (num2 == 0) {
      document.getElementById("result").value="infinity";
      return;
    }
    else {
      result=num1/num2;
    }

      break;
    default:result="no choice";

  }
  document.getElementById("result").value=result;
}
