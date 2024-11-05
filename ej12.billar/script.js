//recuperar elementos del DOM
const tablero = document.querySelector("#tablero")
const bolas = []

const ANCHURA_TABLERO = 900
const ALTURA_TABLERO = 450
const ANCHURA_BOLA = 30
const ALTURA_BOLA = 30

//código automático
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
addBola(1)
//INTERVAL PARA QUE LAS BOLAS ACTUALICEN SU POSICION CADA X MILISEGUNDOS
let mueveBolas = setInterval(moverBolas,10)
//INTERVAL PARA QUE CADA SEGUNDO APAREZCA UNA NUEVA BOLA EN EL TABLERO
let añadeBolas = setInterval( addBola ,1000)
// DETENER PASADOS 10 SEGUNDOS EL INTERVAL QUE AÑADE BOLAS
setTimeout( () => {clearInterval(añadeBolas)} , 10000)


//funciones auxiliares
function addBola(num = 1) {
    for (let i=1; i<= num; i++) {
        let nuevaBola = document.createElement("DIV") 
        nuevaBola.classList.add("bola")
        tablero.append(nuevaBola)

        let top0 = Math.random()* (ALTURA_TABLERO - ALTURA_BOLA)
        let left0 = Math.random()* (ANCHURA_TABLERO - ANCHURA_BOLA)
        let vely0 = Math.random()*10 - 5
        let velx0 = Math.random()*10 - 5
        let r0 = Math.floor(Math.random()*255)
        let g0 = Math.floor(Math.random()*255)
        let b0 = Math.floor(Math.random()*255)
        let color0 = `rgb( ${r0} , ${g0} , ${b0} )`
        nuevaBola.style.backgroundColor = color0

        let nuevaInstanciaBola = new Bola(nuevaBola,top0,left0,vely0,velx0,color0)
        console.log(nuevaInstanciaBola)
        bolas.push(nuevaInstanciaBola)

    }
}
function moverBolas() {
    console.log("entra")
    bolas.forEach( b => {
        //actualizar la posicion de la bola en la instancia JS
        b.top = b.top + b.vely
        b.left = b.left + b.velx
        //actualizar la posicion de la bola en el arbol DOM
        b.punteroDiv.style.top = b.top + "px"
        b.punteroDiv.style.left = b.left + "px"
        //comprobar si la bola ha superado los limites del tablero
        if (b.top < 0 || b.top > ALTURA_TABLERO - ALTURA_BOLA)
            b.vely = -b.vely //cambiar el signo de vel vertical
        if (b.left < 0 || b.left > ANCHURA_TABLERO - ANCHURA_BOLA)
            b.velx = -b.velx //cambiar el signo de vel horizontal
    })
}