import $ from 'jquery';

export class ColorView {
  constructor(currentColorController) {
    this.currentColorController = currentColorController;
  }

  callListener() {
    $('#colorPicker').on('change', (event) => {
      const colorInputEvent = $(event.target);
      this.currentColorController.currentColor = colorInputEvent.val();
    });
  }
}

const createCurrentColor = function createCurrentPixel() {
  return $('#colorPicker').val();
};

export { createCurrentColor };
