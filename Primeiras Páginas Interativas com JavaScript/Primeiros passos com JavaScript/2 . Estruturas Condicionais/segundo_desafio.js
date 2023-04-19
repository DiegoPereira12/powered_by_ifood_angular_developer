/*
Faça um desafio para calcular o valor de uma viagem,

Você tera cinco variaveis. Sendo elas:
- 1 Preço do etanol;
- 2 Preço da gasolina;
- 3 O tipo de combustível que está no seu carro;
- 4 Gasto médio de combustível do carro por KM;
- 5 Distância em KM da viagem;

Imprima no console o valor que srá gasto e combustível para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 5.36;
const kmPorLitros = 14;
const distanciaEmKm = 79;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
}


