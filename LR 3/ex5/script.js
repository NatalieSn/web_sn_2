const imgAddresses = ["images/2.png", "images/3.jpg", "images/4.jpg", "images/1.png"];
let currentImageIndex = 0;
const changeImg = document.querySelector(".image-block__image");
const changeImgBtn = document.querySelector(".image-block__button");

changeImgBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imgAddresses.length;
    changeImg.src = imgAddresses[currentImageIndex];
});