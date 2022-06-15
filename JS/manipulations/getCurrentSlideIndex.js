export { getCurrentSlideIndex }

import { slider } from "../elements/slider.js";
import { getSlideWidth } from "./getSlideWidth.js";



function getCurrentSlideIndex() {
  return Math.round(slider.scrollLeft / getSlideWidth())
}