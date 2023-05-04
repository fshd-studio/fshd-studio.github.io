document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll(".img.lazy");
    var lazyloadThrottleTimeout;
  
    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }
  
      lazyloadThrottleTimeout = setTimeout(function() {
        lazyloadImages.forEach(function(img) {
          if (isInViewPort(img)) {
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }
  
    function isInViewPort(element) {
      const viewWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const {
        top,
        right,
        bottom,
        left,
      } = element.getBoundingClientRect	();
          // 这个是判断元素完整的在视口内
          /*     return (
        top >= 0 &&
        left >= 0 &&
        right <= viewWidth &&
        bottom <= viewHeight
      ); */
      // 这个是判断元素刚进入视口
          return (
        top >= 0 &&
        top <= viewHeight &&
        left >= 0
       );
    }
  
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });