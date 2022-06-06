const process = require('process');
const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

let operacion = process.argv[2]
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];
let resultado ;
if (operacion === "sumar") {
    resultado = sumar(numeroA,numeroB);
} 
else if(operacion === "restar"){
    resultado = restar(numeroA,numeroB);
} else if(operacion === "multiplicar"){
    resultado = multiplicar(numeroA,numeroB);
} else if(operacion === "dividir"){
    resultado = dividir(numeroA,numeroB);
} 

if(typeof resultado === "undefined"){
    console.log("La operación no es válida");
}else{
    console.log(resultado);
}
;
