import $ from 'jquery';

import { createCanvas } from './models/canvas/canvas';
import createCachedCanvas from './models/canvas/cachedcanvas';
import CanvasController from './controllers/canvascontroller';
import CurrentColorController from './controllers/currentcolorcontroller';
import CanvasView from './views/canvasview';
import { ColorView, createCurrentColor } from './views/colorview';
import { GridSizeView, initializeMatrix } from './views/gridsizeview';

function makeGrid() {
  const currentColor = createCurrentColor();

  const pixelMatrix = initializeMatrix();
  const canvas = createCanvas(pixelMatrix);
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
}

$(makeGrid);
