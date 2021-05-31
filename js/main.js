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
          animItem.classList.remove('_active');
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
};

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

const closeSec = document.querySelectorAll('.newcomer__close')
if (closeSec.length > 0) {
  window.addEventListener('click', function () {
    document.querySelector('.catalog-ofert__section').classList.toggle('done');
    document.querySelector('.newcomer__section').classList.toggle('done');
  });
}



const modal = document.querySelector('#popup-help');
const modalBtn = document.querySelector('#help-popup__btn');
const modalBtn2 = document.querySelector('#popup-help__btn');
const closeBtn = document.querySelector('.popup-help__close');

modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
  modal.style.display = 'none';
  }
}



