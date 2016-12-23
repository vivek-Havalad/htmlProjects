//suffix day th,rd and nd
function getSuffix(day)
{
  if(day%10==2)
  {
    return day+"nd";
  }
  else if (day%10==3) {
    return day+"rd";

  }
  else {
    return day+"th";
  }
}
//get month in full length
function getMonth(mon) {
  mon--;//array starts with zero
  var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
  return month[mon];

}
function DateManipulation(){
  var day1=parseInt(document.getElementsByName('Day1')[0].value);
  var month1=parseInt(document.getElementsByName('Month1')[0].value);
  var Year1=parseInt(document.getElementsByName('Year1')[0].value);
  var day2=parseInt(document.getElementsByName('Day2')[0].value);
  var month2=parseInt(document.getElementsByName('Month2')[0].value);
  var Year2=parseInt(document.getElementsByName('Year2')[0].value);
  if (month1==month2 && Year1==Year2) {
    document.getElementById("result").innerHTML='["'+getMonth(month1)+'"'+
    ',"'+getSuffix(day1)+'","'+getSuffix(day2)+'"]';
  }
  else if (Year1==Year2) {
    document.getElementById("result").innerHTML='["'+getMonth(month1)+'"'+
    ',"'+getSuffix(day1)+'","'+getMonth(month2)+'","'+getSuffix(day2)+'"]';
  }
  else {
    document.getElementById("result").innerHTML='["'+Year1+'","'+getMonth(month1)+'"'+
    ',"'+getSuffix(day1)+'","'+Year2+'","'+getMonth(month2)+'","'+getSuffix(day2)+'"]';
  }

}
