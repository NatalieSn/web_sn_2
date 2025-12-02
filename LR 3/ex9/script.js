const colorText = document.querySelector(".color-block__text");
const selectEl = document.getElementById('color-select');

selectEl.addEventListener('change', () => {
    selectedColor = selectEl.value;
    colorText.style.color = selectedColor;
});