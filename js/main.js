const menuIconEl = document.querySelector('#menu-icon');
const menuEl = document.querySelector('.menu-div-mobile');
const crossIconEl = document.querySelector('#cross-icon');
const featuresMobClick = document.querySelector('.features-mobile-click');
const featuresMenuDivMob = document.querySelector('.features-menu');
const companyMobClick = document.querySelector('.company-mobile-click');
const companyMenuDivMob = document.querySelector('.company-menu');
const featuresDesktopClick = document.querySelector('.features-click');
const featuresMenuDivDesktop = document.querySelector('.features-menu-destop');
const companyDesktopClick = document.querySelector('.company-click');
const companyMenuDivDesktop = document.querySelector('.company-menu-destop');

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
featuresDesktopClick.addEventListener('click', e => {
  featuresMenuDivDesktop.classList.contains('d-none')
    ? featuresMenuDivDesktop.classList.remove('d-none').add('d-block')
    : featuresMenuDivDesktop.classList.add('d-none');

});
companyDesktopClick.addEventListener('click',
  e => {
    companyMenuDivDesktop.classList.contains('d-none')
      ? companyMenuDivDesktop.classList.remove('d-none').add('d-block')
      : companyMenuDivDesktop.classList.add('d-none');
  });
