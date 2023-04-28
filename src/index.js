import './css/styles.css';
import {twenty22} from './js/2022';

function showImage() {
  const image = document.createElement("img");
  image.src = twenty22.art[1].src
  console.log(image.src)
  document.querySelector("#images").append(image);
}

showImage();