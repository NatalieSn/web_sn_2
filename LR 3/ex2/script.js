const textEl = document.querySelector(".highlight-block__text");
const btnEl = document.querySelector(".highlight-block__button");

btnEl.addEventListener('click', () => {
    textEl.classList.toggle('highlight-block__text--highlighted');
});
