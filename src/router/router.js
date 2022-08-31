import login from "../views/login.js";
import feed from "../views/feed.js";
let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      return console.log("Holaa");
    case "#/Login": {
      return content.appendChild(login());
    }
    case "#/submit": {
      return content.appendChild(feed());
    }
    default:
      return console.log("error 404");
  }
};

export { router };
