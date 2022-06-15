export { getSlideWidth }

import { slider } from "../elements/slider.js";



function getSlideWidth() {
  const slideCount = slider.children.length

  return slider.scrollWidth / slideCount
}
