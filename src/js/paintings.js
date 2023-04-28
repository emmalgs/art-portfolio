export class Year {
  constructor(year) {
    this.year = year
    this.art = {};
    this.index = 0;
  }

  assignIndex() {
    this.index++
    return this.index
  }
  addArt(artwork) {
    this.art[this.assignIndex()] = artwork;
  }
}

export class Artwork {
  constructor(title, medium, dimensions, src, location) {
    this.title = title;
    this.medium = medium;
    this.dimensions = dimensions;
    this.src = src;
    this.location = location;
  }
}