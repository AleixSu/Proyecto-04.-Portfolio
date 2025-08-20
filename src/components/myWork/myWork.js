import { textAndTitles } from '../data/portfolioTextAndTitles'
import { currentLanguage, projectCardCreator } from '../functions/functions'
import './myWork.css'

export const myWorkCreator = (elementoPadre) => {
  const tAndTMyWork = textAndTitles[currentLanguage]
  const mainHTML = `
 
        <section id="myWorkContent" class="myWorkContent">
            <article class="myWorkDiv">
               <h2 class="myWorkTitle">${tAndTMyWork.myWorkH2}</h2>
               <div id="cardDiv">
               </div>
            </article>
        </section>
  `

  elementoPadre.innerHTML += mainHTML
}

document.addEventListener('DOMContentLoaded', () => {
  const cardDivSelect = document.querySelector('#cardDiv')
  projectCardCreator(cardDivSelect)

  /* --------- */
  const myWorkDiv = document.querySelector('#myWorkContent')

  const initialOffsetTopMW = myWorkDiv.offsetTop

  window.addEventListener('scroll', () => {
    const scrollYMW = window.scrollY

    if (scrollYMW >= initialOffsetTopMW) {
      myWorkDiv.classList.add('fixedMW')
      myWorkDiv.classList.remove('myWorkContent')
    } else {
      myWorkDiv.classList.remove('fixedMW')
      myWorkDiv.classList.add('myWorkContent')
    }
  })
  const cards = document.querySelectorAll('.projectCard')

  cards.forEach((card) => {
    const video = card.querySelector('video')

    card.addEventListener('mouseenter', () => {
      video.play()
    })

    card.addEventListener('mouseleave', () => {
      video.pause()
      video.currentTime = 0
    })
  })
})
