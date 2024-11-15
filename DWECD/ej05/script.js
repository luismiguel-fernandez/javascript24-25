const fabricanteInput = document.querySelector("#fabricanteInput")
const tecnologiaSelect = document.querySelector("#tecnologiaSelect")
const precioInput = document.querySelector("#precioInput")
const matriculadoCkb = document.querySelector("#matriculadoCkb")
const insertar = document.querySelector("#insertar")

const ordenar1 = document.querySelector("#ordenar1")
const ordenar2 = document.querySelector("#ordenar2")
const ordenar3 = document.querySelector("#ordenar3")
const ordenar4 = document.querySelector("#ordenar4")

const filtrar = document.querySelector("#filtrar")

const precioMinInput = document.querySelector("#precioMinInput")
const precioMaxInput = document.querySelector("#precioMaxInput")

const salida = document.querySelector("#salida")

const tecnologías = ["ninguno","Combustión","Híbrido","Eléctrico"]

const coches = []
coches.push( {
    mo: "Ford ka",
    t: 1,
    p: 25000,
    ma: true
} )
coches.push( {
    mo: "skkoda fabia",
    t: 3,
    p: 22500,
    ma: false
} )
coches.push( {
    mo: "tesla Y",
    t: 2,
    p: 40000,
    ma: true
} )
coches.push( {
    mo: "bmw x1",
    t: 2,
    p: 35000,
    ma: false
} )
listarBD(coches)

insertar.addEventListener("click", function() {
    let modelo = fabricanteInput.value.trim()
    let tecno = tecnologiaSelect.value
    let precio = precioInput.value.trim()
    let matri = matriculadoCkb.checked
    // if (cada campo tiene algo util)
    coches.push( {
        mo: modelo,
        t: tecno,
        p: precio,
        ma: matri
    } )
    listarBD(coches)
})





filtrar.addEventListener("click", function() {
    let min = parseInt(precioMinInput.value.trim())
    let max = parseInt(precioMaxInput.value.trim())

    if (min >= 0)
        if (max >= 0) {
            //el usuario ha establecido rango de precios
            if (min <= max) {
                listarBD(coches.filter( c => c.p >= min && c.p <= max ))
                // listarBD(coches.filter( function(c) {
                //     return c.p >= min && c.p <= max
                // }))
            }
            else {
                //el usuario ha puesto un min > max
                precioMinInput.value = max
                precioMaxInput.value = min
                listarBD(coches.filter( c => c.p >= max && c.p <= min ))
            }
        }
        else {
            //el usuario ha establecido un precio min (desde ahí hasta infinito)
            listarBD(coches.filter( c => c.p >= min ))
        }
    else
        if (max >= 0) {
            //el usuario ha establecido un precio max (desde 0 hasta ahí)
            listarBD(coches.filter( c => c.p <= max ))
        }
        else {
            listarBD(coches)
        }

})

/*
SLICE crea nuevos arrays
let coches = coches.slice() obtener una copia completa del array coches
let coches = coches.slice(3) obtener una copia del array coches pero solo desde el indice 3 hasta el final
let coches = coches.slice(3,6) obtener una copia del array coches pero solo desde el indice 3 hasta el 5

SPLICE modifica el array
coches.splice(n) //borrar todos los elementos a partir del indice n (incluido)
coches.splice(m,n) //borrar n elementos a partir del indice m (incluido m)
coches.splice(m,n,x) //borrar n elementos a partir del indice m (incluido m) e insertar x en la posición m
coches.splice(m,n,x,y,z) //borrar n elementos a partir del indice m (incluido m) e insertar x,y,z a partir de la posición m

FIND
let fordka = coches.find( c => c.mo == "ford ka")
fordka.p *= 1.10

FINDINDEX
let posicionFordKa = coches.findIndex( c => c.mo == "ford ka" )
coches.splice(posicionFordKa,1)

INCLUDES
[1,2,3].includes(1) //true
["abc","xyz","123"].includes("abc") //true
["abc","xyz","123"].includes("12") //false
[
 {nombre:Luismi,edad:22},
 {nombre:candela,edad:21}
].includes({nombre:Luismi,edad:22}) //false
[
 {nombre:Luismi,edad:22},
 {nombre:candela,edad:21}
].find( p => p.nombre == "Luismi" && p.edad == 22) //true


MAP
let numeros = [1,2,3,4,5]
let dobleNumeros = numeros.map( e => e*2)
    // dobleNumeros = [2,4,6,8,10]

REDUCE


*/





















ordenar1.addEventListener("click", function() {
    //primero hacer copia y ordenar e imprimir dicha copia
    listarBD(coches.slice().sort( (a,b) => {
        if (a.mo.toLowerCase() <= b.mo.toLowerCase()) return -1 //dejar "a" delante de "b"
        else return 1 //intercambiar "a" y "b"
    }))
})

ordenar2.addEventListener("click", function() {
    listarBD(coches.slice().sort( (a,b) => {
        if ( tecnologías[a.t] <= tecnologías[b.t] ) return 1 //dejar "a" delante de "b"
        else return -1 //intercambiar "a" y "b"
    }))
})

ordenar3.addEventListener("click", function() {
    //primero hacer copia y ordenar e imprimir dicha copia
    listarBD(coches.slice().sort( (a,b) => b.p - a.p ))
})


function listarBD(listado) {
    salida.textContent = ""
    //if (typeof listado != "array") return 
    listado.forEach( e => {
        let tec = tecnologías[e.t]
        salida.innerHTML += `${e.mo},${tec},${e.p},${e.ma}<br>`
    })
}

// let copiaDeCoches = coches.slice()
// copiaDeCoches = [puntero al objeto 0 de coches, puntero al objeto 1 de coches]

/*
<button id="ordenar">Sort</button><br>

<input type="text" id="fabricanteFilterInput">
<input type="number" id="precioFilterInput">
<button id="filtrar">Filter</button>
<br>
<label id="salida"></label>
*/


Array.prototype.find()
Array.prototype.findIndex()