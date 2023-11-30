// function imprimir(objeto) {
//   console.log(objeto);
// }

// function somar(a, b) {
//   return a + b;
// }

// // y sempre positivo
// function potencializa(x, y) {
//   if (y == 0) return 1;

//   let acc = 1;
//   for (let i = 0; i < y; i++) {
//     acc = acc * x;
//   }

//   return acc;
// }

// function potencia(num, pot) {
//   return Math.pow(num, pot);
// }

// let pessoa = {
//   nome: "Joao",
//   idade: 80,
// };

// imprimir(pessoa);
// console.log(somar(10, 20));

// console.log(potencia(10, 2));
// console.log(potencializa(10, 1));

// arrow functions
let somar2 = (a, b) => {
  return a + b;
};

let somar3 = (a, b) => a + b;

console.log(somar2(10, 5));

console.log(somar3(15, 25));
