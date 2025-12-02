const heading = document.querySelector(".greeting__title");
const btnChangeHeading = document.querySelector(".greeting__button");

btnChangeHeading.addEventListener('click', () => {
    heading.innerHTML = "Заголовок изменен!";
});