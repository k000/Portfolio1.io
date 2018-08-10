$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var postion = target.offset().top;
    $('body,html').animate({
      scrollTop:postion
    },speed,'swing');
    return false;
  });




});
