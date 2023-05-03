/*
Crie um classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
Crie um método que dado a quantidade de Km e o preço do combustível nos de o valor ...
gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMediaPorKm;

    constructor(marca, cor, gastoMediaPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMediaPorKm = gastoMediaPorKm;
    }

}

const clio = new Carro('Renault','Vermelho', 1/14 )

console.log(clio)