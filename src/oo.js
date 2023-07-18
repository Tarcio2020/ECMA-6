/*function Pokemon (nomeDoPokemon, tipoDoPokemon) {
    this.nome = nomeDoPokemon,
    this.tipo = tipoDoPokemon
*/

    // const pikachu = new Pokemon (pikachu, eletrico);
    class Pokemon {
    ///nome= '';
    ///tipo = '';
    //# recurso é privado....ele só irá ser alterado dentro da classe
    #hp = 100;

        constructor(nomeDoPokemon, tipoDoPokemon, nomeDoAtaque) {
            this.nome = nomeDoPokemon;
            this.tipoDoPokemon = tipoDoPokemon;
          //  this.ataque = nomeDoAtaque;
        }

        atacar(ataque) {
            console.log(`${this.nome} atacou com ${ataque}`)
        }

        recebeuAtaque() {
            this.hp -=10;
        }
    }

    class Pikachu extends Pokemon{
        constructor() {
            super('PIKACHU', 'ELETRICO')
        }
        atacar () {
            console.log(`${this.nome} atacou com choque do trovão`)
        }

    }
    const pikachudoAsh = new Pikachu()
    pikachudoAsh.recebeuAtaque()
    pikachudoAsh.hp = 5000;
    pikachudoAsh.atacar()
    
    
    console.log(pikachudoAsh.hp)


    //const pikachudoAsh = new Pikachu('pikachu', 'eletrico')
    const pikachu = new Pokemon('pikachu', 'eletrico', 'choque');
    //pikachu.atacar('choque do trovão');
    //pikachu.nome = 'pikachu';
    //pikachu.tipo = 'eletrico';
    console.log(pikachu);
    console.log(pikachudoAsh);

    console.log(pikachudoAsh instanceof Pikachu);
    console.log(pikachudoAsh instanceof Pokemon);