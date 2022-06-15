export { updateSlidePlacement }

import { slider } from "../elements/slider.js";
import { maxInertia } from "../elements/maxInertia.js";

import { getSlideWidth } from "./getSlideWidth.js";
import { getCurrentSlideIndex } from "./getCurrentSlideIndex.js";



function updateSlidePlacement() {
  const i = getCurrentSlideIndex()
  const leftSlidesCount = i
  const rightSlidesCount = slider.children.length - i + 1
  const leftSlidesRequired = maxInertia - leftSlidesCount
  const rightSlidesRequired = maxInertia - rightSlidesCount

  if (leftSlidesRequired > 0) {
    slider.prepend(...[...slider.children].slice(-leftSlidesRequired))
    slider.scrollLeft = (i + leftSlidesRequired) * getSlideWidth()
  } else if (rightSlidesRequired > 0) {
    slider.append(...[...slider.children].slice(0, rightSlidesRequired))
    slider.scrollLeft = (i - rightSlidesRequired) * getSlideWidth()
  }
}