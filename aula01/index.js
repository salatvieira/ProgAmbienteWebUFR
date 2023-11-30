// console.log('Hello Node.js');

// var i = 10;
// i = 'Oi';

// console.log('valor de i: ', i);

// console.log('Tipo de i: ', typeof(i));

// let j = 'Jota';

// console.log(j);

// Diferença entre let e var
// O var funciona de forma global
// O let respeita o escopo a que está inserido

var x = 1;

if (x == 1) {
    var x = 2;
    console.log('x: ', x);
}

console.log('x: ', x);

let y = 1;

if (y == 1) {
    let y = 2;
    console.log('y: ', y);
}

console.log('y: ', y);