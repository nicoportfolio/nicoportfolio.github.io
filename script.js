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

  $(document).mousemove(function(event) {

  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

  $('.txt-mask').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage
  + '%, #34e89e, #0f443a)');
  $('.txt-mask').css('background-clip', 'text');
  $('.txt-mask').css('-webkit-background-clip', 'text');
  $('.txt-mask').css('-moz-background-clip', 'text');
  $('.txt-mask').css('-o-background-clip', 'text');
});

  $(document).scrollTop(0);
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
      $('html, body').animate({scrollTop: scrollPos+300},500);
    }
    else{
      $('html, body').animate({scrollTop: height},500);
      setTimeout(toggleProjects,550);
    }
    isExpanded=!isExpanded;
  }

function toggleProjects() {
    $('.pr-thumb:not("#pr-main1, #pr-main2, #pr-main3")').toggleClass('show-more');
    $('.pr-more').toggleClass('order-end');
    $('.more, .less').toggleClass('d-none d-inline-block');
    $('.pr-more').toggleClass('col-md-12');
  }
}
