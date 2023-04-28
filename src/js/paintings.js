export class Year {
  constructor() {
    this.art = {};
    this.index = 0;
  }

  assignIndex() {
    return this.index++
  }
  addArt(artwork) {
    this.art[this.assignIndex()] = artwork;
  }
}

export class Artwork {
  constructor(title, )
}