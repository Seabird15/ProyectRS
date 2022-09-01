import login from "../views/login.js";
import feed from "../views/feed.js";
import register from "../views/register.js";

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      return console.log("Holaa");
    case "#/Login": {
      return content.appendChild(login());
    }
    case "#/register": {
      return content.appendChild(register());
    }
      case "#/submit": {
      return content.appendChild(feed());
    }
    default:
      return console.log("error 404");
  }
};

export { router };
