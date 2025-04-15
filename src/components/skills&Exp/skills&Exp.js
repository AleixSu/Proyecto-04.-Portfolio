import { profileInfo } from '../data/profileInfo'
import { currentLanguage, skillImgCreator } from '../functions/functions'
import './skills&Exp.css'

export const skillsNdExpCreator = (elementoPadre) => {
  const expNdSkillsInfo = profileInfo[currentLanguage]
  const mainHTML = `
            <section id="skillsExpContent" class="skillsExpContent">
                <article class="expDiv">
                    <h2 class="skillsTitle">Experience</h2>
                    <p class="expP">${expNdSkillsInfo.expInfo}</p>
                </article>
                <article class="skillsDiv">
                    <h2 class="skillsTitle">Skills</h2> 
                    <div class="logoDiv">   
                    </div> 
                </article>
            </section>
    `
  elementoPadre.innerHTML += mainHTML
}

document.addEventListener('DOMContentLoaded', () => {
  const logoDiv = document.querySelector('.logoDiv')
  skillImgCreator(logoDiv)

  const skillsExpDiv = document.querySelector('#skillsExpContent')

  const initialOffsetTopSE = skillsExpDiv.offsetTop

  window.addEventListener('scroll', () => {
    const scrollYSE = window.scrollY

    if (scrollYSE >= initialOffsetTopSE) {
      skillsExpDiv.classList.add('fixedSE')
      skillsExpDiv.classList.remove('skillsExpContent')
    } else {
      skillsExpDiv.classList.remove('fixedSE')
      skillsExpDiv.classList.add('skillsExpContent')
    }
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')

  hiddenElements.forEach((e) => observer.observe(e))
})
