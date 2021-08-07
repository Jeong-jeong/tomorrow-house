const slider = tns({
  container: '.product-carousel .slider-list',
  items: 1,
  mouseDrag: true,
  swipeAngle: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  controls: false,
  navPosition: 'bottom',
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  preventScrollOnTouch: true,
})
