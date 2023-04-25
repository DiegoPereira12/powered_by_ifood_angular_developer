
class Pesssoa {

    nome;
    idade;

    descrever() {
        console.log('Meu nome é ' + this.nome, 'e  minha idade é ' + this.idade);
    }

}

const diego = new Pesssoa();
diego.nome = 'Diego Pereira';
diego.idade = 33;

const fran = new Pesssoa();
fran.nome = 'Franciny Luize';
fran.idade = 32;

console.log(diego);
console.log(fran);

diego.descrever();
fran.descrever();