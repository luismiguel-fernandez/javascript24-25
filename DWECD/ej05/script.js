const fabricanteInput = document.querySelector("#fabricanteInput")
const tecnologiaSelect = document.querySelector("#tecnologiaSelect")
const precioInput = document.querySelector("#precioInput")
const matriculadoCkb = document.querySelector("#matriculadoCkb")
const insertar = document.querySelector("#insertar")

const ordenar1 = document.querySelector("#ordenar1")



const salida = document.querySelector("#salida")

const tecnologías = ["ninguno","Combustión","Eléctrico","Híbrido"]

const coches = []
coches.push( {
    mo: "Ford ka",
    t: 1,
    p: 25000,
    ma: true
} )
coches.push( {
    mo: "skkoda fabia",
    t: 2,
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

ordenar1.addEventListener("click", function() {
    //primero hacer copia y ordenar e imprimir dicha copia
    listarBD(coches.slice().sort( (a,b) => {
        if (a.mo.toLowerCase() <= b.mo.toLowerCase()) return -1 //dejar "a" delante de "b"
        else return 1 //intercambiar "a" y "b"
    }))
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