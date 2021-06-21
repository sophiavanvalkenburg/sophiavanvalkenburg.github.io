// init Masonry
var grid = document.querySelector('.masonry-grid');

var msnry = new Masonry( grid, {
  itemSelector: '.masonry-grid-item',
  columnWidth: '.masonry-grid-sizer',
  percentPosition: true,
  transitionDuration: 0
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
  history.replaceState(null, null, ' ');  // remove hash for easier sharing
});