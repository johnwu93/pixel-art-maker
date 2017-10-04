import $ from 'jquery';

const extractInputNumberValues = function extractInputNumberValues(inputs, selectorName) {
  return Number(inputs.filter(selectorName).val());
};

function extractInputs(sizePickerEvent) {
  sizePickerEvent.preventDefault();
  const submitFormElement = $(sizePickerEvent.target);
  return submitFormElement.find('input');
}

export default class GridSizeView {
  constructor(canvasView, canvasController) {
    this.canvasView = canvasView;
    this.canvasController = canvasController;
  }

  changeRowSize(inputs) {
    const newRowColumns = extractInputNumberValues(inputs, '#input_height');
    this.canvasController.setRowSize(newRowColumns);
  }

  changeColumnSize(inputs) {
    const newColumnNums = extractInputNumberValues(inputs, '#input_width');
    this.canvasController.setColumnSize(newColumnNums);
  }

  callListener() {
    $('#sizePicker').change((sizePickerEvent) => {
      const inputs = extractInputs(sizePickerEvent);

      this.changeRowSize(inputs);
      this.changeColumnSize(inputs);

      this.canvasView.render();
    });
  }
}
