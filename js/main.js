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

const modalStep1Btns = document.querySelectorAll('.step__content-btn');
if (modalStep1Btns.length > 0) {
  for (let index = 0; index < modalStep1Btns.length; index++) {
    const modalStep1Btn = modalStep1Btns[index];
    modalStep1Btn.addEventListener('click', function () {
      document.querySelectorAll('.step__content-btn').forEach(function(activeBtn) {
        activeBtn.classList.remove('step__content-btn_active');
      });
      modalStep1Btn.classList.add('step__content-btn_active');
      document.querySelector('.popup-help__step1').classList.remove('popup-help__step_active');
      document.querySelector('.popup-help__step2').classList.add('popup-help__step_active');
    });
  };
};

const modalStep2Btns = document.querySelectorAll('.budget-item');
if (modalStep1Btns.length > 0) {
  for (let index = 0; index < modalStep2Btns.length; index++) {
    const modalStep2Btn = modalStep2Btns[index];
    modalStep2Btn.addEventListener('click', function () {
      document.querySelector('.popup-help__step2').classList.remove('popup-help__step_active');
      document.querySelector('.popup-help__step3').classList.add('popup-help__step_active');
    });
  };
};

document.querySelector('.callback__btn-popup').addEventListener('click', function () {
    document.querySelector('.popup-help__step3').classList.remove('popup-help__step_active');
    document.querySelector('.popup-help__step4').classList.add('popup-help__step_active');
    setTimeout(() => {
      closeModal();
      document.querySelector('.popup-help__step4').classList.remove('popup-help__step_active');
      document.querySelector('.popup-help__step1').classList.add('popup-help__step_active');
    }, 5000);
})




