import { loginRoot } from "../main.js";

export function loginView() {
  //const item = document.createElement("div");
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
  logo.src = "./img/logoo.jpg";
  logo.setAttribute("class", "img");
  logo.setAttribute("id", "logo");
  divImg.appendChild(logo);
  //TITULO INICIO SESION Y RECUPERAR CONTRASEÑA
  const loginH3 = document.createElement("h3");
  loginH3.textContent = "Iniciar Sesión";
  loginH3.setAttribute("class", "subtituloLogin");
  root.appendChild(loginH3);

  const linkRecuperarPass = document.createElement("a");
  linkRecuperarPass.setAttribute("href", "#");
  linkRecuperarPass.textContent = "¿Has olvidado tu contraseña?";
  linkRecuperarPass.setAttribute("class", "btnRegister");
  root.appendChild(linkRecuperarPass);

  //CREAR FORM INPUTS
  const form = document.createElement("form");
  form.classList.add("form");
  root.appendChild(form);
  //INPUTS LOGIN
  const inputMail = document.createElement("input");
  inputMail.setAttribute("placeholder", "Ingresa tu email");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("class", "input");
  form.appendChild(inputMail);

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("class", "input");
  form.appendChild(inputPassword);
  //BOTONES INPUT
  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("class", "linkSubmit");
  form.appendChild(btnLogin);

  const linkSubmit = document.createElement("a");
  linkSubmit.setAttribute("href", "#/feed");
  linkSubmit.textContent = "Conectar";
  btnLogin.appendChild(linkSubmit);

  //BOTON REGISTRARSE
  const linkRegister = document.createElement("a");
  linkRegister.setAttribute("href", "#/register");
  linkRegister.textContent = "¿Aún no tienes una cuenta? ¡Crea una aqui!";
  linkRegister.setAttribute("class", "btnRegister ");
  form.appendChild(linkRegister);

}