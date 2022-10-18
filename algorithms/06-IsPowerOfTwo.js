/**
  Complejidad Temporal -> O(n + 7) => O(n);
  Complejidad Espacial -> O(3) => O(1);
  Espacio Auxiliar -> O(3 - 1) => O(1);
*/

function isPowerOfTwo(n) { // O(1)
  if (n < 1) { // O(1)
    return false;
  }

  let numeroDividido = n; // O(1)
  while (numeroDividido !== 1) { 
    if (numeroDividido % 2 !== 0) { 
      return false; 
    }
    numeroDividido = numeroDividido / 2; 
  }

  return true;
}
