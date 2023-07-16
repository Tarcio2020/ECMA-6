//_____Arrow Function______//


const myFunction =() => {
    console.log("diz olá");

}
myFunction()

// Podemos deixar a função mais simples
const myFunction2 =() => "diz olá2";

//Para usar com Objetos temos que usar dessa forma a baixo.
const retornaCarro = () => ({
    carro: "Civicão",
    Ano: '2019'
})


console.log(myFunction2());
console.log(retornaCarro());


const velCarro = {
    valocidadeAtual: 100,
    acelerar: function ()  {
        this.velocidadeAtual += 10;
    },
    frear: function()  {
        this.velocidadeAtual -= 10;
    }

}

carro.acelerar()
carro.frear()
console.log(velCarro.valocidadeAtual)


