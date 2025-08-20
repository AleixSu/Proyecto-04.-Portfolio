import { aboutMeCreator } from '../aboutMe/aboutMe'
import { contactMeCreator } from '../contact/contact'
import { logoArrays, projectArray } from '../data/arrays'
import { mainCreator } from '../main/main'
import { myWorkCreator } from '../myWork/myWork'
import { skillsNdExpCreator } from '../skills&Exp/skills&Exp'

export const renderApp = () => {
  const app = document.getElementById('app')

  app.innerHTML = ''

  mainCreator(app)
  aboutMeCreator(app)
  skillsNdExpCreator(app)
  myWorkCreator(app)
  contactMeCreator(app)
}

export let currentLanguage = 'EN'
export const setLanguage = (language) => {
  currentLanguage = language
}

export const skillImgCreator = (elementoPadre) => {
  for (const logoImg of logoArrays) {
    const skillsIMG = `
            <div class="logos hidden">
              <img src="${logoImg}" alt="LogoIMG">
            </div>
        `

    elementoPadre.innerHTML += skillsIMG
  }
}

export const projectCardCreator = (elementoPadre) => {
  projectArray.forEach((project) => {
    const projectHTML = `
     <div class="projectCardDiv hidden">
            <div class="projectCard">
                <video src="${project.projectVID}" muted loop playsinline></video>
                <h4 class="projectTag">${project.projectName}</h4>
                <a class="projectTag" href=${project.projectURL} target="_blank"> Go to GitHub Repository</a>
            </div>
        </div>   
    `
    elementoPadre.innerHTML += projectHTML
  })
}
