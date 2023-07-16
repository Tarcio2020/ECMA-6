"use strict";

//_____Arrow Function______//

var myFunction = function myFunction() {
  console.log("diz olá");
};
myFunction();

// Podemos deixar a função mais simples
var myFunction2 = function myFunction2() {
  return "diz olá2";
};

//Para usar com Objetos temos que usar dessa forma a baixo.
var retornaCarro = function retornaCarro() {
  return {
    carro: "Civicão",
    Ano: '2019'
  };
};
console.log(myFunction2());
console.log(retornaCarro());
var velCarro = {
  valocidadeAtual: 100,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(velCarro.valocidadeAtual);