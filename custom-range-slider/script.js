const range = document.getElementById('range')

range.addEventListener('input', e => {
  const value = e.target.value
  const label = e.target.nextElementSibling

  const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
  const labelWidth = getComputedStyle(label).getPropertyValue('width')
  const rangeNumWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
  const labelNumWidth = +labelWidth.substring(0, labelWidth.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left =
    value * (rangeNumWidth / max) -
    labelNumWidth / 2 +
    scale(value, min, max, 10, -10)

  label.innerHTML = value

  label.style.left = `${left}px`
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
