var isExpanded = false;
var delayTime;
var mq = window.matchMedia( "(max-width: 768px)" );

let height = window.innerHeight;

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});
if (!mq.matches) {
  $(document).on('scroll', function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        $('#brandImg').addClass("reduce-logo");
        $('#navbarNav').addClass("reduce-txt");
        $('.navbar').addClass("reduce-bar");
      } else {
        $('#brandImg').removeClass("reduce-logo");
        $('#navbarNav').removeClass("reduce-txt");
        $('.navbar').removeClass("reduce-bar");
      }
  });
}

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

  $('.pr-more').click(showMore);
}

function showMore(){
  let scrollPos = $(window).scrollTop();

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
