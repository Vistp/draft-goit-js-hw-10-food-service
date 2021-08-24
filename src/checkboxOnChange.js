const bodyEl = document.querySelector('body');
export default function() {
    // console.log('нажат переключатель');
    bodyEl.classList.toggle(Theme.DARK);

    if (bodyEl.classList.contains(Theme.DARK)) {
        console.log('темная тема');
        localStorage.setItem('theme', 'dark');
    }
    else {
        console.log('светлая тема');
        // localStorage.removeItem('theme');
        // localStorage.setItem('theme', 'light'); не работает приперезагрузке
        localStorage.removeItem('theme');
    }    
};