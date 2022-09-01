// importamos la funcion que vamos a testear
import { router } from '../src/router/router.js';
const logi = [{
  route : "innerHTML"
},
]
describe('router imprime los elementos de la pagina', () => {
  it('debería ser una función', () => {
    expect(typeof router).toBe('function');
  });
});
it("Deberia imprimir los elementos de la pagina", () => {
let resultado = logi(content.innerHTML , logi);
expect(resultado[""].router).toBe("route");
});