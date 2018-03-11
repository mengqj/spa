var button=document.getElementById('btn');
function subNumber(){
  
  var oldVlaue=window.document.button.value;
  var newvalue=parseInt(oldVlaue)-1;
  window.document.button.value=newvalue;
}
setInterval(subNumber,1000);
