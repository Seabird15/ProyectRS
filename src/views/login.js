// export default () => {
//   const login = `
//     <div id="logo"><img src="./img/logoo.jpg" alt="logo-header"></div>
//     <h1>Iniciar sesión</h1>
//     <div class = "login">
//     <input type="email" placeholder="Ingresa tu correo">
//     <input type="password" placeholder="Ingresa tu contraseña">
//     <button id ="submit"> <a href="#/submit">Conectar</a></li></button>
//     <button id ="register"> <a href="#/register">Registrarse</a></li></button>
//     </div>
//     `;

//   const divElement = document.createElement("div");
//   divElement.innerHTML = login;
//   return divElement;
// };
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

  //link de github
  const gitHub = document.createElement("div");
  gitHub.setAttribute("class", "git");
  root.appendChild(gitHub);

  const linkGit1 = document.createElement("i");
  linkGit1.setAttribute(
    "href",
    "https://github.com/Seabird15/SCL021-social-network"
  );
  linkGit1.setAttribute("target", "_blank");
  gitHub.appendChild(linkGit1);

  const iGit1 = document.createElement("i");
  iGit1.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit1.appendChild(iGit1);

  const linkGit2 = document.createElement("i");
  linkGit2.setAttribute(
    "href",
    "github.com/Nicobustosgonzalez/SCL021-social-network"
  );
  linkGit2.setAttribute("target", "_blank");
  gitHub.appendChild(linkGit2);

  const iGit2 = document.createElement("i");
  iGit2.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit1.appendChild(iGit2);

  const linkGit3 = document.createElement("i");
  linkGit3.setAttribute("href", "github.com/LissetteQ/SCL021-social-network");
  linkGit3.setAttribute("target", "_blank");
  gitHub.appendChild(linkGit3);

  const iGit3 = document.createElement("i");
  iGit3.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit3.appendChild(iGit3);
}
