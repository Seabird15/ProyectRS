export default () => {
  const login = `
    <div id="logo"><img src="./img/logotransparente.png" alt="logo-header"></div>
    <h2>Iniciar sesión</h2>
    <h3>¿Has olvidado tu contraseña?</h3>
    <div class = "login">
    <input type="email" placeholder="Ingresa tu correo">
    <input type="password" placeholder="Ingresa tu contraseña">
    
    <button class="button-82-pushable" <a href="#/submit">Conectar</a> role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
  <a href="#/submit">Conectar</a>
  </span>
    </div>
    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = login;
  return divElement;
};
