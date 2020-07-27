var isExpanded = false;
var delayTime;

let height = window.innerHeight;

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});

function init(){

    $(document).scrollTop(0);

$("#p5bg").mousedown(function() {
    $(".main-title").addClass("opacity0");
}).mouseup(function() {
    $(".main-title").removeClass("opacity0");
});

var p5canvas = document.getElementById("p5bg");
p5canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    $(".main-title").addClass("opacity0");
}, false);
p5canvas.addEventListener('touchend', function(e) {
    e.preventDefault();
    $(".main-title").removeClass("opacity0");
}, false);

//   $(document).mousemove(function(event) {
//
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();
//
//   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
//
//   $('.txt-mask').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage
//   + '%, #eee, #2c3e50)');
//   $('.txt-mask').css('background-clip', 'text');
//   $('.txt-mask').css('-webkit-background-clip', 'text');
//   $('.txt-mask').css('-moz-background-clip', 'text');
//   $('.txt-mask').css('-o-background-clip', 'text');
// });
  $('.pr-more').click(showMore);
}

function showMore(){
  let scrollPos = $(window).scrollTop();
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    if(!isExpanded) {
      toggleProjects();
      $('html, body').animate({scrollTop: scrollPos+300},500);
    }
    else{
      $('html, body').animate({scrollTop: height},500);
      setTimeout(toggleProjects,500)
    }
    isExpanded=!isExpanded;
  }
  else {
    if(!isExpanded) {
      toggleProjects();
      $('html, body').animate({scrollTop: scrollPos+100},500);
    }
    else{
      $('html, body').animate({scrollTop: height},500);
      setTimeout(toggleProjects,550);
    }
    isExpanded=!isExpanded;
  }

function toggleProjects() {
    $('.pr-thumb:not("#pr-main1, #pr-main2, #pr-main3, #pr-main4, #pr-main5")').toggleClass('show-more');
    $('.pr-more').toggleClass('order-end');
    $('.more, .less').toggleClass('d-none d-inline-block');
    $('.pr-more').toggleClass('col-md-12');
  }
}

function startp5(){
  let p5cover = new p5();
}
