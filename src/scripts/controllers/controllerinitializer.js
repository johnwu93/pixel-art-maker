import { createCanvas } from '../models/canvas/canvas';
import CurrentColorController from './currentcolorcontroller';
import { createWhitePixelMatrix } from '../models/pixel';
import createCachedCanvas from '../models/canvas/cachedcanvas';
import CanvasController from './canvascontroller';

const createCanvasController = function createCanvasController(numRows, numCols) {
  const pixelMatrix = createWhitePixelMatrix(numRows, numCols);
  const canvas = createCanvas(pixelMatrix);
  const cachedCanvas = createCachedCanvas(canvas);
  return new CanvasController(cachedCanvas);
};


const createCurrentColorController = function createCurrentColorController(color) {
  return new CurrentColorController(color);
};

export { createCanvasController, createCurrentColorController };
