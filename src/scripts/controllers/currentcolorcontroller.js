import { createPixel } from '../models/pixel';


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
