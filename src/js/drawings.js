import d1 from './../assets/images/drawings/pn1.jpg';
import d2 from './../assets/images/drawings/pn2.jpeg';
import d3 from './../assets/images/drawings/pn3.jpeg';
import d4 from './../assets/images/drawings/pn4.jpeg';
import d5 from './../assets/images/drawings/pn5.jpg';
import d6 from './../assets/images/drawings/pn6.jpeg';
import d7 from './../assets/images/drawings/pn7.jpg';
import d8 from './../assets/images/drawings/pn8.jpg';
import d9 from './../assets/images/drawings/pn9.jpg';
import d10 from './../assets/images/drawings/pn10.jpeg';
import d11 from './../assets/images/drawings/pn11.jpg';
import d12 from './../assets/images/drawings/pn12.jpeg';
import d13 from './../assets/images/drawings/pn13.jpeg';
import d14 from './../assets/images/drawings/pn14.jpeg';
import d15 from './../assets/images/drawings/pn15.jpeg';
import d16 from './../assets/images/drawings/pn16.jpg';
import d17 from './../assets/images/drawings/pn17.jpg';
import d18 from './../assets/images/drawings/pn18.jpg';
import d19 from './../assets/images/drawings/pn19.jpeg';
import d20 from './../assets/images/drawings/pn20.jpeg';
import d21 from './../assets/images/drawings/pn21.jpg';
import d22 from './../assets/images/drawings/pn22.jpg';
import d23 from './../assets/images/drawings/pn23.jpeg';
import d24 from './../assets/images/drawings/pn24.jpeg';
import d25 from './../assets/images/drawings/pn25.jpeg';
import d26 from './../assets/images/drawings/pn26.jpeg';
import d27 from './../assets/images/drawings/pn27.jpg';
import d28 from './../assets/images/drawings/pn28.jpg';
import d29 from './../assets/images/drawings/pn29.jpeg';
import d30 from './../assets/images/drawings/pn30.jpeg';
import d31 from './../assets/images/drawings/pn31.jpg';
import d32 from './../assets/images/drawings/pn32.jpeg';
import d33 from './../assets/images/drawings/pn33.jpg';
import d34 from './../assets/images/drawings/pn34.jpg';
import d35 from './../assets/images/drawings/pn35.jpeg';
import d36 from './../assets/images/drawings/pn36.jpg';
import d37 from './../assets/images/drawings/pn37.jpeg';
import d38 from './../assets/images/drawings/pn38.jpeg';
import d39 from './../assets/images/drawings/pn39.jpeg';
import d40 from './../assets/images/drawings/pn40.jpg';
import d41 from './../assets/images/drawings/pn41.jpg';
import d42 from './../assets/images/drawings/pn42.jpeg';
import d43 from './../assets/images/drawings/pn43.jpeg';
import d44 from './../assets/images/drawings/pn44.jpg';
import d45 from './../assets/images/drawings/pn45.jpeg';
import d46 from './../assets/images/drawings/pn46.jpeg';
import d47 from './../assets/images/drawings/pn47.jpeg';
import d48 from './../assets/images/drawings/pn48.jpg';
import d49 from './../assets/images/drawings/pn49.jpg';
import d50 from './../assets/images/drawings/pn50.jpg';
import d51 from './../assets/images/drawings/pn51.jpg';
import d52 from './../assets/images/drawings/pn52.jpg';
import d53 from './../assets/images/drawings/pn53.jpeg';
import d54 from './../assets/images/drawings/pn54.jpeg';
import d55 from './../assets/images/drawings/pn55.jpg';
import d56 from './../assets/images/drawings/pn56.jpeg';
import d57 from './../assets/images/drawings/pn57.jpg';
import d58 from './../assets/images/drawings/pn58.jpeg';
import d59 from './../assets/images/drawings/pn59.jpg';
import d60 from './../assets/images/drawings/pn60.jpg';

class AllDrawings {
  constructor() {
    this.drawing = {};
    this.index = 0;
  }
  assignIndex() {
    this.index++
    return this.index
  }
  addDrawing(artwork) {
    this.drawing[this.assignIndex()] = artwork;
  }
}

class Drawing {
  constructor(src) {
    this.src = src
  } 
}

export const allDrawings = new AllDrawings();

