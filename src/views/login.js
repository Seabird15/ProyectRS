import { loginRoot } from "../main.js";

export function loginView() {
  console.log("se ejecuta loginView en Login.js");
  const item = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "iPet";
  title.setAttribute("class", "titleLogin");
  item.appendChild(title);

  //CONTENEDOR IMAGEN
  const divImg = document.createElement("div");
  divImg.classList.add("imgLogo");
  item.appendChild(divImg);
  //IMAGEN LOGO
  const logo = document.createElement("img");
  logo.src = "./img/logotransparente.png";
  logo.setAttribute("class", "img");
  logo.setAttribute("id", "logo");
  divImg.appendChild(logo);

  //TITULO INICIO SESION Y RECUPERAR CONTRASEÑA
  const loginH3 = document.createElement("h3");
  loginH3.textContent = "Iniciar Sesión";
  loginH3.setAttribute("class", "subtituloLogin");
  item.appendChild(loginH3);

  const linkRecuperarPass = document.createElement("a");
  linkRecuperarPass.setAttribute("href", "#");
  linkRecuperarPass.textContent = "¿Has olvidado tu contraseña?";
  linkRecuperarPass.setAttribute("class", "btnRegister");
  item.appendChild(linkRecuperarPass);

  //CREAR FORM INPUTS
  const form = document.createElement("form");
  form.classList.add("form");
  item.appendChild(form);

  //INPUTS LOGIN
  const inputMail = document.createElement("input");
  inputMail.setAttribute("placeholder", "Ingresa tu email");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("class", "input");
  item.appendChild(inputMail);

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("class", "input");
  form.appendChild(inputPassword);

  //BOTONES INPUT
  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("class", "linkSubmit");
  btnLogin.setAttribute("type", "submit");
  btnLogin.innerText = "entrar";
  item.appendChild(btnLogin);

  //BOTON REGISTRARSE
  const linkRegister = document.createElement("a");
  linkRegister.setAttribute("href", "#/register");
  linkRegister.textContent = "¿Aún no tienes una cuenta? ¡Crea una aqui!";
  linkRegister.setAttribute("class", "btnRegister ");
  item.appendChild(linkRegister);

  //contenedor github //No funciona/ iconos estan en el aire sin contenedor
  const gitHub = document.createElement("div");
  gitHub.setAttribute("class", "gitContainer");
  item.appendChild(gitHub);

  //Git Dani//
  const linkGit1 = document.createElement("a");
  linkGit1.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit1.setAttribute(
    "href",
    "https://github.com/Seabird15/SCL021-social-network"
  );
  linkGit1.setAttribute("target", "_blank");
  item.appendChild(linkGit1);

  //Git Liss//
  const linkGit2 = document.createElement("a");
  linkGit2.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit2.setAttribute(
    "href",
    "https://github.com/LissetteQ/SCL021-social-network"
  );
  linkGit2.setAttribute("target", "_blank");
  item.appendChild(linkGit2);

  //Git Nico//
  const linkGit3 = document.createElement("a");
  linkGit3.setAttribute("class", "fa-brands fa-github fa-2x");
  linkGit3.setAttribute(
    "href",
    "https://github.com/Nicobustosgonzalez/SCL021-social-network"
  );
  linkGit3.setAttribute("target", "_blank");
  item.appendChild(linkGit3);

  form.addEventListener("submit", () => {
    console.log("submit");
  });

  return item;
}
