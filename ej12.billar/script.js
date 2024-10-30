//recuperar elementos del DOM
const tablero = document.querySelector("#tablero")
const bolas = []

const ANCHURA_TABLERO = 900
const ALTURA_TABLERO = 450

//código automático
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
addBola(1)
let mueveBolas = setInterval(moverBolas,50)

//funciones auxiliares
function addBola(num) {
    for (let i=1; i<= num; i++) {
        let nuevaBola = document.createElement("DIV") 
        nuevaBola.classList.add("bola")
        tablero.append(nuevaBola)
        bolas.push(nuevaBola)
        nuevaBola.style.top = "1px"
        nuevaBola.style.left = "1px"

    }
}
function moverBolas() {
    bolas[0].style.top = parseInt(bolas[0].style.top) + 1 + "px"
    bolas[0].style.left = parseInt(bolas[0].style.left) + 1 + "px"
}