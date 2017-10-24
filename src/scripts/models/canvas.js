import { createPixelMatrix } from './pixel';

const verifyMatrix = function verifyMatrix(colorStringMatrix) {
  if (colorStringMatrix.length === 0) {
    throw TypeError('Matrix needs to have a length greater than 0');
  }
  const numCols = colorStringMatrix[0].length;
  if (!colorStringMatrix.every(row => row.length === numCols)) {
    throw TypeError('The rows of the matrix must be of the same length');
  }
};

/**
 * @description Model for the entire pixel maker. Contains all the pixels for pixel-maker.
 * It knows no other components outside of the `models` component.
 * @constructor
 * @param {Array<Array<string>>} colorStringMatrix - A string representation of the matrix
 */
class Canvas {
  constructor(colorStringMatrix) {
    this.pixelMatrix = createPixelMatrix(colorStringMatrix);
  }

  /**
   * @param rowIndex {int}
   * @param colIndex {int}
   * @param pixel {Pixel}
   */
  setPixel(rowIndex, colIndex, pixel) {
    this.pixelMatrix[rowIndex][colIndex] = pixel;
  }

  /**
   * @returns {Array<Array<Pixel>>}
   */
  getPixelMatrix() {
    return this.pixelMatrix;
  }
}


const createCanvas = function createCanvas(colorStringMatrix) {
  verifyMatrix(colorStringMatrix);
  return new Canvas(colorStringMatrix);
};

const convertToStringMatrix = function convertToStringMatrix(canvas) {
  return canvas.getPixelMatrix().map(
    row => row.map(pixel => pixel.getColor())
  );
};


export { createCanvas, convertToStringMatrix };
