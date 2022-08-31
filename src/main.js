import { router } from "./router/router.js";
//import { firebase } from "./firebase/config.js";
//import { firebase } from "./firebase/startfirebase";
//import {createUser} from "./services/authservice.js";

//createUser()

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
window.addEventListener("load", () => {
  router(window.location.hash);
});
