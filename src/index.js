import './css/styles.css';
import {twenty22} from './js/2022';
import { twenty21 } from './js/2021';

window.addEventListener("load", () => {
  homepageImage();
  document.querySelector(".home").addEventListener("click", () => {
    clearMain();
    homepageImage();
  })
  document.querySelector(".paintings").addEventListener("click", () => {
    clearMain();
    show2022();
    show2021();
  });
})

function clearMain() {
  const imageDiv = document.querySelector("#images");
  while (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.firstChild);
  }
}

function homepageImage() {
  const imageDiv = document.querySelector("#images");
  let image = Math.floor(Math.random() * 13) + 1;

  const painting = document.createElement("img");
  painting.classList = "home-image";
  painting.src = twenty22.art[image].src;
  imageDiv.append(painting);
}

function show2022() {
  const imageDiv = document.querySelector("#images");
  for (const artwork in twenty22.art) {
    const imgCard = document.createElement("div");
    imgCard.classList = "img-card";

    const image = document.createElement("img");
    image.src = twenty22.art[artwork].src;
    imgCard.append(image);

    const info = document.createElement("p");
    info.textContent = `${twenty22.art[artwork].title}, ${twenty22.art[artwork].dimensions}, ${twenty22.art[artwork].medium}, 2022`;
    imgCard.append(info);

    imageDiv.append(imgCard);
  }
}

function show2021() {
  const imageDiv = document.querySelector("#images");
  for (const artwork in twenty21.art) {
    const imgCard = document.createElement("div");
    imgCard.classList = "img-card";

    const image = document.createElement("img");
    image.src = twenty21.art[artwork].src;
    imgCard.append(image);

    const info = document.createElement("p");
    info.textContent = `${twenty21.art[artwork].title}, ${twenty21.art[artwork].dimensions}, ${twenty21.art[artwork].medium}, 2022`;
    imgCard.append(info);

    imageDiv.append(imgCard);
  }
}
