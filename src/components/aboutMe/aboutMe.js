import { profileInfo } from '../data/profileInfo'
import { currentLanguage } from '../functions/functions'
import './aboutMe.css'

export const aboutMeCreator = (elementoPadre) => {
  const aboutMeInfo = profileInfo[currentLanguage]
  const mainHTML = `
            <section id="aboutMeInfo" class="aboutMeInfo">
                <h2> About me</h2>
                <p id="aboutMeP">${aboutMeInfo.userAboutMe}</p>
                <article class="infoDiv">
                    <h3 class="infoTitle">Technical</h3>
                    <p class="infoP">${aboutMeInfo.userTechnical}</p>
                </article>
                <article class="infoDiv">
                    <h3 class="infoTitle">Personal</h3>
                    <p class="infoP">${aboutMeInfo.userPersonal}</p>
                </article>
            </section>
    `
  elementoPadre.innerHTML += mainHTML
}

document.addEventListener('DOMContentLoaded', () => {
  //Esto hace que el documento espere que el html se haya cargado completamente antes de ejecutar el siguiente código. De esta forma se asegura que todos los elementos, por ejemplo el querySelector(#aboutMeInfo) esté disponible para poder seleccionarse. Lo que me pasaba antes probablemente era que se ejecutaba antes de que estuviera cargado y daba "null" cuando intentaba seleccionarlo.
  const aboutMeDiv = document.querySelector('#aboutMeInfo')

  const initialOffsetTopAM = aboutMeDiv.offsetTop //offsetTop es una propiedad que nos da el número de píxeles que hay entre la parte superior de un elemento y la parte superior de su contenedor.

  window.addEventListener('scroll', () => {
    const scrollYAM = window.scrollY //scrollY es una propiedad que solo tiene "window" y que nos da la cantidad de pixeles que se desplazan al hacer scroll, en este caso, vertical.

    if (scrollYAM >= initialOffsetTopAM) {
      aboutMeDiv.classList.add('fixedAM')
      aboutMeDiv.classList.remove('aboutMeInfo')
    } else {
      aboutMeDiv.classList.remove('fixedAM')
      aboutMeDiv.classList.add('aboutMeInfo')
    } // Por tanto lo que hacemos aquí es crear un if donde si el scrollY es superior o igual al offsetTop del aboutMeDiv este añade y quita clases para que el div pase a ser fixed. El offsetTop de aboutMeDiv es de 945px por lo que cuando la propiedad de window.scrollY registre que hemos recorrido 945px o más este cambiará las clases.
  })
})
