let count = 0;
const countEl = document.querySelector(".count-block__counter");
const countBtn = document.querySelector(".count-block__button");

countBtn.addEventListener('click', () => {
    count++;
    countEl.textContent = "Счетчик: " + count;
});