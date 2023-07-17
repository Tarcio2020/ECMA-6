//____async === Programação Assincrona_______//

//Em uma liguagem de back-end eu executaria todas as tarefas de uma vez só

// Tarefas:
//  A  B  C  D

//Com o Javascript ele quebraria para executar em paralelo

//Tarefa:
// A  B
// C  D


function funcaoMuitoPesada () {
    let execucoes = 0;
    for (i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes
}


const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);  
      }catch(e) {
        reject('deu erro')
      }
})



const promiseComParemetros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário ${login, senha}`)
        }, 3000)
    })
}





console.log('inicio');
//console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log('fim.');

// Para fazer com que essa dunção espere a Promise precisamos colocar o >>>  async e await <<<<
async function execucaoPrincipal() {
    console.log("inicio");
 //   await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
   
    promiseComParemetros('Tarcio@gmail', 142552155).then(resultado => {
        console.log(resultado);
    })
 
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e)
    }

    console.log("fim");
}