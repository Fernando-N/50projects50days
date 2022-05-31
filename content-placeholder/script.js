const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImag = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBackgrounds = document.querySelectorAll('.animated-bg')
const animatedBackgroundTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"alt=""/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deserunt.'
  profileImag.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  name.innerHTML = 'Bam'
  date.innerHTML = 'Ocr 08, 2022'

  animatedBackgrounds.forEach(background =>
    background.classList.remove('animated-bg')
  )

  animatedBackgroundTexts.forEach(backgroundText =>
    backgroundText.classList.remove('animated-bg-text')
  )
}
