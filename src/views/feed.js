import { loginRoot } from "../main.js";

export function feedView() {
  //IMAGEN USUARIO
  const profileImg = document.createElement("img");
  profileImg.setAttribute("class", "profileImg");
  profileImg.src = "./img/profile-user.png";
  root.appendChild(profileImg);

    //BUSCADOR DE AMIGOS
    const Buscador = document.createElement("input");
    Buscador.setAttribute("class","Buscador");
    Buscador.setAttribute("type", "search")
    Buscador.setAttribute("style", "margin-left:20%")
  root.appendChild(Buscador);
    
  //CAJA DE ESTADO Y LOGO
  const containFeed = document.createElement("div");
  containFeed.setAttribute("class", "containFeed");
  root.appendChild(containFeed);

  //logo de aplicacion
  const logoFeed = document.createElement("img");
  logoFeed.src = "./img/logotransparente.png";
  logoFeed.setAttribute("class", "logoFeed");
  containFeed.appendChild(logoFeed);

  //caja de publicacion
  const inputFeedState = document.createElement("input");
  inputFeedState.setAttribute("class", "inputFeedState");
  inputFeedState.setAttribute("placeholder", "¿En qué estas pensando?");
  inputFeedState.setAttribute("type", "text");
  containFeed.appendChild(inputFeedState);

//input para publicar imagenes
  const btnStateImg = document.createElement("input");
  btnStateImg.setAttribute("type", "file");
  btnStateImg.setAttribute("class", "fileFeed");
  btnStateImg.setAttribute("accept", "image/*");
  root.appendChild(btnStateImg);
  const btnStateFeed = document.createElement("button");
  btnStateFeed.textContent = "Publicar";
  root.appendChild(btnStateFeed);
}