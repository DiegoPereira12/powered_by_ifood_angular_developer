
/* Conhecendo funcões*/


function teste() {
    console.log('teste');
}

teste();


function sayName(name) {
    console.log('Your name is:' + name);
}

sayName('Diego');


function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)


function incrementarJuros(valor, percentualJuros) {
    const valorDeacrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeacrescimo;
}

console.log(incrementarJuros(100,10));