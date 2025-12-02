const moviesList = document.querySelector(".movies-block__list");

moviesList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'LI') {
        target.textContent = 'Нажато!';
        target.classList.add('clicked');
    }
});

const addMovieBtn = document.querySelector(".movies-block__button");
const extraMovies = ["«Чародеи»", "«Карнавальная ночь»", "«Щелкунчик»", "«Снежная королева»", "«Морозко»"];

let i = 0;

addMovieBtn.addEventListener('click', () => {
    if (i < extraMovies.length) {
        const newLi = document.createElement('li');
        newLi.className = 'movies-block__item';
        newLi.textContent = extraMovies[i];
        moviesList.appendChild(newLi);
        i++;
    } else {
        addMovieBtn.textContent = 'Фильмы закончились 🎄';
        addMovieBtn.disabled = true;
    }
});