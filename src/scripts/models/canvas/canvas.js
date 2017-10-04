import { createPixelMatrix, createWhitePixelArray, createWhitePixelMatrix } from '../pixel';

function verifyMatrix(colorStringMatrix) {
  if (colorStringMatrix.length === 0) {
    throw TypeError('Matrix needs to have a length greater than 0');
  }
  const numCols = colorStringMatrix[0].length;
  if (!colorStringMatrix.every(row => row.length === numCols)) {
    throw TypeError('The rows of the matrix must be of the same length');
  }
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

  setRowSize(newRowSize) { // create more rows
    if (this.numRows < newRowSize) {
      const whitePixelMatrix = createWhitePixelMatrix(newRowSize - this.numRows, this.numCols);
      const extraCanvasPiece = new Canvas(whitePixelMatrix);
      this.pixelMatrix.push(...extraCanvasPiece.pixelMatrix);
    } else {
      this.pixelMatrix = this.pixelMatrix.slice(0, newRowSize);
    }
    this.numRows = newRowSize;
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

  setDimensions(newRowSize, newColumnSize) {
    this.setRowSize(newRowSize);
    this.setColumnSize(newColumnSize);
  }

  getPixelMatrix() {
    return this.pixelMatrix;
  }
}

export function createCanvas(colorStringMatrix) {
  verifyMatrix(colorStringMatrix);
  return new Canvas(colorStringMatrix);
}

export function convertToStringMatrix(canvas) {
  return canvas.getPixelMatrix().map(
    row => row.map(pixel => pixel.getColor())
  );
}

export function copyCanvas(canvas) { // Todo makes sure it returns a deep copy of the matrix
  return createCanvas(convertToStringMatrix(canvas));
}