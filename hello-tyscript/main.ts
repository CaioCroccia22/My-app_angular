var minhaVar = 'minha variavel';

function myFunction(x: number, y: number): number {
    return x + y;
}

// Alguns Browsers não suportam ainda toda as funcionalidades do ECMA SCRIPT
// Para isso precisamos de um transpiler
// Ele vai compilar o codigo da ECMA em Javascript puro


// ES 6 ou ES 2015 
let num = 2;
const PI = 3.14;

// Arro function

var numeros = [1,2,3,4];

numeros.map(function(valor){
    return valor * 2;
});

numeros.map(valor => {
    return valor * 2;
})



