import { createButton, createLinkButton } from '../buttons/button'
import { profileInfo } from '../data/profileInfo'
import { currentLanguage, renderApp, setLanguage } from '../functions/functions'
import './main.css'

export const mainCreator = (elementoPadre) => {
  const mainInfo = profileInfo[currentLanguage]

  const mainHTML = `
        <section id="main">
            <article id="mainInfo">
                <div id="h1Div">
                    <div id="info">
                        <div id= "languageSwitcherDiv">
                            <img class="worldImg" src="./src/components/data/images/worldwide.png" alt="worldImg">
                        </div>
                        <h1 id="intro">FullStack Developer</h1>
                        <h3 id="intro">(In Progress)</h3>
                        <p id="introP">${mainInfo.mainUserInfo}</p>
                        <div id="buttonContact"></div>
                     </div>
                </div>
                <div id="ImgDiv">
                   <div id="filterDiv"> <img class="backgroundPhoto" src="${mainInfo.profileIMG}" alt="profilePict" id="profilePict"></div>
                    <img id="profileIMG" src="${mainInfo.profileIMG}" alt="profilePict" id="profilePict">
                </div>
            </article>
            <div id="decoDiv"></div>
        </section>  
    `
  elementoPadre.innerHTML += mainHTML

  document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcherDiv = document.getElementById('languageSwitcherDiv')
    createButton(languageSwitcherDiv, 'EN', 'languageSwitcher', 'buttonEN')
    createButton(languageSwitcherDiv, 'ES', 'languageSwitcher', 'buttonES')
    const buttonContact = document.getElementById('buttonContact')
    createLinkButton(buttonContact, '', 'Contact Me', 'contactButtonDark')
    buttonContact.addEventListener('click', (e) => {
      e.preventDefault()
      const section = document.querySelector('#contactMeContent')
      section.scrollIntoView({ behavior: 'smooth' })
    })
  })
}
