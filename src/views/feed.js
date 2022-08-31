export default () => {
  const feed = `
     
      <h1>wall</h1>
      <p>ESTE ES EL MURO</p>
  
  `;

  const divElement = document.createElement("div");
  divElement.innerHTML = feed;
  return divElement;
};
