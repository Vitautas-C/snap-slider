const slider = document.querySelector(".slider")

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
  slider.scrollTo({ left: getSlideWidth() * getCurrentSlideIndex(), behavior: "smooth" })
}

function getCurrentSlideIndex() {
  return Math.round(slider.scrollLeft / getSlideWidth())
}

function getSlideWidth() {
  const slideCount = slider.children.length

  return slider.scrollWidth / slideCount
}