const pn1 = new Drawing(d1);
const pn2 = new Drawing(d2);
const pn3 = new Drawing(d3);
const pn4 = new Drawing(d4);
const pn5 = new Drawing(d5);
const pn6 = new Drawing(d6);
const pn7 = new Drawing(d7);
const pn8 = new Drawing(d8);
const pn9 = new Drawing(d9);
const pn10 = new Drawing(d10);
const pn11 = new Drawing(d11);
const pn12 = new Drawing(d12);
const pn13 = new Drawing(d13);
const pn14 = new Drawing(d14);
const pn15 = new Drawing(d15);
const pn16 = new Drawing(d16);
const pn17 = new Drawing(d17);
const pn18 = new Drawing(d18);
const pn19 = new Drawing(d19);
const pn20 = new Drawing(d20);
const pn21 = new Drawing(d21);
const pn22 = new Drawing(d22);
const pn23 = new Drawing(d23);
const pn24 = new Drawing(d24);
const pn25 = new Drawing(d25);
const pn26 = new Drawing(d26);
const pn27 = new Drawing(d27);
const pn28 = new Drawing(d28);
const pn29 = new Drawing(d29);
const pn30 = new Drawing(d30);
const pn31 = new Drawing(d31);
const pn32 = new Drawing(d32);
const pn33 = new Drawing(d33);
const pn34 = new Drawing(d34);
const pn35 = new Drawing(d35);
const pn36 = new Drawing(d36);
const pn37 = new Drawing(d37);
const pn38 = new Drawing(d38);
const pn39 = new Drawing(d39);
const pn40 = new Drawing(d40);
const pn41 = new Drawing(d41);
const pn42 = new Drawing(d42);
const pn43 = new Drawing(d43);
const pn44 = new Drawing(d44);
const pn45 = new Drawing(d45);
const pn46 = new Drawing(d46);
const pn47 = new Drawing(d47);
const pn48 = new Drawing(d48);
const pn49 = new Drawing(d49);
const pn50 = new Drawing(d50);
const pn51 = new Drawing(d51);
const pn52 = new Drawing(d52);
const pn53 = new Drawing(d53);
const pn54 = new Drawing(d54);
const pn55 = new Drawing(d55);
const pn56 = new Drawing(d56);
const pn57 = new Drawing(d57);
const pn58 = new Drawing(d58);
const pn59 = new Drawing(d59);
const pn60 = new Drawing(d60);

allDrawings.addDrawing(pn1);
allDrawings.addDrawing(pn2);
allDrawings.addDrawing(pn3);
allDrawings.addDrawing(pn4);
allDrawings.addDrawing(pn5);
allDrawings.addDrawing(pn6);
allDrawings.addDrawing(pn7);
allDrawings.addDrawing(pn8);
allDrawings.addDrawing(pn9);
allDrawings.addDrawing(pn10);
allDrawings.addDrawing(pn11);
allDrawings.addDrawing(pn12);
allDrawings.addDrawing(pn13);
allDrawings.addDrawing(pn14);
allDrawings.addDrawing(pn15);
allDrawings.addDrawing(pn16);
allDrawings.addDrawing(pn17);
allDrawings.addDrawing(pn18);
allDrawings.addDrawing(pn19);
allDrawings.addDrawing(pn20);
allDrawings.addDrawing(pn21);
allDrawings.addDrawing(pn22);
allDrawings.addDrawing(pn23);
allDrawings.addDrawing(pn24);
allDrawings.addDrawing(pn25);
allDrawings.addDrawing(pn26);
allDrawings.addDrawing(pn27);
allDrawings.addDrawing(pn28);
allDrawings.addDrawing(pn29);
allDrawings.addDrawing(pn30);
allDrawings.addDrawing(pn31);
allDrawings.addDrawing(pn32);
allDrawings.addDrawing(pn33);
allDrawings.addDrawing(pn34);
allDrawings.addDrawing(pn35);
allDrawings.addDrawing(pn36);
allDrawings.addDrawing(pn37);
allDrawings.addDrawing(pn38);
allDrawings.addDrawing(pn39);
allDrawings.addDrawing(pn40);
allDrawings.addDrawing(pn41);
allDrawings.addDrawing(pn42);
allDrawings.addDrawing(pn43);
allDrawings.addDrawing(pn44);
allDrawings.addDrawing(pn45);
allDrawings.addDrawing(pn46);
allDrawings.addDrawing(pn47);
allDrawings.addDrawing(pn48);
allDrawings.addDrawing(pn49);
allDrawings.addDrawing(pn50);
allDrawings.addDrawing(pn51);
allDrawings.addDrawing(pn52);
allDrawings.addDrawing(pn53);
allDrawings.addDrawing(pn54);
allDrawings.addDrawing(pn55);
allDrawings.addDrawing(pn56);
allDrawings.addDrawing(pn57);
allDrawings.addDrawing(pn58);
allDrawings.addDrawing(pn59);
allDrawings.addDrawing(pn60);