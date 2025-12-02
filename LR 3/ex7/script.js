const form = document.querySelector(".form-block__form");
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const messageDiv = document.querySelector(".form-block__message");

form.addEventListener('submit', (e) => {
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