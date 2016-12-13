/*Author :vivek H
Content:implemention of Binary Tree*/
function BinaryTree() {


function BTree()
{
  this.root=null;
}
function Node(data)
{
  this.data=data;
  this.right=null;
  this.left=null;
}
BTree.prototype= {

  insert: function(value) {

    var node=new Node(value);
    if (this.root == null)
    {
      this.root=node;
      console.log("root node Inserted----> "+node.data);
    }
    else{
      var current=this.root;
        while(current){
          if(value < current.data){
            if(current.left== null)
          {
            current.left=node;
            console.log("node Inserted----> "+node.data);
            break;
          }else{
            current=current.left;
          }

      }else if (value==current.data) {
        console.log("data repeated");break;
      }
      else{
         if(value > current.data){

          if(current.right == null)
          {
            current.right=node;
            console.log("node Inserted----> "+node.data);
            break;
          }else{
            current=current.right;
          }

        }

    }
  }
  }
},
minValueInTree:function (node) {
  if (node==null) {
    return 0;

    }
    else if (node.left) {
        return minValueInTree(node.left);

    }
    return node.data;

},
deleteValueInTree: function(node, value) {
    if (node === null) {
        return node;
    } else if (value > node.data) {
        node.right = this.deleteValueInTree(node.right, value);
    } else if (value < node.data) {
        node.left = this.deleteValueInTree(node.left, value);
    } else {
        if (node.left == null && node.right == null) {
            node = null;
        } else if (node.left == null) {
            var temp = node;
            node = node.right;
            temp = null;
        } else if (node.right == null) {
            var temp = node;
            node = node.left;
            temp = null;
        } else {
            var temp = this.minValueInTree(node.right);
            node.data = temp;
            node.right = this.deleteValueInTree(node.right, temp);
        }
    }
    return node;
},
maxValueInTree:function(node){
  if(node==null)
  {
    return 0;

  }
  else if(node.right)
  {
    return maxValueInTree(node.right);
  }
  return node.data;
},
InOrder:function(node){
  if(node)
  {
     this.InOrder(node.left);
    console.log("node InOreder----->"+node.data);
     this.InOrder(node.right);

  }
},
PostOrder:function(node)
{
  if(node)
  {
     this.PostOrder(node.left);
    this.PostOrder(node.right);
    console.log("PostOrder--->"+node.data);
  }
},
PreOrder:function(node)
{
  if(node)
  {
    console.log("PreOrder--->"+node.data);
     this.PreOrder(node.left);
    this.PreOrder(node.right);

  }
},
SearchValueInTree:function(node,data)
{
  var left=0,right=0;
  if(!node)
  {
    console.log("invalid node address");
  }
else if (node.data>data) {
  this.left++;
  return SearchValueInTree(node.left,data);

}
else if (node.data<data) {
  this.right++;
  return SearchValueInTree(node.right,data);

}
else if (node.data==data) {
  console.log("the value is present at right: "+this.right+" left:"+this.left+" data is :"+node.data)
}
},
};
var roots=new BTree();

document.getElementById("clicks").addEventListener("click", function() {
  var n=document.getElementsByName("NodeVal")[0].value;
roots.insert(n);});
// roots.insert(15);
// roots.insert(31);
// roots.insert(25);
// roots.insert(30);
// roots.insert(18);
// roots.insert(12);
document.getElementsByName("PostOrder")[0].addEventListener("click", function() {roots.PostOrder(roots.root);});
document.getElementsByName("PreOrder")[0].addEventListener("click", function() {roots.PreOrder(roots.root);});
document.getElementsByName("InOrder")[0].addEventListener("click", function() {roots.InOrder(roots.root);});
document.getElementsByName("delet")[0].addEventListener("click", function() {
  var n=document.getElementsByName("NodeVal")[0].value;
var dele1=roots.deleteValueInTree(roots.root,n);
console.log("after deleted")
roots.InOrder(roots.root);});
}
