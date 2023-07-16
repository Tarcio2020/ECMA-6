"use strict";

var _console, _console2, _console3;
//Rest

function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(somar(10, 20, 20, 120, 85, 10, 78, 10));

//... inumeros argumentos tem que ser sempre o último//
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 20, 120, 85, 10, 78, 10));

//Spread Operator//

var numeros = [1, 2, 3, 4, 5];
(_console = console).log.apply(_console, numeros);
var timesDeFutebolDeSaoPaulo = ['santos', 'palmeiras', 'são paulo', 'corinthians', 'bragantino'];
(_console2 = console).log.apply(_console2, timesDeFutebolDeSaoPaulo);
var timesDeFutebolDoRj = ['flamengo', 'madureira', 'fluminense', 'vasco', 'botafogo'];
(_console3 = console).log.apply(_console3, timesDeFutebolDoRj);
var timesDeFutebol = timesDeFutebolDeSaoPaulo.concat(timesDeFutebolDoRj);
console.log(timesDeFutebol);
var time = [];
time.push.apply(time, timesDeFutebolDeSaoPaulo.concat(timesDeFutebolDoRj));
console.log(time);