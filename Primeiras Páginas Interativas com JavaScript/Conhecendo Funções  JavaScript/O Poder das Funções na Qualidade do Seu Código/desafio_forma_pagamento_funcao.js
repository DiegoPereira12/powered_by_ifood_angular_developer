function incrementarJuros(valor, percentualJuros) {
    const valorDeacrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeacrescimo;
}

console.log(incrementarJuros(100, 10));
