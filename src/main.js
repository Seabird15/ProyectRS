//IMPORTAMOS LA FUNCION LOGINVIEW DESDE LOGIN.JS
import { loginView } from "./views/login.js";
import { router } from "./router/router.js";
//LLAMAMOS A LA FUNCION PARA QUE MUESTRE EL LOGIN
loginView();
//ENVOLVEMOS EN UNA FUNCION FLECHA LA VAR ROOT
let loginRoot = () => {
  let root = document.getElementById("root");
};
//EXPORTAR VAR LOGINROOT
export { loginRoot };

//EVENTO HASH
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
window.addEventListener("load", () => {
  router(window.location.hash);
});
