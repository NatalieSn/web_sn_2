const deleteList = document.querySelector(".delete-block__list");
const deleteBtn = document.querySelector(".delete-block__button");
deleteBtn.addEventListener('click', () => {
    let deleteItems = document.querySelectorAll(".delete-block__item");
    if (deleteItems.length > 0) {
        let lastItem = deleteItems[deleteItems.length - 1];
        deleteList.removeChild(lastItem);
    } else {
        alert('Список уже пуст! Нечего больше удалять 🎄');
    }
});