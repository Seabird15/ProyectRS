import { loginRoot } from "../main.js";

export function registerView() {
  const item = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "iPet";
  title.setAttribute("class", "titleLogin");
  root.appendChild(title);

  //CONTENEDOR IMAGEN
  const divImg = document.createElement("div");
  divImg.classList.add("imgLogo");
  root.appendChild(divImg);

  //IMAGEN LOGO
  const logo = document.createElement("img");
  logo.src = "./img/logotransparente.png";
  logo.setAttribute("class", "img");
  logo.setAttribute("id", "logo");
  divImg.appendChild(logo);

  //TITULO CREA AQUI TU CUENTA
  const titleRegister = document.createElement("h2");
  titleRegister.textContent = "¡Crea aquí tu cuenta!";
  titleRegister.setAttribute("class", "h2Register");
  root.appendChild(titleRegister);

  //CREAR FORM INPUTS
  const form = document.createElement("form");
  form.classList.add("form");
  root.appendChild(form);

  //INPUTS REGISTER EMAIL
  const inputRegister = document.createElement("input");
  inputRegister.setAttribute("placeholder", "Ingresa tu correo");
  inputRegister.setAttribute("id", "email");
  inputRegister.setAttribute("name", "email");
  inputRegister.setAttribute("class", "input");
  inputRegister.setAttribute("type", "text");
  form.appendChild(inputRegister);

  //INPUT REGISTER PASS
  const inputRegisterPass = document.createElement("input");
  inputRegisterPass.setAttribute("placeholder", "Ingresa tu contraseña");
  inputRegisterPass.setAttribute("id","password");
  inputRegisterPass.setAttribute("name","password");
  inputRegisterPass.setAttribute("class", "input");
  inputRegisterPass.setAttribute("type", "password");
  form.appendChild(inputRegisterPass);
  
  //INPUT NOMBRE USUARIO
  const inputRegisterUser = document.createElement("input");
  inputRegisterUser.setAttribute("placeholder", "Nombre usuario");
  inputRegisterUser.setAttribute("id","userName");
  inputRegisterUser.setAttribute("name", "userName");
  inputRegisterUser.setAttribute("type", "text");
  inputRegisterUser.setAttribute("class", "input");
  form.appendChild(inputRegisterUser);

  //BUTTON REGISTER
  const btnRegister = document.createElement("button");
  btnRegister.textContent = "Enviar";
  form.appendChild(btnRegister);
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.target)
    );
    console.log(JSON.stringify(data))

  })
}