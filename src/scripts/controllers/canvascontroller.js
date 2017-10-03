import { createPixel } from '../models/pixel';


export default class CanvasController {
  constructor(canvasModel) {
    this.canvasModel = canvasModel;
  }

  setColumnSize(columnSize) {
    this.canvasModel.setColumnSize(columnSize);
  }

  setRowSize(rowSize) {
    this.canvasModel.setRowSize(rowSize);
  }

  setPixel(rowIndex, colIndex, colorString) {
    this.canvasModel.pixelMatrix[rowIndex][colIndex] = createPixel(colorString);
  }

  getPixel(rowIndex, colIndex) {
    return this.canvasModel.pixelMatrix[rowIndex][colIndex];
  }

  getCanvas() {
    return this.canvasModel.pixelMatrix.map(
      row => row.map(pixel => pixel.getColor())
    );
  }
}
