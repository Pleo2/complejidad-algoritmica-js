/**
  Complejidad Temporal -> O(n + 3) => O(n);
  Complejidad Espacial -> O(1);
  Espacio Auxiliar -> O(1);
*/

function factorial(numero) { // O(1)
  let resultado = 1; // O(1)

  for (let i = 2; i <= numero; i += 1) { // O(1)
    resultado *= i; 
  }

  return resultado; 
}
