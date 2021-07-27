

const arr = [1, 5,10,"ola", true]

let soNumeros = arr.every(function(elementos){

    console.log(elementos)
    return true
})

const selecao= arr.filter(function(elementos){
    return typeof elementos==="string"
})

console.log(selecao);
