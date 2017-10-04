import { createPixel } from '../models/pixel';
import { convertToStringMatrix } from '../models/canvas/canvas';

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
    this.canvasModel.setPixel(rowIndex, colIndex, createPixel(colorString));
  }

  setDimensions(rowSize, columnSize) {
    this.canvasModel.setDimensions(rowSize, columnSize);
  }

  getCanvas() {
    return convertToStringMatrix(this.canvasModel);
  }
}
