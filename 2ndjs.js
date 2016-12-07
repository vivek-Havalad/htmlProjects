function DateTime()
{
  var JsonObj= [{
      "AuthorName":"amithabh","PublictionDate":"20-10-1997","Publiction":"sarswathi"
    },{
      "AuthorName":"Shamithabh","PublictionDate":"02-10-1920","Publiction":"Basava"
    },{
      "AuthorName":"cooler","PublictionDate":"10-10-1770","Publiction":"Mythli"
    },{
      "AuthorName":"John","PublictionDate":"30-10-1997","Publiction":"Style"
    },{
      "AuthorName":"HelbertSchildit","PublictionDate":"20-03-1997","Publiction":"Pearson"
    }];
  var dt=new Date();
  var sec=dt.getSeconds();
var i;
  document.getElementById("demo").innerHTML=dt;
  if(sec%5==0)
  {
 i=Math.floor(Math.random() * JsonObj.length);
 localStorage.setItem("x",i);
}
var x=localStorage.getItem("x")
      document.getElementById("author").innerHTML=JsonObj[x].AuthorName;
        document.getElementById("publishDate").innerHTML=JsonObj[x].PublictionDate;
      document.getElementById("publication").innerHTML=JsonObj[x].Publiction;


}
