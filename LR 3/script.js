/*Задание 1*/
const heading = document.querySelector(".greeting__title");
const btnChangeHeading = document.querySelector(".greeting__button");

btnChangeHeading.addEventListener('click', function(){
    heading.innerHTML = "Заголовок изменен!";
});

/*Задание 2*/
const textEl = document.querySelector(".highlight-block__text");
const btnEl = document.querySelector(".highlight-block__button");

btnEl.addEventListener('click', function(){
    textEl.classList.toggle('highlight-block__text--highlighted');
});

/*Задание 3*/
const todoText = document.getElementById("inputField");
const todoButton = document.getElementById("addBtn");
const todoList = document.getElementById("list");

todoButton.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.className = 'todo-list__item';
    newItem.textContent = todoText.value;

    todoList.appendChild(newItem);
    todoText.value = '';
});

/*Задание 4*/
let count = 0;
const countEl = document.querySelector(".count-block__counter");
const countBtn = document.querySelector(".count-block__button");

countBtn.addEventListener('click', function() {
    count++;
    countEl.textContent = "Счетчик: " + count;
});

/*Задание 5*/
const imgAddresses = ["images/2.png", "images/3.jpg", "images/4.jpg", "images/1.png"];
let currentImageIndex = 0;
const changeImg = document.querySelector(".image-block__image");
const changeImgBtn = document.querySelector(".image-block__button");

changeImgBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imgAddresses.length;
    changeImg.src = imgAddresses[currentImageIndex];
});

/*Задание 6*/
const deleteList = document.querySelector(".delete-block__list");
const deleteBtn = document.querySelector(".delete-block__button");
deleteBtn.addEventListener('click', function() {
    let deleteItems = document.querySelectorAll(".delete-block__item");
    if (deleteItems.length > 0) {
        let lastItem = deleteItems[deleteItems.length - 1];
        deleteList.removeChild(lastItem);
    } else {
        alert('Список уже пуст! Нечего больше удалять 🎄');
    }
});

/*Задание 7*/
const form = document.querySelector(".form-block__form");
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const messageDiv = document.querySelector(".form-block__message");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    messageDiv.textContent = '';
    messageDiv.className = 'form-block__message';

    if (usernameInput.value.trim() === '') {
        messageDiv.textContent = 'Пожалуйста, укажите Ваше имя!';
        messageDiv.classList.add('form-block__message--error');
        usernameInput.focus();
        return;
    }

    if (emailInput.value.trim() === '') {
        messageDiv.textContent = 'Пожалуйста, укажите Вашу эл.почту!';
        messageDiv.classList.add('form-block__message--error');
        emailInput.focus();
        return;
    }

    messageDiv.textContent = 'Форма успешно отправлена!';
    messageDiv.classList.add('form-block__message--success');

    const formData = new FormData(form);
    console.log('Форма успешно отправлена:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    form.reset();
});

/*Задание 8*/
const toggleDiv = document.querySelector(".toggle-block__screen");
const toggleBtn = document.querySelector(".toggle-block__button");

toggleBtn.addEventListener('click', function() {
    toggleDiv.classList.toggle('toggle-block__screen--hidden');
});

/*Задание 9*/
const colorText = document.querySelector(".color-block__text");
const selectEl = document.getElementById('color-select');

selectEl.addEventListener('change', function () {
    selectedColor = selectEl.value;
    colorText.style.color = selectedColor;
});

/*Задание 10*/
const moviesList = document.querySelector(".movies-block__list");

moviesList.addEventListener('click', function(event){
    const target = event.target;

    if (target.tagName === 'LI') {
        target.textContent = 'Нажато!';
        target.classList.add('clicked');
    }
});

const addMovieBtn = document.querySelector(".movies-block__button");
const extraMovies = ["«Чародеи»", "«Карнавальная ночь»", "«Щелкунчик»", "«Снежная королева»", "«Морозко»"];

let i = 0;

addMovieBtn.addEventListener('click', function() {
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