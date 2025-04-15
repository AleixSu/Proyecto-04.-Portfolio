import { createButton } from '../buttons/button'
import './contact.css'

export const contactMeCreator = (elementoPadre) => {
  const mainHTML = `
        <section id="contactMeContent" class="contactMeContent">
            <div class="contactMeDiv">
                <h2 class="contactMeTitle">Contact me</h2>
                <article id="contactMeInfoDiv">
                  <h4> Do you want to work together?</h4>
                   <p> Got an idea or project in mind that you'd like to bring to life? Feel free to reach out! I'd be happy to help shape it into something practical, appealing, and tailor-made.</p>
                </article>
                <article id="contactMeForm">
                    <form>
                        <div class="inputPackDiv">
                            <div class="inputDiv">
                              <label for="name">Your name</label>
                              <input placeholder="Enter your name"></input>
                            </div>
                            <div class="inputDiv">
                              <label for="email">Email address</label>
                              <input placeholder="Enter your email address"></input>
                            </div>
                        </div>
                           <div class="inputMessageDiv">
                              <label for="yourMessage">Your message</label>
                              <textarea placeholder="Hi!! So.. I have this idea and I think your are the best for this job. Let's discuss it."></textarea>
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
  const sendButtonDiv = document.getElementById('sendMessageButton')
  createButton(sendButtonDiv, "Let's Do It!", 'contactButtonLight')
})
