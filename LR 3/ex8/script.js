const toggleDiv = document.querySelector(".toggle-block__screen");
const toggleBtn = document.querySelector(".toggle-block__button");

toggleBtn.addEventListener('click', () => {
    toggleDiv.classList.toggle('toggle-block__screen--hidden');
});