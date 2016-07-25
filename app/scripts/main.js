// console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(document).ready(function() {
  $(document).on('click', '.add-wrap-mob', function () {
    if (Modernizr.mq('(max-width: 767px)')) {
    if(!$(this).hasClass('current')) {
      $('.add-text-mob').slideUp();
      $('.add-wrap-mob').removeClass('current');
      $('.arrow-down-img').removeClass('active-arrow-down-img');
      $(this).addClass('current').next('.add-text-mob').slideDown();
      $(this).find('.arrow-down-img').addClass('active-arrow-down-img');
  } else {
      $('.add-text-mob').slideUp();
      $('.add-wrap-mob').removeClass('current');
      $('.arrow-down-img').removeClass('active-arrow-down-img');
     }}
  });
  $(document).on('click', '.adv-title', function() {
    if(!$(this).hasClass('current')) {
      $('.adv-hide').slideUp();
      $('.adv-title').removeClass('current');
      $('.adv-marker').removeClass('active');
      $('.adv-arrow-down').removeClass('active-adv-arrow-down');
      $(this).addClass('current').next('.adv-hide').slideDown();
      $(this).find('.adv-marker').addClass('active');
      $(this).find('.adv-arrow-down').addClass('active-adv-arrow-down');
      $('.advantages-content').css('backgroundImage', 'url(' + $(this).data('imageUrl') + ')');
    } else {
      $('.adv-hide').slideUp();
      $('.adv-title').removeClass('current');
      $('.adv-marker').removeClass('active');
      $('.adv-arrow-down').removeClass('active-adv-arrow-down');
    }
    if ($('.adv-title.current').length == 0) {
      $('.advantages-content').css('backgroundImage', 'url(images/advantages-img.png)');
    }
   });
  $(document).on('click', '.add-wrap-tech', function () {
    if (Modernizr.mq('(max-width: 767px)')) {
      if(!$(this).hasClass('current')) {
        $('.add-wrap-text').slideUp();
        $('.add-wrap-tech').removeClass('current');
        $('.technologies-arrow-down-img').removeClass('technologies-arrow-down-active');
        $(this).addClass('current').next('.add-wrap-text').slideDown();
        $(this).find('.technologies-arrow-down-img').addClass('technologies-arrow-down-active');
      } else {
        $('.add-wrap-text').slideUp();
        $('.add-wrap-tech').removeClass('current');
        $('.technologies-arrow-down-img').removeClass('technologies-arrow-down-active');
      }}
  });
  $('#owl-purple').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    items: 2,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall:	[979,1],
    itemsTablet:	[768,1],
    itemsMobile: [479,1],
    navigation:	false,
    touchDrag: true
  });
  $('#owl-tech').owlCarousel({
     slideSpeed : 300,
     paginationSpeed : 400,
     itemsCustom: [[0,1], [768,2], [992,2]],
     navigation:	false,
     touchDrag: true
  });
  var owl = $('#owl-showcase');
  owl.owlCarousel({
    slideSpeed : 700,
    paginationSpeed : 800,
    items : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet : [600,1],
    navigation :	false,
    pagination : false,
    touchDrag : true
  });
  $('.showcase-panel-arrow-right').click(function(){
    owl.trigger('owl.next');
  });
  $(".showcase-panel-arrow-left").click(function(){
    owl.trigger('owl.prev');
  });

  $('#owl-showcase-mob').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1,
    itemsDesktopSmall : [900,1],
    itemsTablet : [600,1],
    itemsMobile :	[479,1],
    navigation :	false,
    pagination : false,
    touchDrag : true
  });
});






