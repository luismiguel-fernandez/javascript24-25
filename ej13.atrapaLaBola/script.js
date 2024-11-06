const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
const DURACION = 10

const btnEmpezar = document.querySelector("#btnEmpezar")
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const labelPuntos = document.querySelector("#puntos")
const labelVelocidad = document.querySelector("#velocidad")
const labelTiempo = document.querySelector("#tiempo")

let tiempo
let partida = false
let puntos = 0
labelPuntos.textContent = puntos

tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

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
        if(tiempo == 0){
            clearInterval(crono)
            clearInterval(movimiento)
            partida = false
        }
    },1000)
})

tablero.addEventListener("click", function(ev){
    if(ev.target.id != "bola"){
        clearInterval(movimiento)
        partida = false
        clearInterval(crono)
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

function moverBola(){ 
    bola.style.top = Math.random()* (ALTURA_TABLERO - DIAMETRO_BOLA) + "px"
    bola.style.left = Math.random()* (ANCHURA_TABLERO - DIAMETRO_BOLA ) + "px"
}


/*
records = [
    {name: "Andrew", points: 10},
    {name: "Pamela", points: 8},
    {name: "Elisabeth", points: 6},
    {name: "George", points: 4},
    {name: "Caroline", points: 2}
]
*/