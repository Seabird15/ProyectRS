import { router } from "./router/router.js";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
