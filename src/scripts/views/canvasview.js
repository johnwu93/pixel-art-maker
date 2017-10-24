import $ from 'jquery';

const renderRow = function renderRow(row, rowIdx) {
  return row.map(
    (colorString, colIdx) =>
      `<td class="${rowIdx}_${colIdx}" style="background-color: ${colorString};"></td>>`)
    .join('');
};

const parseIndex = function getIndex(classValue) {
  return classValue.split('_').map(Number);
};

/**
 * @description Renders the canvas model. It will sends commands to manipulate the state of
 * the models. The view will manually update it's corresponding to the commands it sends.
 * As a result, the model will not communicate with the view or the controller in this
 * implementation.
 * @constructor
 * @param {CanvasController} canvasController -
 * @param {CurrentColorController} currentColorController -
 */
export default class CanvasView {
  constructor(canvasController, currentColorController) {
    this.canvasController = canvasController;
    this.currentColorController = currentColorController;
  }

  render() {
    const canvasMatrix = this.canvasController.getCanvas();
    const tableHTMLString = canvasMatrix
      .map((row, rowIdx) => `<tr>\n  ${renderRow(row, rowIdx)}\n  </tr>`)
      .join('\n');
    $('#pixel_canvas').html(tableHTMLString);
  }

  changeColor(rowIdx, columnIdx) {
    this.canvasController.setPixel(rowIdx, columnIdx, this.currentColorController.currentColor);
  }

  bindPixelClick() {
    $('#pixel_canvas').on('click', 'td', (event) => {
      const tableElement = $(event.target);
      const stringId = tableElement.attr('class');
      const [rowIdx, colIdx] = parseIndex(stringId);
      this.changeColor(rowIdx, colIdx);
      tableElement.css('background-color', this.currentColorController.currentColor);
    });
  }
}
