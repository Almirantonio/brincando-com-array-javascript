
let numeros = [ 1, 23, 10,40,50,60]

console.log(numeros);

let novo = numeros.shift();// retirar o primeiro indice do array

console.log(numeros);
console.log(novo);

let altera = numeros.unshift(1000); // coloca um elemento no inicio do array

console.log(numeros);

let remover = numeros.slice(0,4); // remove do ínicio ao fim especificado;

console.log(numeros);
console.log(remover);

let alterarArr = numeros.splice(0,5,"abacaxi");

console.log(numeros);
console.log(alterarArr);




