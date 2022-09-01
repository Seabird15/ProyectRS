export default () => {
  const feed = `
     
      <p>ESTE ES EL MURO</p>
  
  `;

  const divElement = document.createElement("div");
  divElement.innerHTML = feed;
  return divElement;
};
