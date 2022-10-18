function contar(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
contar(20);

function repetir(arreglo) {
  return arreglo
}

console.log(repetir(20));

function convertirAString(arreglo) {
  return arreglo.map((elemento) => elemento.toString());
}

console.log(convertirAString([20, 20 , 20, 20 ]));

function dosDimensiones(valor) {
  let x = [valor];
  for (let i = 0; i < valor; i++) {
    x[i] = new Array(valor).fill(0);
  }
  return x;
}

console.log(dosDimensiones(5));


