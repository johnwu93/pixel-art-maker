import $ from 'jquery';

import { createPixel } from './models/pixel';
import { createCanvas } from './models/canvas/canvas';
import createCachedCanvas from './models/canvas/cachedcanvas';
import CanvasController from './controllers/canvascontroller';
import CurrentColorController from './controllers/currentcolorcontroller';
import CanvasView from './views/canvasview';
import ColorView from './views/colorview';
import GridSizeView from './views/gridsizeview';

$(() => {
  const currentColor = createPixel('black');
  const canvasMatrix = [['red', 'white', 'blue'],
    ['orange', 'green', 'black']];
  const canvas = createCanvas(canvasMatrix);
  const cachedCanvas = createCachedCanvas(canvas);

  const canvasController = new CanvasController(cachedCanvas);
  const currentColorController = new CurrentColorController(currentColor);

  const canvasView = new CanvasView(canvasController, currentColorController);
  canvasView.render();
  canvasView.callListener();

  const colorView = new ColorView(currentColorController);
  colorView.callListener();

  const gridSizeView = new GridSizeView(canvasView, canvasController);
  gridSizeView.callListener();
});
