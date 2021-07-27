// metodo reduce  ; ele vai retornar um unico valor;

let arr = [1,2,3,4,5]

let soma = arr.reduce( function(acumulador, atual){
    return acumulador+atual;
})

console.log(soma);

