/**
  Complejidad Temporal -> O(n^2);
  Complejidad Espacial -> O( n + 4 ) => O(n);
  Espacio Auxiliar -> O(n + 4 - n) => O(1);
*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) { 
      
      if (arr[j] > arr[j + 1]) {
        let temporal = arr[j]; 
        
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
  }
  return arreglo;
}