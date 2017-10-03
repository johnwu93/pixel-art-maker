import $ from 'jquery';

import { createPixel } from './models/pixel';
import { createCanvas } from './models/canvas';
import CanvasController from './controllers/canvascontroller';
import CurrentColorController from './controllers/currentcolorcontroller';
import CanvasView from './views/canvasview';

$(() => {
  const currentColor = createPixel('black');
  const canvasMatrix = [['red', 'white', 'blue'],
    ['orange', 'green', 'black']];
  const canvas = createCanvas(canvasMatrix);
  const canvasController = new CanvasController(canvas);
  const currentColorController = new CurrentColorController(currentColor);

  const canvasView = new CanvasView(canvasController, currentColorController);
  canvasView.render();

  canvasView.callClickPixelListener();
});
