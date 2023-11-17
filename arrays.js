let computador = ['mem', 'disco', 'cpu', 'placa mae'];
console.log(computador);
console.log('Tamanho do Array: ', computador.length);

let diversos = ['mem', true, 123, {}, [], 0.99, null];
console.log(diversos);
console.log('Tamanho do Array: ', diversos.length);

computador.push('monitor');
computador.push('teclado');
console.log(computador);

computador[ computador.length ] = 'mouse';
console.log(computador);