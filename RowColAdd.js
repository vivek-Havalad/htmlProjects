function Inrow()
  {
    var table=document.getElementById("genTable");
    var len=document.getElementById("genTable").rows.length;
    var collen=document.getElementById("genTable").rows[0].cells.length;
    var row1=table.insertRow(len);
    for (var i = 0; i < collen; i++) {
      var coll1=row1.insertCell(i);
      coll1.innerHTML="new col"+i;
      }
    }
    function Incol()
    {
      var len=document.getElementById("genTable");
      var collen=document.getElementById("genTable").rows[0].cells.length;
      for (var i = 0; i < len.rows.length; i++) {
       var coll2=len.rows[i].insertCell(collen);
coll2.innerHTML="new Col"+i;
        }
    }
