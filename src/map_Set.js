//____________Map____________//
//map é uma estrutura de dicionario...um conjuntos de valores

//recuperamos todos os valores
let meuMap = new Map();
meuMap.set('nome', 'Tarcio')
meuMap.set('stack', 'html, css, js')


console.log(meuMap)

// recuperamos um valor de uma determinada chave
const nome = meuMap.get('nome')
console.log(nome)

// recuperamos a quantidade de items dentro de um map usando o size
console.log(meuMap.size)

//verificar se determinada chave existe dentro de uma map.
console.log(meuMap.has('nome'))
console.log(meuMap.has('sobrenome'))

//Limpeza do map
//meuMap.clear()
console.log(meuMap.size)
console.log(meuMap)

//para recuperar chaves do map.
for (let chave of meuMap.keys()) {
    console.log(chave);
}

//para recuperar chaves do map.
for (let valor of meuMap.values()) {
    console.log(valor);
}

//para recuperar todo o map
for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

//para obter o map de uma maneira mais formatada
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}, ${valor}`);
}

//para deletar algo do map
meuMap.delete('stack')
console.log(meuMap);

const cpfs = new Set()

cpfs.add('156554556622');
cpfs.add('874848181818');
cpfs.add('878748828222');

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

//set para remover valore duplicados
const array = ['Tarcio', 'Teles','João', 'Mario', 'Genivaldo', 'Tarcio', 'Teles', 'João', 'Genivaldo']
const arrayComSet = new Set([...array])
console.log(arrayComSet)

//converter Ser em Array
const arraySemItensDuplicados = [...arrayComSet]
console.log(arrayComSet)
console.log(arraySemItensDuplicados)







