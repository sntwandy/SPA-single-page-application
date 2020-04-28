import router from './routes';

const checkbox = document.getElementById("checkbox");

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

checkbox.addEventListener('click', (event) =>
    document.body.classList.toggle('dark')
);
