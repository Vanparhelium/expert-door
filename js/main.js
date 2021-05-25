window.addEventListener('DOMContentLoaded', function () {

  // accordion index.html
$( function() {
  $( "#accordion" ).accordion({
    active: 'false',
    collapsible: 'true',
    heightStyle:  'content',
    icons: 'false',
  });
  });
});

document.querySelector('.block__text-more').addEventListener('click', function() {
  document.querySelector('.block__more').classList.toggle('block__more_active');
  document.querySelector('.accordion__arrow-more').classList.toggle('accordion__arrow-more_active');
});

// tabs card-standart.html
document.querySelectorAll('.options__item').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.options__item').forEach(function(rem) {
      rem.classList.remove('options__item_active')
    })
    tabsBtn.classList.add('options__item_active')
    document.querySelectorAll('.card__option').forEach(function(tabContent) {
        tabContent.classList.remove('card__option_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('card__option_active')
  })
});


document.querySelectorAll('.card-option__item').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.card-option__item').forEach(function(rem) {
      rem.classList.remove('card-option__item_active')
    })
    tabsBtn.classList.add('card-option__item_active')
    document.querySelectorAll('.options__table').forEach(function(tabContent) {
        tabContent.classList.remove('options__table_hidden')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('options__table_hidden')
  })
});
