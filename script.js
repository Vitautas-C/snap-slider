const slider = document.querySelector(".slider")
const preSlides = [...slider.children]
const maxInertia = 30

while (slider.children.length < maxInertia * 2 + 1) {
  slider.append(...preSlides.map(slide => slide.cloneNode(true)))
}

updateSlidePlacement()

onmouseup = () => {
  onmousemove = null

  snapClosestSlide()
}

ontouchend = () => {
  let timerId

  slider.onscroll = () => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      slider.onscroll = null

      snapClosestSlide()
    }, 50)
  }
}
// ontouchstart = ({x: x0}) => alert(1)

slider.onmousedown = ({ clientX: x0 }) => {
  const { scrollLeft } = slider

  onmousemove = ({ clientX: x }) => {
    slider.scrollLeft = scrollLeft - x + x0
  }
}


function snapClosestSlide() {
  let timerId

  slider.onscroll = () => {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      slider.onscroll = null

      updateSlidePlacement()
    }, 50)
  }

  slider.scrollTo({ left: getSlideWidth() * getCurrentSlideIndex(), behavior: "smooth" })
}

function getCurrentSlideIndex() {
  return Math.round(slider.scrollLeft / getSlideWidth())
}

function getSlideWidth() {
  const slideCount = slider.children.length

  return slider.scrollWidth / slideCount
}

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
