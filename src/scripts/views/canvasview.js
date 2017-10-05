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

export default class CanvasView {
  constructor(canvasController, currentColorController) {
    this.canvasController = canvasController;
    this.currentColorController = currentColorController;
  }

  render() {
    // TODO: optimize rendering so that the entire tables doesn't need to be rendered
    const canvasMatrix = this.canvasController.getCanvas();
    const tableHTMLString = canvasMatrix
      .map((row, rowIdx) => `<tr>\n  ${renderRow(row, rowIdx)}\n  </tr>`)
      .join('\n');
    $('#pixel_canvas').html(tableHTMLString);
  }

  changeColor(rowIdx, columnIdx) {
    this.canvasController.setPixel(rowIdx, columnIdx, this.currentColorController.currentColor);
  }

  callListener() {
    $('#pixel_canvas').on('click', 'td', (event) => {
      const tableElement = $(event.target);
      const stringId = tableElement.attr('class');
      const [rowIdx, colIdx] = parseIndex(stringId);
      this.changeColor(rowIdx, colIdx);
      tableElement.css('background-color', this.currentColorController.currentColor);
    });
  }
}
