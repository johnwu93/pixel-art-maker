import { copyCanvas } from './canvas';

class CachedCanvas {
  constructor(savedCanvas) {
    this.savedCanvas = savedCanvas;
    this.currentCanvas = copyCanvas(this.savedCanvas);
  }

  setPixel(rowIndex, colIndex, pixel) {
    this.savedCanvas.setColumnSize(this.currentCanvas.numCols);
    this.savedCanvas.setRowSize(this.currentCanvas.numRows);
    this.savedCanvas.setPixel(rowIndex, colIndex, pixel);
    this.currentCanvas = copyCanvas(this.savedCanvas);
  }

  setRowSize(newRowSize) { // create more rows
    this.currentCanvas = copyCanvas(this.savedCanvas);
    this.currentCanvas.setRowSize(newRowSize);
  }

  setColumnSize(newColumnSize) {
    this.currentCanvas = copyCanvas(this.savedCanvas);
    this.currentCanvas.setColumnSize(newColumnSize);
  }

  setDimensions(newRowSize, newColumnSize) {
    this.currentCanvas = copyCanvas(this.savedCanvas);
    this.currentCanvas.setDimensions(newRowSize, newColumnSize);
  }

  getPixelMatrix() {
    return this.currentCanvas.getPixelMatrix();
  }
}

export default function createCachedCanvas(savedCanvas) {
  return new CachedCanvas(savedCanvas);
}
