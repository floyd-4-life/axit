// Меню бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("--lock");
    iconMenu.classList.toggle("--active");
    menuBody.classList.toggle("--active");
  });
}
const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", () => {
    if (iconMenu.classList.contains("--active")) {
      document.body.classList.remove("--lock");
      iconMenu.classList.remove("--active");
      menuBody.classList.remove("--active");
    }
  });
});

// После загрузки страницы вытащить заголовок блока tabs из контейнера
// с контентом если разрешение менее 576px
document.addEventListener("DOMContentLoaded", () => {
  const windowInnerWidth = window.innerWidth;
  const tabsTitle = document.querySelector(".tabs__subtitle");
  const tabsContainer = document.querySelector(".tabs__container");
  if (windowInnerWidth <= 576) {
    tabsContainer.before(tabsTitle);
    tabsTitle.classList.add("tabs__subtitle--outside");
  }
});

// То же самое, но для изменения ширины уже загруженной страницы.
window.addEventListener(`resize`, () => {
  const windowInnerWidth = window.innerWidth;
  const tabsTitle = document.querySelector(".tabs__subtitle");
  const tabsContainer = document.querySelector(".tabs__container");
  const tabsContent = document.querySelector(".tabs-content");
  if (windowInnerWidth <= 576) {
    tabsContainer.before(tabsTitle);
    tabsTitle.classList.add("tabs__subtitle--outside");
  }
  if (windowInnerWidth > 576) {
    tabsContent.prepend(tabsTitle);
    tabsTitle.classList.remove("tabs__subtitle--outside");
  }
}, false);

// Смена контента при нажатии на таб
document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs-triggers__item').forEach(
      (child) => child.classList.remove('tabs-triggers__item--active')
    );
    document.querySelectorAll('.tabs-content__item').forEach(
      (child) => child.classList.remove('tabs-content__item--active')
    );

    item.classList.add('tabs-triggers__item--active');
    document.getElementById(id).classList.add('tabs-content__item--active')
  })
);
document.querySelector('.tabs-triggers__item').click();

// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href^="#tab-"])');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
