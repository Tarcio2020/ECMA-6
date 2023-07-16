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


//___________________________________//

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

let carrosDasMeninas = [];
carrosDasMeninas.push(carroDaAna, carroDaJulia);
console.log(carrosDasMeninas);

//________Desestruturação________//
// acessar itens em arrays e objetos
//acessar apenas o motor do carro da Ana

//const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna)
console.log(motorDoCarroDaJulia)


const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)


