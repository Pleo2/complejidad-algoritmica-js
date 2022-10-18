
Clases de Big-O

|   clase   | Cresimiento | +Comunes | complejidad |        Big-O time        |                    Big-O space                    |
| :-------: | :---------: | :------: | :---------: | :----------------------: | :-----------------------------------------------: |
|   O(1)    |  Constante  |    ✔️    |     ⬜      | let bar = "test"; if(){} |             let bar = "test", for(){}             |
| O (log n) | Logaritmico |          |     🟩      |                          |                                                   |
|   O (n)   |   Lineal    |    ✔️    |     🟨      |    for(){}, While(){}    |          let arr = [1, 2, 3, 4 , ... n]           |
|  O (n^2)  | Cuadratico  |    ✔️    |     🟧      |     for(){ for(){} }     | let arrDimensional = [[1, 2], [3, 4, ... n], [5]] |
|  O (2^n)  | Exponencial |    ✔️    |     🟥      |                          |                                                   |
|  O (n!)   |  Factorial  |          |     ⬛      |                          |                                                   |

La notacion Big-O Siempre se enfocara en el cresimiento no en la Duracion o el espacio en si

Cuando un algoritmo esta uno dentro de otro estos se multiplican

- for() {for() {}} => O(n * n) === O(n^2);

Estos mismos estan de forma idependiente estos se suman

- for(let i;){}, for(let j;){} => O(n + n) === O(2n) => O(n);
