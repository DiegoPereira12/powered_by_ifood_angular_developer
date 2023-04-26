class Pesssoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade

    }

    descrever() {
        console.log('Meu nome é ' + this.nome, ' minha idade é ' + this.idade, 'e minha data de nascimento é ' + this.anoDeNascimento);
    }

}

const diego = new Pesssoa('Diego', 34);
const fran = new Pesssoa('Franciny', 33);

diego.descrever();
fran.descrever();