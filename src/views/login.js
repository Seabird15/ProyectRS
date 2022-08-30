export default () => {
  const login = `
    <div id="logo"><img src="./img/logoo.jpg" alt="logo-header"></div>
    <h1>Iniciar sesión</h1>
    <div class = "login">
    <input type="email" placeholder="Ingresa tu correo">
    <input type="password" placeholder="Ingresa tu contraseña">
    </div>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = login;
  return divElement;
};
