/*

Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a ..
escolha da condição de pagamento.

Utiliza os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista no Débito, receber 10% de desconto;
- À vista no dinheiro ou no Pix, recebr 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço norma de etiqueta mais juros de 10%;

*/

const precoEiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1) {
    console.log(precoEiqueta - (precoEiqueta * 0.1));

} else if (formaDePagamento === 2) {
    console.log(precoEiqueta - (precoEiqueta * 0.15));

} else if (formaDePagamento === 3) {
    console.log(precoEiqueta);

} else {
    console.log(precoEiqueta + (precoEiqueta * 0.1));
}