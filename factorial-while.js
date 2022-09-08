let dato = 10
let fact = dato;
let result = 1;

while (dato != 0) {
result *= dato;
dato -= 1;
}

console.log('el factorial de ' + fact + ' es ' + result);