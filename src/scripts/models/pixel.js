class Pixel {
  constructor(colorString) {
    this.colorString = colorString;
  }

  getColor() {
    return this.colorString;
  }

  setColor(value) {
    this.colorString = value;
  }
}

const createPixel = function createPixel(color) {
  return new Pixel(color);
};

const createWhitePixel = function createWhitePixel() {
  return createPixel('white');
};

const copyPixel = function copyPixel(color) {
  return createPixel(color.getColor());
};

export { createPixel, createWhitePixel, copyPixel };
