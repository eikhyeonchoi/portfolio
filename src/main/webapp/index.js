/**
 * 
 */
$(document).ready(function() {
  new WOW().init();
  
  $('#fullpage').fullpage({
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    navigationPosition: "right",
    scrollOverflow: true,
    scrollHorizontally: false
  });
  
  var typed = new Typed('.greeting-text', {
    strings: ['Web Developer 최익현의 포트폴리오 입니다.'],
    typeSpeed: 120,
    showCursor: false,
  })
}); // ready

$('.menu').click(function(e) {
  var targetText = $(e.target).text();
  if (targetText.includes('Home')) {
    fullpage_api.moveTo(1);
  } else if (targetText.includes('About')) {
    fullpage_api.moveTo(2);
  } else if (targetText.includes('Projects')) {
    fullpage_api.moveTo(3);
  } 
}) // click


$('.skill').hover(function(e) {
  $(e.target).children().first().addClass('visible').removeClass('invisible');
  
  },function(e) {
    $(e.target).addClass('invisible').removeClass('visible');
});


