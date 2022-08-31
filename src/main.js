import { router } from "./router/router.js";
//import { firebase } from "./firebase/config.js";
//import { firebase } from "./firebase/startfirebase";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
window.addEventListener("load", () => {
  router(window.location.hash);
});
