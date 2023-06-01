/*
Desafio
Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de entrega de um restaurante. 
A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

EntradaDesafio
Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de entrega de um restaurante. 
A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

Entrada

A entrada deverá receber os valores abaixo:

nomeRestaurante (string): o nome do restaurante desejado.
tempoEstimadoEntrega (number): o tempo estimado de entrega em minutos.

Saída
Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado de entrega do restaurante. 
Por exemplo, para o restaurante Bar do Zinho com o tempo estimado de entrega sendo 20, imprima:

*/

const nomeRestaurante = gets();
const tempoEstimadoEntrega = parseInt(gets());

const mensagem = `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`

print(mensagem)