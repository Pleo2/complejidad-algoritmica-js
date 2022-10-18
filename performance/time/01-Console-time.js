
function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time("Duracion-contar");
contar(5);
console.timeEnd("Duracion-contar");

console.time("Duracion-contar");
contar(2);
console.timeEnd("Duracion-contar");

// Function para agilizar el proceso

function recordTime(func, value) {
    console.time("Duracion");
    func(value);
    console.timeEnd("Duracion");
}

recordTime(contar, 10);
recordTime(contar, 11);
