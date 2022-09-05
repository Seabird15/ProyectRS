import { loginView } from "../views/login.js";
import { registerView } from "../views/register.js";
import { feedView } from "../views/feed.js";
//import register from '../views/register.js';

const content = document.getElementById("root");
// este router imprime segun lo que se selecciona
const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "": {
      return loginView();
      //   return alert("Bienvenidx!");
    }
    case "#/register": {
      return registerView();
    }
    case "#/feed": {
      return feedView();
    }
    default:
      return console.log("error 404");
  }
};

export { router };

