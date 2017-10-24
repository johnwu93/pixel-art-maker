import $ from 'jquery';

const parseStringInput = function parseStringInput(queryInputs, ...selectorNames) {
  return selectorNames.map(name => Number(queryInputs.filter(name).val()));
};

const extractInputs = function extractInputs(sizePickerQuery) {
  return $(sizePickerQuery).find('input');
};

/**
 * @description View of that manipulates the Grid Size. It will send commands to the controller to
 * change the size of the matrix. Then, it will rerender the CanvasView.
 */
class GridSizeView {
  constructor(canvasView, canvasController) {
    this.canvasView = canvasView;
    this.canvasController = canvasController;
  }

  changeDimensions(inputs) {
    const newRowColumns = parseStringInput(inputs, '#input_height');
    const newColumnNums = parseStringInput(inputs, '#input_width');
    this.canvasController.setDimensions(newRowColumns, newColumnNums);
  }

  callListener() {
    $('#sizePicker').submit((sizePickerEvent) => {
      sizePickerEvent.preventDefault();
      const queryInputs = extractInputs(sizePickerEvent.target);
      this.changeDimensions(queryInputs);
      this.canvasView.render();
    });
  }
}

const getInitialSize = function getInitialSize() {
  const queryInputs = extractInputs('#sizePicker');
  return parseStringInput(queryInputs, '#input_height', '#input_width');
};

export { GridSizeView, getInitialSize };
