var pg=document.getElementById('pg');

setInterval(function(){
  if(pg.value!=100)
{
  pg.value++;
}
else{
  pg.value=0;
}
})
