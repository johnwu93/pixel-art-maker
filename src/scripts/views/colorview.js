import $ from 'jquery';

export default class ColorView {
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
