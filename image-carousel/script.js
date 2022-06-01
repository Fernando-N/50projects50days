const img = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const images = document.querySelectorAll('#imgs img')

let index = 0

let interval = setInterval(run, 2000)

function run() {
  index++

  changeIMage()
}

function changeIMage() {
  if (index > images.length - 1) {
    index = 0
  } else if (index < 0) {
    index = images.length - 1
  }
  img.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  index++
  changeIMage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  index--
  changeIMage()
  resetInterval()
})
