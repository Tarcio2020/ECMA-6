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