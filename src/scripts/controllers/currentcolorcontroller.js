import { createPixel } from '../models/pixel';


export default class CurrentColorController {
  constructor(currentPixel) {
    this.myCurrentColor = currentPixel; // pixel
  }

  get currentColor() {
    return this.myCurrentColor.getColor();
  }

  set currentColor(colorString) {
    this.myCurrentColor = createPixel(colorString);
  }
}
