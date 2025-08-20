import { textAndTitles } from '../data/portfolioTextAndTitles'
import { profileInfo } from '../data/profileInfo'
import { currentLanguage, skillImgCreator } from '../functions/functions'
import './skills&Exp.css'

export const skillsNdExpCreator = (elementoPadre) => {
  const expNdSkillsInfo = profileInfo[currentLanguage]
  const tAndTSndE = textAndTitles[currentLanguage]

  const mainHTML = `
            <section id="skillsExpContent" class="skillsExpContent">
                <article class="expDiv">
                    <h2 class="skillsTitle">  ${tAndTSndE.expSkillsH2E}</h2>
                    <p class="expP">${expNdSkillsInfo.expInfo}</p>
                </article>
                <article class="skillsDiv">
                    <h2 class="skillsTitle">${tAndTSndE.expSkillsH2S}</h2> 
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

  //!INTERSECTION OBSERVER API. TEORÍA:
  // A continuación tenemos el uso de una observerAPI. Esto esuna API que permite detectar cuadno un elemento entra y/o sale del portview.

  const observer = new IntersectionObserver((entries) => {
    //Aquí creamos el nuevo obseravdor. Este observará y reaccionará a elementos cuando crucen el borde de la pantalla.
    entries.forEach((entry) => {
      // Creamos una lista de todos los objetos que van entrando en el portview
      if (entry.isIntersecting) {
        // Y hacemos un if: a todo objeto que entre en el portview...
        entry.target.classList.add('show') // ...le añadimos la clase show.
      }
    })
  })
  // Ahora, para que no actue sobre TODO OBJETO que entre en el portview creamos la clase hidden para identificar cuales queremos que se vean afectados por el observer
  const hiddenElements = document.querySelectorAll('.hidden') // y creamos un array de todos ellos. Anteriormente a esos elementos que queramos les habremos colocado la clase .hidden. Se puede comprobar en el file functions.js en la función de skillImgCreator o projectCardCreator.

  hiddenElements.forEach((e) => observer.observe(e)) // Por último aplicamos un forEach al array creado de .hidden's para que lo recorra y por cada elemento le decimos al IntersectionOserver-->(observer) que observe cada elemento-->(e) de ese array.
})
//En css modificamos las classes .hidden y .show para animarlas y hacer lo que queramos
