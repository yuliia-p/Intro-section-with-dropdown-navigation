const menuIconEl = document.querySelector('#menu-icon');
const menuEl = document.querySelector('.menu-div-mobile');
const crossIconEl = document.querySelector('#cross-icon');
const elToClick = document.querySelectorAll('.click');

menuIconEl.addEventListener('click', e => {
  menuEl.classList.remove('off').add('on');
});
crossIconEl.addEventListener('click', e => {
  menuEl.classList.add('off');
});

elToClick.forEach(function (item) {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.contains('d-none')
      ? item.nextElementSibling.classList.remove('d-none').add('d-block')
      : item.nextElementSibling.classList.add('d-none');
  });
});
