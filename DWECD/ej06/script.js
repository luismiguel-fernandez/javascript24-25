timeout: setTimeout y clearTimeout
let to2 = setTimeout( function() {
    alert("han pasado 2 segundos")
} , 2000)

let to4 = setTimeout( () => {
    alert("han pasado 4 segundos")
    clearTimeout(to6)
} , 4000)

let to6 = setTimeout( funcionAuxiliar , 6000 , "hola")

function funcionAuxiliar(mensaje) {
    alert(mensaje)
}

// interval: setInterval y clearInterval
let contador = 1
let segundero = setInterval( () => {
    document.write(contador++ + "<br>")
    if (contador == 6) {
        clearInterval(segundero)
    }
}, 1000)


let asd = setTimeout( puntero a una funcion o la propia funcion aqui mismo declarada, milisegundos)
clearTimeout(asd)


setTimeout( function() { funcionAuxiliar("mensaje") }, 1000)
setTimeout( () => funcionAuxiliar("mensaje"), 1000)


boton.addEventlistener("click", function(){
    this.classList.add("amarillo")
})
boton.addEventlistener("click", () => boton.classList.add("amarillo") )


class coche
vender = () => {this.delete()}


toyota = new coche()

coche.vender()



function asd() {

}

const asd = function() {
    fdg
}

const asd = () => {
    fdg
}


let nombre = prompt("escribe tu nombre")

input text
botones

getElementById()
querySelector()

label
textareas

document.write
console.log("")
alert("")

angular react

php+mysql

firebase