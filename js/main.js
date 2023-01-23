const menuIconEl = document.querySelector('#menu-icon');
const menuEl = document.querySelector('.menu-div-mobile');
const crossIconEl = document.querySelector('#cross-icon');
const featuresMobClick = document.querySelector('.features-mobile-click');
const featuresMenuDivMob = document.querySelector('.features-menu');
const companyMobClick = document.querySelector('.company-mobile-click');
const companyMenuDivMob = document.querySelector('.company-menu');
// console.log('companyMobClick', companyMobClick);
// console.log(companyMenuDivMob);

menuIconEl.addEventListener('click', e => {
  menuEl.classList.remove('off').add('on');
});
crossIconEl.addEventListener('click', e => {
  menuEl.classList.add('off');
});

featuresMobClick.addEventListener('click',
  e => {
    featuresMenuDivMob.classList.contains('d-none')
      ? featuresMenuDivMob.classList.remove('d-none').add('d-block')
      : featuresMenuDivMob.classList.add('d-none');

  });
companyMobClick.addEventListener('click',
  e => {
    companyMenuDivMob.classList.contains('d-none')
      ? companyMenuDivMob.classList.remove('d-none').add('d-block')
      : companyMenuDivMob.classList.add('d-none');

  });
// function openClose(e) {
//   e.target.classList.contains('d-none')
//     ? e.target.classList.remove('d-none').add('d-block')
//     : e.target.classList.add('d-none');
// }
