let dato = 10;                      // Número del que queremos calcular el factorial
let result = 1;                     //inicio de la factorial
for(let i = dato; i>0; i--){
    result *= i;
} 
console.log('el factorial de ' + dato + ' es ' + result);