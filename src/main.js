//IMPORTAMOS LA FUNCION LOGINVIEW DESDE LOGIN.JS
import { loginView } from "./views/login.js";
import { router } from "./router/router.js";
//LLAMAMOS A LA FUNCION PARA QUE MUESTRE EL LOGIN
loginView();
let root = document.getElementById("root");
//ENVOLVEMOS EN UNA FUNCION FLECHA LA VAR ROOT
let loginRoot = () => {
  let root = document.getElementById("root");
};
//EXPORTAR VAR LOGINROOT
export { loginRoot };

//EVENTO HASH
window.addEventListener("hashchange", () => {
  //console.log("yo soy el hash")
  const view = router(window.location.hash);
  root.appendChild(view)
});
window.addEventListener("load", () => {
  //console.log("yo soy el load")
  const view = router(window.location.hash);
  root.appendChild(view)
});
