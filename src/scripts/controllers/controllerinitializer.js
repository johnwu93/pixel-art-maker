import { createCanvas } from '../models/canvas';
import CurrentColorController from './currentcolorcontroller';
import { createWhitePixelMatrix } from '../models/pixel';
import CanvasController from './canvascontroller';

/**
 * Factory methods to create the controller for the models' controller,
 * canvas and the current pixel
 */
const createCanvasController = function createCanvasController(numRows, numCols) {
  const pixelMatrix = createWhitePixelMatrix(numRows, numCols);
  const canvas = createCanvas(pixelMatrix);
  return new CanvasController(canvas);
};

const createCurrentColorController = function createCurrentColorController(color) {
  return new CurrentColorController(color);
};

export { createCanvasController, createCurrentColorController };
