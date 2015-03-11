var container = document.querySelector('#gallery-photos');
var msnry;
var scrollToTop = document.querySelector('#top-button');
var scrollToTopShowing = false;

if (container !== null) {
  imagesLoaded(container, function () {
    msnry = new Masonry(container, {
      itemSelector: '.photo',
      stamp: '.lead-photo',
      gutter: '.gutter-sizer'
    });
  });
}

window.addEventListener('scroll', function () {
  var name;

  if (!scrollToTopShowing && window.scrollY > 500) {
    scrollToTop.className += ' visible';
    scrollToTopShowing = true;
  } else if (scrollToTopShowing && window.scrollY < 500) {
    name = scrollToTop.className;
    scrollToTop.className = name.substr(0, name.length - 8);
    scrollToTopShowing = false;
  }
});
