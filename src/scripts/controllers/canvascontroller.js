import { createPixel, createWhitePixelMatrix } from '../models/pixel';
import { convertToStringMatrix, createCanvas } from '../models/canvas';

/**
 * @description Controller to manipulate the site's canvas
 * @constructor
 * @param {Canvas}
 */
export default class CanvasController {
  constructor(canvasModel) {
    this.canvasModel = canvasModel;
  }

  setPixel(rowIndex, colIndex, colorString) {
    this.canvasModel.setPixel(rowIndex, colIndex, createPixel(colorString));
  }

  setDimensions(rowSize, columnSize) {
    const pixelMatrix = createWhitePixelMatrix(rowSize, columnSize);
    this.canvasModel = createCanvas(pixelMatrix);
  }

  getCanvas() {
    return convertToStringMatrix(this.canvasModel);
  }
}
