const performance = require("perf_hooks");

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let startTime = performance.performance.now();
contar(5);
let endTime = performance.performance.now();
let duracion = endTime - startTime;

let startTime1 = performance.performance.now();
contar(5);
let endTime1 = performance.performance.now();
let duracion1 = endTime1 - startTime1;

console.log(`El algoritmo contar ha durado ${duracion}ms.`);
console.log(`El algoritmo contar ha durado ${duracion1}ms.`);


// Function para automatizar el proceso de una function de medicion de tiempo 

function recordTime(func, value) {
    let startTime = performance.performance.now();
    func(value);

    const duracion = (endTime - startTime);

    return (`EL algoricmo Duro ${duracion}`);
}

console.log(recordTime(contar , 2));
console.log(recordTime(contar , 15));