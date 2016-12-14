function openFile()
{//trigger the event on change of file object
  document.getElementById('file').onchange=function()
  {
    var file=this.files[0];

     var reader=new FileReader();
     //to trigger progressEvent use onload
     reader.onload = function(progressEvent){
       console.log("hi");var count=0;
       var lines=this.result.split('\n');
       for(var i = 0; i < lines.length; i++){
         var check=lines[i];
         var c=check.charAt(0);

         if(c == 'l')
         {
           console.log(c);
           count = count+1;
         }
       }
localStorage.setItem("v",count);
     };
     reader.readAsText(file);
     localStorage.getItem("v");
document.getElementById("result").innerHTML+=localStorage.v;
  };


}
function clea()
{
  location.reload();
}
