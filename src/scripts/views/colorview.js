import $ from 'jquery';

/**
 * @description The view of the currently selected color in the palette. It will
 * send commands to the controller to change the currently selected color
 * @constructor
 * @param {CurrentColorController} currentColorController -
 */
export class ColorView {
  constructor(currentColorController) {
    this.currentColorController = currentColorController;
  }

  bindColorChange() {
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
