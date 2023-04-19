
/*
const numero = 10;

const numeroPar = numero  % 9;

console.log(numeroPar);
*/

const numero = 4;

const isnumeroPar = (numero  % 2) === 0;
console.log(isnumeroPar);

if (isnumeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}