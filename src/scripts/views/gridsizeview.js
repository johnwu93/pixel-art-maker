import $ from 'jquery';
import { createWhitePixelMatrix } from '../models/pixel';

const extractInputNumberValues = function extractInputNumberValues(inputs, ...selectorNames) {
  return selectorNames.map(name => Number(inputs.filter(name).val()));
};

const extractInputs = function extractInputs(sizePickerEvent) {
  sizePickerEvent.preventDefault();
  const submitFormElement = $(sizePickerEvent.target);
  return submitFormElement.find('input');
};

class GridSizeView {
  constructor(canvasView, canvasController) {
    this.canvasView = canvasView;
    this.canvasController = canvasController;
  }

  changeDimensions(inputs) {
    const newRowColumns = extractInputNumberValues(inputs, '#input_height');
    const newColumnNums = extractInputNumberValues(inputs, '#input_width');
    this.canvasController.setDimensions(newRowColumns, newColumnNums);
  }

  callListener() {
    $('#sizePicker').submit((sizePickerEvent) => {
      const inputs = extractInputs(sizePickerEvent);
      this.changeDimensions(inputs);
      this.canvasView.render();
    });
  }
}

const initializeMatrix = function initializeMatrix() {
  const inputs = $('#sizePicker').find('input');
  const [numRows, numCols] = extractInputNumberValues(inputs, '#input_height', '#input_width');
  return createWhitePixelMatrix(numRows, numCols);
};

export { GridSizeView, initializeMatrix };
