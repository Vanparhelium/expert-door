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

document.querySelector('#menuBtn').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('header__menu-items_visible');
  document.querySelector('.menu__close').classList.toggle('menu__close_active');
  document.querySelector('.menu__main-btn').classList.toggle('menu__main-btn_visible');
});
document.querySelector('.menu__close').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('header__menu-items_visible');
  document.querySelector('.menu__close').classList.toggle('menu__close_active');
  document.querySelector('.menu__main-btn').classList.toggle('menu__main-btn_visible');
});
document.querySelector('.submenu__link').addEventListener('click', function () {
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
  document.querySelectorAll('.popup-help__step').forEach(function (remActive) {
    remActive.classList.remove('popup-help__step_active');
  });
  document.querySelector('.popup-help__step1').classList.add('popup-help__step_active');
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
      document.querySelectorAll('.step__content-btn').forEach(function (activeBtn) {
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

// document.querySelector('.callback__btn-popup').addEventListener('click', function () {
//     document.querySelector('.popup-help__step3').classList.remove('popup-help__step_active');
//     document.querySelector('.popup-help__step4').classList.add('popup-help__step_active');
//     setTimeout(() => {
//       closeModal();
//       document.querySelector('.popup-help__step4').classList.remove('popup-help__step_active');
//     }, 5000);
// });

const modalBtns3 = document.querySelectorAll('.main-btn-benefits');
if (modalBtns3.length > 0) {
  for (let index = 0; index < modalBtns3.length; index++) {
    const modalBtn3 = modalBtns3[index];
    modalBtn3.addEventListener('click', function () {
      modal.style.display = 'block';
      document.querySelectorAll('.popup-help__step').forEach(function (remActive) {
        remActive.classList.remove('popup-help__step_active');
      });
      document.querySelector('.popup-help__step3').classList.add('popup-help__step_active');
    });
  };
};

const modalBtns4 = document.querySelectorAll('.consultation');
if (modalBtns4.length > 0) {
  for (let index = 0; index < modalBtns4.length; index++) {
    const modalBtn4 = modalBtns4[index];
    modalBtn4.addEventListener('click', function () {
      modal.style.display = 'block';
      document.querySelectorAll('.popup-help__step').forEach(function (remActive) {
        remActive.classList.remove('popup-help__step_active');
      });
      document.querySelector('.popup-help__step3').classList.add('popup-help__step_active');
    });
  };
};


// validate form
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("8 (999) 999 99 99");

im.mask(selector);

new JustValidate('.help-form', {
  rules: {
    formTel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  tooltip: {
    fadeOutClass: '.hide',
  }
});

// validate form
if (document.querySelector('#mainTel')) {

  var select = document.querySelector('#mainTel');

  var impm = new Inputmask("8 (999) 999 99 99");

  impm.mask(select);

  new JustValidate('.callback-form', {
    rules: {
      tel: {
        required: true,
        function: (name, value) => {
          const phones = select.inputmask.unmaskedvalue()
          return Number(phones) && phones.length === 10
        }
      },
    },
    tooltip: {
      fadeOutClass: '.hide',
    }
  });

  document.querySelector('.callback__btn-main').addEventListener('click', function () {
    const inputMtel = document.querySelector('.input-tel__main');
      const phones = select.inputmask.unmaskedvalue();
      if (phones.length < 10) {
        document.querySelectorAll('.callback__tel-line').forEach(function (inputLine) {
          inputLine.classList.add('callback__tel-line_red');
        });
      };
      if (phones.length === 10) {
        document.querySelectorAll('.callback__tel-line').forEach(function (inputLine) {
          inputLine.classList.remove('callback__tel-line_red');
        });
      };
  });
}

const btnsTel = document.querySelectorAll('.callback__btn');
if (btnsTel.length > 0) {
  for (let i = 0; i < btnsTel.length; i++) {
    const btnTel = btnsTel[i];
    btnTel.addEventListener('click', function () {
      const inputsTel = document.querySelectorAll('.input-tel');
      if (inputsTel.length > 0) {
        for (let i = 0; i < inputsTel.length; i++) {
          const inputTel = inputsTel[i];
          inputTel.oninput = function (numTel) {
            numTel.innerHTML = inputTel.value;
            const phone = selector.inputmask.unmaskedvalue();
            if (phone.length < 10) {
              document.querySelectorAll('.callback__tel-line').forEach(function (inputLine) {
                inputLine.classList.add('callback__tel-line_red');
              });
            };
            if (phone.length === 10) {
              document.querySelectorAll('.callback__tel-line').forEach(function (inputLine) {
                inputLine.classList.remove('callback__tel-line_red');
                document.querySelector('.popup-help__step3').classList.remove('popup-help__step_active');
                document.querySelector('.popup-help__step4').classList.add('popup-help__step_active');
                setTimeout(() => {
                  closeModal();
                  document.querySelector('.popup-help__step4').classList.remove('popup-help__step_active');
                }, 5000);
              });
            };
          };
        };
      };
    });
  };
};

// document.querySelector('.callback__btn-popup').addEventListener('click', function () {
//     const phone = selector.inputmask.unmaskedvalue();
//     if (phone.length === 10) {
//     document.querySelector('.popup-help__step3').classList.remove('popup-help__step_active');
//     document.querySelector('.popup-help__step4').classList.add('popup-help__step_active');
//     setTimeout(() => {
//       closeModal();
//       document.querySelector('.popup-help__step4').classList.remove('popup-help__step_active');
//     }, 5000);
//   }
// });







