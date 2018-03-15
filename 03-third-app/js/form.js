$(function(){
  var btn=$('#btn');

  btn.click(function(){
  if(!checkData(('#width'))||!checkData(('#height')))
    {
      return;}
  
   var a=$('#width').val();
   var  b=$('#height').val();
   
   $('#perimeter').val(perimeter(a,b));
   $('#area').val(area(a,b));
   
   /*if($('#perimeter').val().length>5)
  {
     $('#perimeter').val().slice(0,8);
  }
   else if($('#area').val().length>5)
  {
    $('#area').val().slice(0,8);
  }*/
    
  })
  function perimeter(x,y)
  {
    var c=x*2+y*2;
    var c=c+'' 
    if(c.length>5)
    {
      
      c.slice(0.8);
    }
    return c;
  }
  function area(m,n)
  {
    var d=m*n;
   var d=d+'';
    if(d.length)
    {
      d.slice(0,8);
    }
    return d;
    
  }
  function checkData(e)
{
  var data=$(e);
  var msg=$(e+'text');
  var error=$(e).attr('name');
  

   if(data.val()==='')
{
  msg.css('display','block');
  msg.html(error+'不能为空');

  data.select();
  return false;
}
else if(data.val()<0)
{
  msg.css('display','block');
  msg.html(error+'必须为正数');
  data.select();
  return false;

}
else if(!/^-?(0[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data.val())){
  msg.css('display','block');
  msg.html(error+'必须为数值');
  data.select();
  return false;
}
 msg.html('');
 return true;
}

})
