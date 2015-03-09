var container = document.querySelector('#gallery-photos');
var msnry;

if (container !== null) {
  imagesLoaded(container, function () {
    msnry = new Masonry(container, {
      itemSelector: '.photo',
      stamp: '.lead-photo',
      gutter: '.gutter-sizer'
    });
  });
}
