import $ from 'jquery';

import CanvasView from './views/canvasview';
import { ColorView, createCurrentColor } from './views/colorview';
import { GridSizeView, getInitialSize } from './views/gridsizeview';
import { createCanvasController, createCurrentColorController } from './controllers/controllerinitializer';

function makeGrid() {
  const currentColor = createCurrentColor();
  const currentColorController = createCurrentColorController(currentColor);
  const [numRows, numCols] = getInitialSize();
  const canvasController = createCanvasController(numRows, numCols);

  const canvasView = new CanvasView(canvasController, currentColorController);
  canvasView.render();
  canvasView.callListener();

  const colorView = new ColorView(currentColorController);
  colorView.callListener();

  const gridSizeView = new GridSizeView(canvasView, canvasController);
  gridSizeView.callListener();
}

$(makeGrid);
