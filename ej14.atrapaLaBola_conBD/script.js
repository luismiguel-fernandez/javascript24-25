const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
const DURACION = 10

let records
if (localStorage.getItem("records")) {
    records = JSON.parse( localStorage.getItem("records") )
} else {
    records = [
        {name: "Andrew", points: 5},
        {name: "Pamela", points: 4},
        {name: "Elisabeth", points: 3},
        {name: "George", points: 2},
        {name: "Caroline", points: 1}
    ]
}

const btnEmpezar = document.querySelector("#btnEmpezar")
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const labelPuntos = document.querySelector("#puntos")
const labelVelocidad = document.querySelector("#velocidad")
const labelTiempo = document.querySelector("#tiempo")

const cuerpoRecords = document.querySelector("#records>tbody")

let tiempo
let partida = false
let puntos = 0
labelPuntos.textContent = puntos

tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

listarRecords()

let movimiento
let crono

btnEmpezar.addEventListener("click" , function(){
    partida = true
    clearInterval(movimiento)
    movimiento = setInterval(moverBola,1000)
    puntos = 0
    labelPuntos.textContent = puntos
    labelVelocidad.textContent = 1000
    tiempo = DURACION
    labelTiempo.textContent = tiempo
    clearInterval(crono)
    crono = setInterval(function(){
        tiempo--
        labelTiempo.textContent = tiempo
        if (tiempo == 0){
            terminarPartida()
        }
    },1000)
})

tablero.addEventListener("click", function(ev){
    if(ev.target.id != "bola"){
        terminarPartida()
    }
})

bola.addEventListener("click", function(){
    if(partida){
        puntos++
        moverBola()
        clearInterval(movimiento)
        movimiento = setInterval(moverBola,1000 - puntos*50)
        labelVelocidad.textContent = 1000 - puntos*50
        labelPuntos.textContent = puntos
    }
})





function listarRecords() {
    cuerpoRecords.innerHTML = ""
    records.forEach( (r,index) => {
        //crear una fila de la tabla por cada record del array records
        let newRow = cuerpoRecords.insertRow()
        let newCell1 = newRow.insertCell()
        let newCell2 = newRow.insertCell()
        let newCell3 = newRow.insertCell()
        newCell1.textContent = index + 1
        newCell2.textContent = r.name
        newCell3.textContent = r.points
    })
}

function moverBola(){ 
    bola.style.top = Math.random()* (ALTURA_TABLERO - DIAMETRO_BOLA) + "px"
    bola.style.left = Math.random()* (ANCHURA_TABLERO - DIAMETRO_BOLA ) + "px"
}

function terminarPartida() {
    clearInterval(crono)
    clearInterval(movimiento)
    partida = false
    let nombre
    if ( puntos > records[records.length - 1].points ) {
        nombre = prompt("Escribe tu nombre")
        //Consejo: comprobar que escribe algo correcto
        //          o limitar lo que puede llegar a escribir
        //inserto la puntuación en la tabla de records
        records.push({
            name: nombre,
            points: puntos
        })
        //ordeno por puntos de mayor a menor
        records.sort( (a,b) => b.points - a.points )
        //elimino el que se ha quedado 6º en la tabla después de ordenar
        records.pop()
        //listar de nuevo la tabla de records con los cambios recientes
        listarRecords()
        //actualizo el LocalStorage
        localStorage.setItem( "records", JSON.stringify(records) )
    }
}
