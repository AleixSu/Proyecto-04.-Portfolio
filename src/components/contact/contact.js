import { createButton } from '../buttons/button'
import { textAndTitles } from '../data/portfolioTextAndTitles'
import { currentLanguage } from '../functions/functions'
import './contact.css'

export const contactMeCreator = (elementoPadre) => {
  const tAndTContactMe = textAndTitles[currentLanguage]

  const mainHTML = `
        <section id="contactMeContent" class="contactMeContent">
            <div class="contactMeDiv">
                <h2 class="contactMeTitle">${tAndTContactMe.contactMeH2}</h2>
                <article id="contactMeInfoDiv">
                  <h4>${tAndTContactMe.contactMeH4}</h4>
                   <p>${tAndTContactMe.contactMeText}</p>
                </article>
                <article id="contactMeForm">
                    <form>
                        <div class="inputPackDiv">
                            <div class="inputDiv">
                              <label for="name">${tAndTContactMe.contactMeLabelN}</label>
                              <input placeholder="${tAndTContactMe.contactMePH1}"></input>
                            </div>
                            <div class="inputDiv">
                              <label for="email">${tAndTContactMe.contactMeLabelE}</label>
                              <input placeholder="${tAndTContactMe.contactMePH2}"></input>
                            </div>
                        </div>
                           <div class="inputMessageDiv">
                              <label for="yourMessage">${tAndTContactMe.contactMeLabelM}</label>
                              <textarea placeholder="${tAndTContactMe.contactMePH3}"></textarea>
                           </div>
                        <div id="sendMessageButton">
                        </div>
                    </form>
                </article>
            </div>
        </section>  
  `

  elementoPadre.innerHTML += mainHTML
}

document.addEventListener('DOMContentLoaded', () => {
  const tAndTContactMe = textAndTitles[currentLanguage]
  const sendButtonDiv = document.getElementById('sendMessageButton')
  createButton(
    sendButtonDiv,
    tAndTContactMe.contactMeSend,
    'contactButtonLight'
  )
})
