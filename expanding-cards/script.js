const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panelHasActive = document.querySelector('.active')

    if (panelHasActive) {
      panelHasActive.classList.remove('active')
      console.log('aaaaaaaa')
    }

    // Teacher solution
    // removeActiveClasses()
    panel.classList.add('active')
  })
})

// Teacher solution gonna be commented
// function removeActiveClasses() {
//   panels.forEach(panel => panel.classList.remove('active'))
// }
