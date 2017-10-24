/**
 * @description A representation of a Pixel
 */

class Pixel {
  constructor(colorString) {
    this.colorString = colorString;
  }

  getColor() {
    return this.colorString;
  }
}

/** Factory methods for pixels
 */
const createPixel = function createPixel(color) {
  return new Pixel(color);
};

const createWhitePixel = function createWhitePixel() {
  return createPixel('white');
};

const createPixelMatrix = function createPixelMatrix(colorStringMatrix) {
  return colorStringMatrix.map(row => row.map(elem => createPixel(elem)));
};

const createWhitePixelArray = function createWhitePixelArray(size) {
  return Array.from({length: size}, () => createWhitePixel());
};

const createWhitePixelMatrix = function createWhitePixelMatrix(numRows, numCols) {
  return Array.from({length: numRows}, () => createWhitePixelArray(numCols));
};

export {
  createPixel,
  createWhitePixel,
  createPixelMatrix,
  createWhitePixelArray,
  createWhitePixelMatrix
};
