$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
  $('button').on('click', function(){
    $('ul').children().css('color','blue');
  });
});