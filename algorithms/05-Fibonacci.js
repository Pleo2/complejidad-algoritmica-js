/**
  Complejidad Temporal -> O(n + 11) => O(n);
  Complejidad Espacial -> O(8) => O(1);
  Espacio Auxiliar -> O(8 - 1) => O(1);
*/

function fibonacci(numero) { // O(1)
  const secuenciaFibonacci = [1]; // O(1)

  let valorPrevio = 0; // O(1)
  let valorActual = 1; // O(1)

  if (numero === 1) { 
    return secuenciaFibonacci; 
  }

  let i = numero - 1; // O(1)

  while (i) { 
    valorActual += valorPrevio; // O(1)
    valorPrevio = valorActual - valorPrevio; // O(1)
    secuenciaFibonacci.push(valorActual); // O(1)
    i -= 1; 
  }

  return secuenciaFibonacci;
}
