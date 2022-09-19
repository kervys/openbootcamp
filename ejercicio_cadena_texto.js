//cadena de texto con tu nombre
let nombre = "Kervys";

//Cadena de texto con apellido
let apellido = "Arguello";

//cadena de texto que se llame "estudiante" concatenando tu nombre y tu Apellido con un espacio entre medias

let estudiante = `${nombre} ${apellido}`;

console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toLocaleUpperCase()
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let caracteres_estudiante = estudiante.length
console.log(caracteres_estudiante)

//Una variable que contenga la primera letra del Nombre

let primera_letra_N = nombre.charAt(0);
console.log(primera_letra_N)

//Otra variable que contenga la última letra del Apellido

let ultima_letra_A = apellido[apellido.length-1];
console.log(ultima_letra_A);

//Una cadena de texto que elimine los espacios de la variable "estudiante"

let sinespacios = estudiante.replace(/\s+/g, '') 
console.log(sinespacios)

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let varBoo = estudiante.includes(nombre)
console.log(varBoo)