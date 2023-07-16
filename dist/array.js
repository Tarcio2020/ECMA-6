"use strict";

var redeSociais = ['Facebook', 'Instagram', 'Twitter', 'Discord'];

//quando o i é 0: 
//for só será executado enquanto o i for menor que a quantidade de itens nesse array.
//i seria a representação da posição do elemento no array

for (var i = 0; i < redeSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redeSociais[i]));
}

//Com o EcmaScript podemos fazer esse laço de outra forma:

redeSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, "Eu tenho esssa rede social: ").concat(nomeDaRedeSocial));
});

//_______MAP______//

var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Front-End'
  };
  return itemAtual;
});
console.log(alunos2);

//adicionando um elemento ao Array com push.

alunos2.push({
  nome: 'Tarcinho',
  curso: 'Back-End'
});
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var dobroDosNumeros = numeros.map(function (dobro) {
  dobro = {
    numeros: dobro,
    dobro: 2 * dobro
  };
  return dobro;
});
console.log(dobroDosNumeros);

//Buscar uma palavra em um Array com find.

var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //vai retornar um boolean;
});

console.log(paula);

// Para encontrar o indice da palavra Paula.

var indexDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //vai retornar um boolean;
});

console.log("Esse \xE9 o indice da Palavra Paula: ".concat(indexDaPaula));

//quando o find é inválido retorno undefined
//findIndex inválido o retorno é 11

//_________________________________________//
//every: com ele podemos verificar os elementos de um Array, podemos usar para comparar tbm.

var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosAlunosSaoDeFrontEnd);

//some ele verifica se há pelo menos um elemento no Array.

var existeAlguemDeBackEnd = alunos2.some(function (item) {
  return item.curso === 'Back-End';
});
console.log(existeAlguemDeBackEnd);

//verificar se temos um aluno fullstack que está matriculado no back e no front.
var fullStack = alunos2.some(function (item) {
  return item.curso === 'Front-End' && item.curso === 'Back-End';
});
console.log(fullStack);

//Para filtrar
//Se vc colocar apenas um = não irá realizar o filtro direito.
var AlunosDeBackEnd = alunos2.filter(function (item) {
  return item.curso === "Back-End";
});
console.log(alunos2);
console.log(AlunosDeBackEnd);

//__________usando Arrow Function_____________//

var alunosDoFront = function alunosDoFront(alunos) {
  return alunos.curso === "Front-End";
};

//_________________________________________________//
var AlunosDefrontEnd = alunos2.filter(function (item) {
  return item.curso === "Front-End";
});
console.log(AlunosDefrontEnd);
alunos2.push({
  nome: 'Eminen',
  curso: 'C#'
});
var AlunosDeBackEnddd = alunos2.filter(function (item) {
  return item.curso != "Back-End";
});
console.log(AlunosDeBackEnddd);

//______________++++Reduce++++_______________//
// Podemos usar esse exemplo abaixo com um carrinho de compras.
var numeross = [10, 20, 50, 100, 200, 300, 1, 2, 3];
var soma = numeross.reduce(function (acumulador, itemAtual) {
  return acumulador += itemAtual;
}, 0);
console.log(soma);

//Usando o for para somar

var somaComFor = 0;
for (var _i = 0; _i < numeross.length; _i++) {
  somaComFor += numeross[_i];
}
console.log(somaComFor);

//Reduce com Strings

var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, ' ');
console.log(nomeDosAlunos);