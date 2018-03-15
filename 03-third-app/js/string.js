$(function(){
  var $width=$('#width');
  var $height=$('#height');
  var btn=$('#btn');
  var a=false;
  $width.keypress(function(e){
    checKey(e);
  })
  $height.keypress(function(e){
    checKey(e);
  })
  function checKey(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()_+=\[\]{}|:;"'<>,/?\\]/.test(e.key))
{e.preventDefault();}
  }
  $width.focusout(function(){
    a=checkData('#width');
  })
  $height.focusout(function(){
    a=checkData('#height');
  })
function checkData(e)
{
  var data=$(e);
  var msg=$(e+"text");
  var error=$(e).attr('name');

  if(data.val()<0)
  {
    msg.css('display','block');
    msg.html(error+'必须大于零');
    data.select();
    return false;
  }
  else if(data.val()==="")
  {
    msg.css('display','block');
    msg.html(error+'不能为空');
    data.select();
    return false;

  }

  else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())){
    msg.css('display','block');
    msg.html(error+'必须是数值');
    data.select();
  return false;
  }
  msg.html(""); 
  return true;
}


btn.click(function(){
   if(!a) return ; 
   var m=$('#width').val();
  var n=$('#height').val();
  $('#perimeter').val(perimeter(m,n));
  $('#area').val(area(m,n));
})

function perimeter(x,y){
  var temp=x*2+y*2;
  temp=temp+'';
  return temp;

}


function area(p,q){
  var z=p*q;
  z=z+'';
  return z;
};
})
