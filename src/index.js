import productCardTpl from './templates/product-card.hbs';
import cards from './menu.json';
import './sass/main.scss';


const menuEl = document.querySelector('.js-menu');
const menuCards = createMenuCard(cards);

menuEl.insertAdjacentHTML('beforeend', menuCards);

function createMenuCard(cards) {
    return cards.map(productCardTpl).join('');
}

const checkboxEl = document.querySelector('.theme-switch__toggle');
// console.log(checkboxEl);
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme')) {
    checkboxEl.setAttribute('checked', true);
    console.log('Темная тема после перезагрузки');
    // bodyEl.classList.add('dark-theme');
    bodyEl.classList.add(Theme.DARK);

}

const onChange = () => {
    // console.log('нажат переключатель');
    bodyEl.classList.toggle('dark-theme');

    if (bodyEl.classList.contains(Theme.DARK)) {
        console.log('темная тема');
        localStorage.setItem('theme', 'dark');
        // checkboxEl.setAttribute('checked', true);

    }
    else {
        console.log('светлая тема');
        // localStorage.removeItem('theme');
        // localStorage.setItem('theme', 'light'); не работает приперезагрузке
        localStorage.removeItem('theme');
    }
      
};
checkboxEl.addEventListener('change', onChange);


// ---- из занятия -----
// console.log(localStorage);
// localStorage.setItem('Tema', 'dark');
// localStorage.setItem('my-user', JSON.stringify({ name: 'Mango', age: 24 }));
// localStorage.setItem('my-user-1', ({ name: 'Mango', age: 24 }));

// console.log(localStorage.getItem('Tema'));

