$(function(){
  

  $('.box form').submit(function(e){
    e.preventDefault();
    var width=$('#width').val();
    var height=$('#height').val();
    $('#perimeter').val(width*2+height*2);
    $('#area').val(width*height);

    if($('#perimeter').val().length>5)
  {
    $('#perimeter').val($('#perimeter').val().slice(0,8));
  }
    else if($('#area').val().length>5)
  {
    $('#area').val($('#area').val().slice(0,8));
  }
  })
})
