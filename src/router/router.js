import login from "../views/login.js";
let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      return console.log("Holaa");
    case "#/Login": {
      return content.appendChild(login());
    }
    default:
      return console.log("error 404");
  }
};

export { router };
