console.log('### Criando obejtos ###')

const diego = {
    nome: 'Diego Pereira',
    idade: 25,

}

console.log(diego.nome);
console.log(diego.idade);
console.log(diego);

diego.altura = 1.80

console.log(diego);


//////////////////
console.log('#### Criando objetos com funções ####')

const pessoa = {
    nome: 'Diego Pereira',
    idade: 25,

    descrever: function () {
        
        console.log('Meu nome é ' + this.nome, 'e  minha idade é ' + this.idade);
    }
};

pessoa.descrever();

//////////
console.log('### Acessando somente os atributos do objeto ####')

console.log(pessoa['nome'])
console.log(pessoa['idade'])