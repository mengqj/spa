var btn=document.getElementsByClassName('btn');
//document.agree.agreeb.disabled=true;
var sec=10;
btn.disabled=disabled;
for(var i=1;i<sec;i++)
{
  window.setTimeout("update("+i+")",i*1000);
  
}
function update(num)
{
  //console.log(num);
  if(num==sec)
  {
    btn.value='同意';
    btn.disabled=false;
  }
  else{
    var printnr=sec-num;
    btn.value='同意('+printnr+'s)';
  }
}
