import { slider } from "./elements/slider.js";
import { preSlides } from "./elements/preSlides.js";
import { maxInertia } from "./elements/maxInertia.js";

import { updateSlidePlacement } from "./manipulations/updateSlidePlacement.js";
import { snapClosestSlide } from "./manipulations/snapClosestSlide.js";

while (slider.children.length < maxInertia * 2 + 1) {
  slider.append(...preSlides.map(slide => slide.cloneNode(true)))
}

updateSlidePlacement()
slider.onscroll = throttle(updateSlidePlacement, 100)


window.onmouseup = () => {
  onmousemove = null

  snapClosestSlide()
}

window.ontouchend = () => {
  let timerId

  slider.onscroll = () => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      slider.onscroll = null

      snapClosestSlide()
    }, 50)
  }
}

slider.onmousedown = ({ clientX: x0 }) => {
  const { scrollLeft } = slider

  onmousemove = ({ clientX: x }) => {
    slider.scrollLeft = scrollLeft - x + x0
  }
}


function throttle(fn, ms) {
  let timerId

  return () => {
    clearTimeout(timerId)

    timerId = setTimeout(fn, ms)
  }
}