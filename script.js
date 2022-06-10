const slider = document.querySelector(".slider")

let timerId

onmouseup = () => {
  onmousemove = null

  snapClosestSlide()
}

ontouchstart = () => {
  let prevX, movement

  clearTimeout(timerId)

  ontouchmove = ({ touches: [{ clientX: x }] }) => {
    if (prevX !== undefined) {
      movement = Math.abs(x - prevX)
    }

    prevX = x
  }

  ontouchend = () => {
    ontouchmove = null

    timerId = setTimeout(snapClosestSlide, movement * 90)

    console.log(movement)
  }
}

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
