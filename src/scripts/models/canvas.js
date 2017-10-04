import { createWhitePixel, createPixel } from './pixel';

function verifyMatrix(colorStringMatrix) {
  if (colorStringMatrix.length === 0) {
    throw TypeError('Matrix needs to have a length greater than 0');
  }
  const numCols = colorStringMatrix[0].length;
  if (!colorStringMatrix.every(row => row.length === numCols)) {
    throw TypeError('The rows of the matrix must be of the same length');
  }
}

const createPixelMatrix = function createPixelMatrix(colorStringMatrix) {
  return colorStringMatrix.map(row => row.map(elem => createPixel(elem)));
};


export function createWhitePixelArray(size) {
  return Array.from({length: size}, () => createWhitePixel());
}

export function createWhitePixelMatrix(numRows, numCols) {
  return Array.from({length: numRows}, () => createWhitePixelArray(numCols));
}


class Canvas {
  constructor(colorStringMatrix) {
    this.numRows = colorStringMatrix.length;
    this.numCols = colorStringMatrix[0].length;
    this.pixelMatrix = createPixelMatrix(colorStringMatrix);
  }

  setPixel(rowIndex, colIndex, pixel) {
    this.pixelMatrix[rowIndex][colIndex] = pixel;
  }

  setRowSize(newNumRows) { // create more rows
    if (this.numRows < newNumRows) {
      const whitePixelMatrix = createWhitePixelMatrix(newNumRows - this.numRows, this.numCols);
      const extraCanvasPiece = new Canvas(whitePixelMatrix);
      this.pixelMatrix.push(...extraCanvasPiece.pixelMatrix);
    } else {
      this.pixelMatrix = this.pixelMatrix.slice(0, newNumRows);
    }
    this.numRows = newNumRows;
  }

  setColumnSize(newColumnSize) {
    if (this.numCols < newColumnSize) {
      this.pixelMatrix.forEach(row =>
        row.push(...createWhitePixelArray(newColumnSize - this.numCols))
      );
    } else {
      // Todo optimize
      this.pixelMatrix = this.pixelMatrix.map(row => row.slice(0, newColumnSize));
    }
    this.numCols = newColumnSize;
  }
}

export function createCanvas(colorStringMatrix) {
  verifyMatrix(colorStringMatrix);
  return new Canvas(colorStringMatrix);
}
