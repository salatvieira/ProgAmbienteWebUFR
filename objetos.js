let dados = {
    nome: 'Salathiel',
    telefone: '45 9999-0000',
    idade: 30,
    cidade: 'Iguaçu',
};

dados.cpf = '123456789-11';

console.log(dados);
console.log(dados.nome);

let dados2 = {};

dados2.nome = 'Salathiel';
dados2.telefone = '45 9999-0000';
dados2.idade = 30;
dados2.cidade = 'Iguaçu';
dados2.cpf = '123456789-11';
dados2.filhos1 = ['Josemar', 'Josefa'];
dados2.filhos2 = [
    { nome: 'Adao', idade: 16 },
    { nome: 'Eva', idade: 14 }
];

console.log(dados2);
console.log('Filho 1: ', dados2.filhos2[0].nome);
console.log('Filho 2: ', dados2.filhos1[1]);

for (let attr in dados) {
    console.log( `attr: ${attr}` );
}

console.log('dados["nome"]', dados['nome']);

let attr = 'nome';
dados[attr] = 'Igor';
console.log(dados[attr]);