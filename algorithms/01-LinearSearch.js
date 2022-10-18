/**
 * Complejidad Temporal -> O(n + 3) => O(n);
 * Complejidad Espacial -> O(n + 4) => O(n);
 * Espacio Auxiliar: Complejidad Espacial - Espacio De entrada -> O(n + 1 - n) => O(1);
 */

function linearSearch(arreglo, clave) { // O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
    if (arreglo[indice] === clave) { 
      return indice;
    }
  }
  return -1; 
} 