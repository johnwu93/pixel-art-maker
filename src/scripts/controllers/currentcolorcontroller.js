import { createPixel } from '../models/pixel';

/**
 * @description Controller to manipulate the current pixel of pixel maker
 * @constructor
 * @param {string} colorString - String representation of the current pixel
 */
export default class CurrentColorController {
  constructor(colorString) {
    this.myCurrentColor = createPixel(colorString);
  }

  get currentColor() {
    return this.myCurrentColor.getColor();
  }

  set currentColor(colorString) {
    this.myCurrentColor = createPixel(colorString);
  }
}
