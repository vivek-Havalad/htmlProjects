function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
  if(value!=""){
    console.log(value);
    var node = new Node(value),
        currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;

    this._length++;

    return node;
  }
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};
SinglyList.prototype.display = function () {
  if(this._length==0)
  {
  var  message = {failure: 'Failure: non-existent node in this list.'};
    throw new Error(message.failure);
  }
else {
  document.getElementById("fileContent").innerHTML="";
  var currentNode=this.head;
  while (currentNode) {
  document.getElementById("fileContent").innerHTML+=currentNode.data+"<br>";
  currentNode=currentNode.next;
}
}
};
function openFile()
{ list=new SinglyList();
  document.getElementById('file').onchange=function()
  {
    var file=this.files[0];

     var reader=new FileReader();
     reader.onload = function(progressEvent){
       var lines=this.result.split('\n');
       console.log(lines);
       for(var i = 0; i < lines.length; i++){
         var check=lines[i];
          list.add(check);
        }
      }
      reader.readAsText(file);
    }
 document.getElementsByName("add")[0].addEventListener("click",function () {
   var inData=document.getElementsByName("value")[0].value;
   document.getElementById("result").innerHTM="";
   var object=list.add(inData);
   var output = '';
for (var property in object) {
  output += property + ': ' + object[property]+'; ';
}
   document.getElementById("result").innerHTML=output;
list.display();
 });
 document.getElementsByName("remove")[0].addEventListener("click",function () {
   var inData=document.getElementsByName("pos")[0].value;
   var object=list.remove(inData);var output = '';
   for (var property in object) {
     output += property + ': ' + object[property]+'; ';
   }
   document.getElementById("result").innerHTML=output;
list.display();
 });
 document.getElementsByName("search")[0].addEventListener("click",function () {
   var inData=document.getElementsByName("pos")[0].value;
    var object=list.searchNodeAt(inData);var output = '';
    for (var property in object) {
      output += property + ': ' + object[property]+'; ';
    }
   document.getElementById("result").innerHTML=output;
list.display();
 });
 document.getElementsByName("display")[0].addEventListener("click",function () {
   list.display();});


}
