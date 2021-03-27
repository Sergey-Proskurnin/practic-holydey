import { templates } from 'handlebars';
import data from '../data/menu.json';
import template from '../template/template.hbs';

const refs = {
  body: document.body,
  list: document.querySelector('.js-menu'),
  input: document.querySelector('.theme-switch__toggle'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

const markup = template(data);

refs.list.insertAdjacentHTML('beforeend', markup);
refs.input.addEventListener('change', inputChangeOn);

function changeTheme(add, rem) {
  refs.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}

function inputChangeOn({ target }) {
  target.checked
    ? changeTheme(Theme.DARK, Theme.LIGHT)
    : changeTheme(Theme.LIGHT, Theme.DARK);
}

// import menu from '../data/menu.json';
// import menuItemTemplate from '../template/template.hbs';


// const menuRef = document.querySelector('.js-menu');
// const themeRef = document.querySelector('input[id="theme-switch-toggle"]');
// const bodyRef = document.body;
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// const menuTemplate = menuItemTemplate(menu)
// menuRef.innerHTML = menuTemplate;
// const theme = localStorage.getItem('theme');
// bodyRef.classList.add(theme);
// if (bodyRef.classList.contains(Theme.DARK)) {
//     themeRef.checked = true
// } if (bodyRef.classList.contains(Theme.LIGHT)) {
//     themeRef.checked = false
// };
// function themeChange() {
//     bodyRef.classList.add(Theme.DARK);
//     bodyRef.classList.add(Theme.LIGHT);
//     themeRef.checked === true ? bodyRef.classList.toggle(Theme.LIGHT) : bodyRef.classList.toggle(Theme.DARK);
//     localStorage.setItem('theme', bodyRef.classList);
// };
// themeRef.addEventListener('click', themeChange);