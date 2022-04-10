console.log('Hello there');


const figures = document.querySelectorAll('.figure');

const btnMainPage = document.querySelector('#btn_main');
const btnMainPage2 = document.querySelector('#btn_main2');

const btnCircle = document.getElementById('btnCircle');

const btnCube = document.getElementById('btn_cubism');

const text = document.querySelector('.container__text');

btnMainPage.addEventListener('click', () => {
    window.open('./mainPage.html', '_self');
});


btnCircle.addEventListener('click', () => {
    for (const figure of figures) {
        figure.classList.remove('figure_cube');
        figure.classList.toggle('figure_circle');
    }
});

btnCircle.addEventListener('click', () => {
    text.classList.toggle('container__text_visible');
});


btnCube.addEventListener('click', () => {
    for (const figure of figures) {
        figure.classList.remove('figure_circle');
        figure.classList.toggle('figure_cube');

    }
});








