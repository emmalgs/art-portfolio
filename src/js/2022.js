import { Year, Artwork } from "./paintings";
import img1 from './../assets/images/paintings/2022/1.jpg';
import img2 from './../assets/images/paintings/2022/2.jpg';
import img3 from './../assets/images/paintings/2022/3.jpg';
import img4 from './../assets/images/paintings/2022/4.jpg';
import img5 from './../assets/images/paintings/2022/5.jpg';
import img6 from './../assets/images/paintings/2022/6.jpg';
import img7 from './../assets/images/paintings/2022/7.jpg';
import img8 from './../assets/images/paintings/2022/8.jpg';
import img9 from './../assets/images/paintings/2022/9.jpg';
import img10 from './../assets/images/paintings/2022/10.jpg';
import img11 from './../assets/images/paintings/2022/11.jpg';
import img12 from './../assets/images/paintings/2022/12.jpg';
import img13 from './../assets/images/paintings/2022/13.jpg';


export const twenty22 = new Year(2022);

const p1 = new Artwork("Buddies", "oil on aluminum", "12 x 12 inches", img1, "home");
const p2 = new Artwork("Duck Pet No.1", "oil on aluminum", "12 x 14 inches", img2, "froelick");
const p3 = new Artwork("Duck Pet No.2", "oil on aluminum", "12 x 14 inches", img3, "froelick");
const p4 = new Artwork("Duck Pet No.3", "oil on aluminum", "12 x 14 inches", img4, "froelick");
const p5 = new Artwork("Friends", "oil on aluminum", "12 x 12 inches", img5, "home");
const p6 = new Artwork("Flowers", "oil on aluminum", "18 x 24 inches", img6, "home");
const p7 = new Artwork("Goat Herd", "oil on aluminum", "14 x 16 inches", img7, "sold");
const p8 = new Artwork("Paso Fino Pony No.1", "oil on aluminum", "14 x 16 inches", img8, "froelick");
const p9 = new Artwork("Paso Fino Pony No.2", "oil on aluminum", "12 x 14 inches", img9, "sold");
const p10 = new Artwork("Searcher", "oil on aluminum", "12 x 12 inches", img10, "home");
const p11 = new Artwork("Step", "oil on aluminum", "12 x 16 inches", img11, "froelick");
const p12 = new Artwork("Untitled", "oil on aluminum", "12 x 12 inches", img12, "froelick");
const p13 = new Artwork("Untitled", "oil on aluminum", "12 x 12 inches", img13, "froelick");

twenty22.addArt(p1);
twenty22.addArt(p2);
twenty22.addArt(p3);
twenty22.addArt(p4);
twenty22.addArt(p5);
twenty22.addArt(p6);
twenty22.addArt(p7);
twenty22.addArt(p8);
twenty22.addArt(p9);
twenty22.addArt(p10);
twenty22.addArt(p11);
twenty22.addArt(p12);
twenty22.addArt(p13);