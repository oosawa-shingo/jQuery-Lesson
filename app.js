// $(function(){
//   $('.box1').slideDown(1000);
//   $('.box1').show();
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px',
//     'width': '200px'
//   });
//   $('.box1').slideUp(1000);
// });

$(function (){
  $('.box1').slideDown(5000,function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(5000);
  });
});