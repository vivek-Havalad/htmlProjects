/*Author: vivek H
Content:Hash Table concept used bucketing*/
function HashEntry(key,value)
{
  this.key=key;
  this.value=value;
  this.nextHash=undefined;
};
HashEntry.prototype= {
  getNext : function()
  {
    return this.nextHash;

  },
  setNext :function(entry)
  {
    this.nextHash=entry;
  },
  getValue : function()
  {
    return this.value;

  },
  getKey : function () {
    return this.key;

  }

};
function HashTable()
{
  this.tableSize=100;
  this.table=[];
};

HashTable.prototype =  {
  check : function (input) {
  console.log(input);
    return input%this.tableSize;
  },
  put : function (key,value){
    var hash=this.check(key);
    if(this.table[hash] === undefined)
    {
      this.table[hash]=new HashEntry(key,value);

  }else {
    var temp=this.table[hash];
    while(temp.getNext()!= undefined)
    {
      temp=temp.getNext();
    }
    temp.setNext(new HashEntry(key,value));
  }
},
get : function(key){
   var hash=this.check(key);
   var ele=this.table[hash];
   if (ele==undefined) { return null;

   }else if (ele == this.table[hash]) {
     return ele.getValue();

   } else{
     var temp=ele.getNext();
     while(temp.getKey() != key || temp.getNext() == undefined){
       temp=temp.getNext();
     }
     if(temp.getNext() != undefined)
     {
       return temp.getValue();
     }
     else {
       return null;
     }
   }
}
};
var hashtable=new HashTable();
hashtable.put("hi",10);
hashtable.put(11,"bye");
hashtable.put(12,"hello is hi");
console.log(hashtable.get("hi"));
console.log(hashtable.get(11));
console.log(hashtable.get(12));
console.log(hashtable.get(14));
