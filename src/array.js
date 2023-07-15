const redeSociais = ['Facebook', 'Instagram', 'Twitter', 'Discord'];

//quando o i é 0: 
//for só será executado enquanto o i for menor que a quantidade de itens nesse array.
//i seria a representação da posição do elemento no array

for(let i = 0; i < redeSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redeSociais[i]}`);
}

//Com o EcmaScript podemos fazer esse laço de outra forma:

redeSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice}Eu tenho esssa rede social: ${nomeDaRedeSocial}`);
})

//_______MAP______//

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome:itemAtual,
        curso: 'Front-End',
    }
    return itemAtual;
})
console.log(alunos2);


//adicionando um elemento ao Array com push.

alunos2. push ({
    nome: 'Tarcinho',
    curso: 'Back-End'
})

const numeros = [1,2,3,4,5,6,7,8,9,10];
const dobroDosNumeros = numeros.map(function(dobro) {
    dobro = {
        numeros: dobro,
        dobro: 2*dobro
    }
    return dobro
})
console.log(dobroDosNumeros);

//Buscar uma palavra em um Array com find.

const paula = alunos2.find(function(item){
    return item.nome == 'Paula'; //vai retornar um boolean;
})

console.log(paula);

// Para encontrar o indice da palavra Paula.

const indexDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'; //vai retornar um boolean;
})

console.log(`Esse é o indice da Palavra Paula: ${indexDaPaula}`);

//quando o find é inválido retorno undefined
//findIndex inválido o retorno é 11

//_________________________________________//
//every: com ele podemos verificar os elementos de um Array, podemos usar para comparar tbm.

const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'Front-End';
})

console.log(todosAlunosSaoDeFrontEnd);

//some ele verifica se há pelo menos um elemento no Array.

const existeAlguemDeBackEnd = alunos2.some(function (item){
    return item.curso === 'Back-End';
})

console.log(existeAlguemDeBackEnd);

//verificar se temos um aluno fullstack que está matriculado no back e no front.
const fullStack = alunos2.some(function (item) {
    return item.curso === 'Front-End' && item.curso === 'Back-End';
})

console.log(fullStack);

//Para filtrar

const AlunosDeBackEnd = alunos2.filter(function(item) {
    return item.curso === "Back-End";
})

console.log(alunos2)
console.log(AlunosDeBackEnd);
