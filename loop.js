let v = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let i = 0;

console.log('Usando o WHILE');
i = 0;
while(i < v.length) {
    console.log(`v[${i}] = `, v[i]);
    i++;
}
console.log();
console.log('Usando o FOR');
for (i = 0; i < v.length; i++) {
      console.log(`v[${i}] = `, v[i]);
}

console.log();
console.log('Usando o DO WHILE');
i = 0;
do {
    console.log(`v[${i}] = `, v[i]);

} while(++i < v.length);

console.log();
// Pega somente o valor sem usar o índice
console.log('Usando o FOR OF');
for(let valor of v) {
    console.log(`v[] = `, valor);
}

console.log();
console.log('Usando o FOR IN');
for(let i in v) {
    console.log(`v[${i}] = `, v[i]);
}

console.log();
console.log('Usando o FOREACH');
v.forEach(
    (v, i) => {
    console.log(`v[${i}] = `, v);
});