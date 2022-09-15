import { loginRoot } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { auth } from "../firebase/startfirebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { db } from "../firebase/startfirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";
import { CreatePost } from "../services/databaseservice.js";

export function feedView() {
  const root = document.createElement("div");
  root.setAttribute ("id", "containerFeed")

  const divNav = document.createElement("div")
  divNav.setAttribute("class", "divNav")
  root.appendChild(divNav)

  //IMGLOGOFEED
  const logoFeed = document.createElement("img")
  logoFeed.src ="./img/logotransparente.png"
  logoFeed.setAttribute("id","logoFeed")
  divNav.appendChild(logoFeed)
  //INPUT SEARCH 
  const inputSearchFeed = document.createElement("input")
  inputSearchFeed.setAttribute("class","inputSearch")
  inputSearchFeed.setAttribute("placeholder", "Busca amigos")
  divNav.appendChild(inputSearchFeed)
  //BTNS NAV 
  const btnUserNav = document.createElement("button")
  btnUserNav.setAttribute("class", "btnNav")
  btnUserNav.textContent ="user"
  divNav.appendChild(btnUserNav)

  const btnLogOutNav = document.createElement("button")
  btnLogOutNav.setAttribute("class", "btnNav")
  btnLogOutNav.setAttribute("id", "btnLogOut")
  btnLogOutNav.setAttribute("type", "submit")
  btnLogOutNav.textContent ="LogOut"
  btnLogOutNav.addEventListener("click", ()=>{
    signOut(auth).then(()=> {
      //alerta cierre sesion
      alert("Haz cerrado sesion")
    })
  })
  divNav.appendChild(btnLogOutNav)

  //caja de publicacion
  const inputFeedState = document.createElement("input")
  inputFeedState.setAttribute("class","inputFeedState")
  inputFeedState.setAttribute("placeholder","¿Qué estas pensando?")
  inputFeedState.setAttribute("type","text")
  root.appendChild (inputFeedState)
  //btnPublicarFeed 
  const btnStateFeed = document.createElement("button")
  btnStateFeed.textContent ="Publicar"
  btnStateFeed.addEventListener("click", ()=>{CreatePost("Hola")});
  root.appendChild(btnStateFeed)


 
  return root;
}
