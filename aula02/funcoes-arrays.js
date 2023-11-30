const nomes = ["Joao", "Maria", "Marcos", "Jose"];

// console.log("Usando o forEach");
// nomes.forEach((nome) => console.log(nome));

// nomes.forEach((nome, idx) => console.log(`Nome[ ${idx} ] = ${nome}`));

// console.log("\nUsando o indexOf");
// let i = nomes.indexOf("Marcos");
// let ii = nomes.indexOf("Marcos1");
// console.log("Index de 'Marcos': ", i);
// console.log("Index de 'Marcos1': ", ii); // Se o item não existe, retorna -1

// console.log("\nUsando MAP");
// v = nomes.map((nome) => "Oi " + nome); // Para cada item do array execute a função
// console.log(v);

// Exercicio
console.log("\n\n");
let pessoas = [
  { nome: "Mauro", idade: 20 },
  { nome: "Fernanda", idade: 30 },
  { nome: "Valda", idade: 54 },
];

let nArray = pessoas.map((pessoa) => `${pessoa.nome} tem ${pessoa.idade} anos`);
console.log(nArray);

function mapPessoasString(pessoas) {
  let v = [];
  for (let pessoa of pessoas) {
    let s = `${pessoa.nome} tem ${pessoa.idade} anos`;
    v.push(s);
  }
  return v;
}

console.log("mapPessoasString: ", mapPessoasString(pessoas));

console.log("\nUsando filter =>>");
let nomesComM = nomes.filter(
  (nome) => nome.length > 0 && nome[0].toLowerCase() == "m"
);
console.log("nomesComM: ", nomesComM);

console.log();
let maiores30Anos = pessoas.filter((pessoa) => pessoa.idade >= 30);
console.log("Maiores de 30 Anos: ", maiores30Anos);

let NomeMaiores30Anos = pessoas
  .filter((pessoa) => pessoa.idade >= 30)
  .map((pessoa) => pessoa.nome.toUpperCase());
console.log("Nomes das Pessoas Maiores de 30 Anos: ", NomeMaiores30Anos);

console.log();
pessoas
  .filter((pessoa) => pessoa.idade >= 30)
  .map((pessoa) => pessoa.nome.toUpperCase())
  .forEach((nome) => console.log(nome));
