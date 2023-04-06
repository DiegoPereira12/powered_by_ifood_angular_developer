/*
Faça um desafio para calcular o valor de uma viagem,

Você tera três variaveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM
- 3 Distância em KM da viagem;

Imprima no console o valor que srá gasto e combustível para realizar esta viagem.
*/

const precoCombustível = 5.36;
const kmPorLitros = 14;
const distanciaEmKm = 79;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustível;

console.log(valorGasto.toFixed(2))