const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('._active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, Left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll()
  }, 5000);
}




$( function() {
  $( "#accordion" ).accordion({
    active: 'false',
    collapsible: 'true',
    heightStyle:  'content',
    icons: 'false',
  });
  });

  document.querySelector('#menuBtn').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__menu-items_visible');
    document.querySelector('.menu__close').classList.toggle('menu__close_active');
    document.querySelector('.menu__main-btn').classList.toggle('menu__main-btn_visible');
    });
  document.querySelector('.menu__close').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__menu-items_visible');
    document.querySelector('.menu__close').classList.toggle('menu__close_active');
    document.querySelector('.menu__main-btn').classList.toggle('menu__main-btn_visible');
  });
  document.querySelector('.submenu__link').addEventListener('click', function() {
    document.querySelector('.submenu').classList.toggle('submenu__block');
  });







