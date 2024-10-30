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
    // SHALLOW COPY
     // let copiaSuperficial = original.slice()
     // let copiaSuperficial = original.map( x => x )
     // let copiaSuperficial = original.filter( x => x )
    // DEEP COPY
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

const numeros2 = duplicaValores(numeros1)


// 7. Ejercicio sobre arrays.
// • Declara un array que vamos a llamar “clasificaciones” con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado).
// • Imprime la clasificación actual.
// El concurso continúa y se modifican esas posiciones anteriores. Debemos cambiar en el array:
// • Celia adelanta a Raúl.
// • Antonio es descalificado y se elimina del concurso.
// • Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden.
// • Hay una nueva participante que pasa a encabezar la clasificación: Marta.
// • Imprime la clasificación actualizada y comprueba que se ha hecho correctamente.
const clasificaciones = [
    {name: "Ana"},
    {name: "Oswaldo"},
    {name: "Raúl"},
    {name: "Celia"},
    {name: "María"},
    {name: "Antonio"}
]
// SOLUCIÓN CLÁSICA 
// let temp = clasificaciones[2]
// clasificaciones[2] = clasificaciones[3]
// clasificaciones[3] = temp
clasificaciones.splice(2,0,clasificaciones[3])
clasificaciones.splice(4,1)
//encontrar el índice donde el name = "Antonio"
let indice = clasificaciones.findIndex( p => p.name == "Antonio" )
clasificaciones.splice(indice,1)
clasificaciones.splice(1,0, {name: "Roberto"}, {name: "Amaya"} )
//solucion 1: splice
clasificaciones.splice(0,0,{name:"Marta"})
//solucion 2: unshift
let marta = {name: "Marta"}
clasificaciones.unshift(marta)

//8. Ejercicio sobre arrays y objetos (opcionalmente clases).
// • Inserta en un array 5 objetos diferentes siguiendo la estructura dada:
// o fabricante: “Toyota”,
// o modelo: “Auris”,
// o precio: “22900”
const coches = [
    {fab: "Toyota", modelo: "Auris", precio: 25900},
    {fab: "ford", modelo: "Focus", precio: 27900},
    {fab: "Audi", modelo: "Q2", precio: 34900},
    {fab: "Skoda", modelo: "Fabia", precio: 21900},
    {fab: "VW", modelo: "Golf", precio: 28900}
]
// Ordena y muestra en pantalla por precio descendente.
coches.sort( (a,b) => {
    if (a.precio >= b.precio) return -1 
    else return 1
})
// Ordena y muestra en pantalla por fabricante.
coches.sort( (a,b) => {
    if (a.fab.toLowerCase() < b.fab.toLowerCase()) return -1
    else return 1
})
// Filtra y muestra en pantalla aquellos que sean de 1 fabricante dado.
// FILTER CREA UN NUEVO ARRAY
let filtrados = coches.filter( c => {
    return (c.fab == "ford" || c.fab == "Skoda")
})
filtrados = coches.filter( c => c.fab == "ford" || c.fab == "Skoda")
// Filtra y muestra en pantalla aquellos que superen los 25000 euros.
let caros = coches.filter( c => c.precio > 25000 )