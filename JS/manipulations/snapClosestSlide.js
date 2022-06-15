export { snapClosestSlide }

import { slider } from "../elements/slider.js";

import { getSlideWidth } from "./getSlideWidth.js";
import { getCurrentSlideIndex } from "./getCurrentSlideIndex.js";

function snapClosestSlide() {
  slider.scrollTo({ left: getSlideWidth() * getCurrentSlideIndex(), behavior: "smooth" })
}