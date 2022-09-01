export default () => {
    const register = `
    <div id="logo"><img src="./img/logotransparente.png" alt="logo-header"></div>
    <h2>¡Crea aquí tu cuenta!</h2>
    &nbsp;
        <div class = "registerUser">
        <input type="email" placeholder="Ingresa tu correo">
        &nbsp;
        <input type="password" placeholder="Ingresa tu contraseña">
        &nbsp;
        <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">
        Enviar
        </span>
        </div>
    
    `;
  
    const divElement = document.createElement("div");
    divElement.innerHTML = register;
    return divElement;
  };