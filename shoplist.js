
function MyList() {
   mylist=[];

  }
MyList.prototype.ItemName = function () {
  var pk=document.forms["shoppinglist"]["ItemName"].value;
  console.log(pk);
  this.ItemSize(pk);
};
MyList.prototype.ItemSize = function (name) {
//create a local variable else if global used overwrites old data in myist
  var list=[];
  list[0]=name;
  list[1]=document.forms["shoppinglist"]["ItemSize"].value;
mylist.push(list);
this.getItems();
};
MyList.prototype.getItems = function () {
  console.log(mylist.length);
  document.getElementById("result").innerHTML="[";
  for (var i = 0; i <mylist.length ; i++) {
  var j=0;
      document.getElementById("result").innerHTML+="\""+mylist[i][0]+"\""+":"+mylist[i][1]+",";

  }
  document.getElementById("result").innerHTML+="]";
};
MyList.prototype.Pop = function () {
  mylist.pop();
  this.getItems();
};
MyList.prototype.Shift = function () {
  mylist.shift();
  this.getItems();
};
MyList.prototype.Unshift = function () {
var list=[];
  list[0]=document.forms["shoppinglist"]["ItemName"].value;
  list[1]=document.forms["shoppinglist"]["ItemSize"].value;
  mylist.unshift(list);this.getItems();
};

function ios()
{
var itemlist=new MyList();
document.getElementsByName("ItemSizebt")[0].addEventListener("click",function(){itemlist.ItemName();});
document.getElementsByName("pop")[0].addEventListener("click",function(){itemlist.Pop();});
document.getElementsByName("Shift")[0].addEventListener("click",function(){itemlist.Shift();});
document.getElementsByName("Unshift")[0].addEventListener("click",function(){itemlist.Unshift();});
}
