// 1. Usando un bucle, rellena un array con los números del 1 al 10.
const numeros = []
for (let i = 1; i <= 10; i++) {
    numeros.push(i)
}

// 2. Usando un bucle, rellena un array con 10 números aleatorios.
const aleas = []
for (let i = 1; i <= 10; i++) {
    aleas.push( Math.floor(Math.random()*100) )
}

// 3. Crea una copia del array anterior.
const copia = aleas.slice()

// [1,2,3]
// [1,2,3]
// [{name:dfsdf, age:18}]
// [puntero al objeto original]
// let nuevo= original.map( x => x )
// let copiaProfunda = JSON.parse( JSON.stringify(original) )


// 4. Ordena de menor a mayor el array de números aleatorios.
aleas.sort()

aleas.sort( (a,b) => {
    if ( a <= b ) return -1 //dejarlos como están
    else return 1           //intercambiarlos en el array
} )
aleas.sort( (a,b) => a-b )

// 5. Crea un array con 6 nombres de personas y ordénalo alfabéticamente.
let consonantes = 'bcdfghjklmnpqrstvwxyz'
let vocales = 'aeiou'
const nombres = []
for (let j = 0; j < 6; j++) {
    let nombreRandom = ''
    for (let i=0; i<4; i++) {
        nombreRandom += consonantes.charAt(Math.random()*consonantes.length)
        nombreRandom += vocales.charAt(Math.random()*vocales.length)
    }
    nombres.push(nombreRandom)
}
nombres.sort()


// 6. Crea una función que recibe un array de números como parámetro
// y devuelve un nuevo array donde cada elemento original
// ha sido multiplicado por 2.
// Intenta resolverlo de la manera clásica (bucle)
// y con la nueva función “map” de arrays.
function duplicaValores(arrayOriginal) {
    return arrayOriginal.map( x => x )
}
const numeros1 = [{name:Luismi, age:10}, 8, 12, 4, 10, 3]
                 [puntero, 8, 12, 4, 10, 3]

                 "[{name:Luismi, age:10}, 8, 12, 4, 10, 3]"

const numeros2 = duplicaValores(numeros1)