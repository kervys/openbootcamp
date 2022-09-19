// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let alt = 166

// - Una variable que contenga tu altura en metros (número de coma flotante)
let alt_m = alt / 100
console.log(alt_m)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kil= 66.30

// - Una variable que contenga tu altura en metros redondeada hacia arriba
let alt_m_r = Math.ceil(alt_m)
console.log(alt_m_r)

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kil_r = parseInt(peso_kil)
console.log(peso_kil_r)

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual 
// al máximo valor que se puede obtener en Javascript

let max_val = Number.MAX_VALUE;
let res_max = max_val + 1;
console.log(max_val + 1)

if (max_val === res_max) {
    console.log ('Si es igual el valor')
} else { 
    console.log('No es igual el valor')
}