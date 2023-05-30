import './css/styles.css';
import {twenty22} from './js/2022';
import { twenty21 } from './js/2021';
import { allDrawings } from './js/drawings';
import bio from './assets/text/bio.txt';
import cv from './assets/text/cv.txt';
import contact from './assets/text/contact.txt';

window.addEventListener("load", () => {
  homepageImage();
  hideNewsLetterSignup();
  document.querySelector(".home").addEventListener("click", () => {
    clearMain();
    hideNewsLetterSignup();
    homepageImage();
  })
  document.querySelector(".paintings").addEventListener("click", () => {
    clearMain();
    hideNewsLetterSignup();
    show2022();
    show2021();
  });
  document.querySelector(".bio").addEventListener("click", () => {
    clearMain();
    displayNewsletterSignup();
    bioPage();
  });
  document.querySelector(".cv").addEventListener("click", () => {
    clearMain();
    displayNewsletterSignup();
    cvPage();
  });
  document.querySelector(".drawings").addEventListener("click", () => {
    clearMain();
    hideNewsLetterSignup();
    showDrawings();
  });
  document.querySelector(".contact").addEventListener("click", () => {
    clearMain();
    displayNewsletterSignup();
    showContact();
  })
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
    info.textContent = `${twenty21.art[artwork].title}, ${twenty21.art[artwork].dimensions}, ${twenty21.art[artwork].medium}, 2021`;
    imgCard.append(info);

    imageDiv.append(imgCard);
  }
}

function bioPage() {
  const main = document.querySelector("#images");
  const paragraphs = bio.split('\n');
  paragraphs.forEach(paragraph => {
    if (paragraph !== "")
    {
      const p = document.createElement('p');
      p.textContent = paragraph;
      main.append(p);
    }
  });
}

function cvPage() {
  const main = document.querySelector("#images");
  const cvDiv = document.createElement("div");
  cvDiv.classList = "text-container";
  const paragraphs = cv.split('\n');
  paragraphs.forEach(paragraph => {
    if (paragraph !== "")
    {
      const p = document.createElement('p');
      p.textContent = paragraph;
      cvDiv.append(p);
    }
  });
  main.append(cvDiv);
}

function showDrawings() {
  const main = document.querySelector("#images");
  for (const key in allDrawings.drawing) {
    const image = document.createElement("img");
    image.src = allDrawings.drawing[key].src;
    main.append(image);
  }
}

function showContact() {
  const main = document.querySelector("#images");
  const contactDiv = document.createElement("div");
  contactDiv.classList = "contact-container";
  const lines = contact.split('\n');
  lines.forEach(line => {
    if (line !== "")
    {
      const p = document.createElement('p');
      p.textContent = line;
      contactDiv.append(p);
    }
  });
  main.append(contactDiv);
}

function displayNewsletterSignup() {
  const footer = document.querySelector('#footer');
  if (footer.classList.contains('hidden')) {
    footer.classList.remove('hidden');
  }
}

function hideNewsLetterSignup() {
  const footer = document.querySelector('#footer')
  footer.classList = 'hidden';
}
