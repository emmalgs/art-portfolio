import { Year, Artwork } from "./paintings";
import img1 from './../assets/images/paintings/2021/1.JPG';
import img2 from './../assets/images/paintings/2021/2.png';
import img3 from './../assets/images/paintings/2021/3.jpg';
import img4 from './../assets/images/paintings/2021/4.png';
import img5 from './../assets/images/paintings/2021/5.jpg';
import img6 from './../assets/images/paintings/2021/6.jpg';
import img7 from './../assets/images/paintings/2021/7.png';
import img8 from './../assets/images/paintings/2021/8.jpeg';


export const twenty21 = new Year(2021);

const p1 = new Artwork("Broccoli Beach", "oil on aluminum", "10 x 12 inches", img1, "studio");
const p2 = new Artwork("Franklin Rests", "oil on aluminum", "17.25 x 34.5 inches", img2, "found");
const p3 = new Artwork("The Thought of Hastas", "oil on aluminum", "24 x 24 inches", img3, "sold");
const p4 = new Artwork("That Mustard Chair That Pi Loves", "oil on aluminum", "24 x 48 inches", img4, "found");
const p5 = new Artwork("PLANTZ!", "oil on aluminum", "24 x 24 inches", img5, "sold");
const p6 = new Artwork("Untitled", "oil on aluminum", "12 x 12 inches", img6, "home");
const p7 = new Artwork("Untitled", "oil on aluminum", "18 x 24 inches", img7, "sold");
const p8 = new Artwork("Parable of the Sower/Mom Lost Her Wedding Ring", "acrylic on wood and aluminum", "48 x 72 inches", img8, "home");

twenty21.addArt(p1);
twenty21.addArt(p2);
twenty21.addArt(p3);
twenty21.addArt(p4);
twenty21.addArt(p5);
twenty21.addArt(p6);
twenty21.addArt(p7);
twenty21.addArt(p8);