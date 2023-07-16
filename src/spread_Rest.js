//Rest

function somar () {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma
}

console.log(somar(10, 20, 20, 120, 85, 10,78, 10));

//... inumeros argumentos tem que ser sempre o último//
function somarComRest (...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total+=numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 20, 120, 85, 10,78, 10));

//Spread Operator//

const numeros = [1,2,3,4,5]
console.log(...numeros)


const timesDeFutebolDeSaoPaulo = ['santos', 'palmeiras', 'são paulo', 'corinthians', 'bragantino']
console.log(...timesDeFutebolDeSaoPaulo)

const timesDeFutebolDoRj = ['flamengo', 'madureira', 'fluminense', 'vasco', 'botafogo']
console.log(...timesDeFutebolDoRj)

const timesDeFutebol = timesDeFutebolDeSaoPaulo.concat(timesDeFutebolDoRj);
console.log(timesDeFutebol)



let time = []

time.push(...timesDeFutebolDeSaoPaulo,...timesDeFutebolDoRj)

console.log(time)
