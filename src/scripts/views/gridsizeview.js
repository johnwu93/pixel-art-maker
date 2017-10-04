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
    const [newRowColumns, newColumnNums] = extractInputNumberValues(inputs, '#input_height', '#input_width');
    this.canvasController.setDimensions(newRowColumns, newColumnNums);
  }

  renderSubmitEvent(sizePickerEvent, eventAction) {
    const inputs = extractInputs(sizePickerEvent);
    eventAction(inputs);
    this.canvasView.render();
  }

  callListener() {
    $('#sizePicker').submit(event => this.renderSubmitEvent(event, this.changeDimensions.bind(this)));
  }
}

const initializeMatrix = function initializeMatrix() {
  const inputs = $('#sizePicker').find('input');
  const [numRows, numCols] = extractInputNumberValues(inputs, '#input_height', '#input_width');
  return createWhitePixelMatrix(numRows, numCols);
};

export { GridSizeView, initializeMatrix };
