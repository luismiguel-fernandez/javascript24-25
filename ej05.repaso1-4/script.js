/* Reto 1
Crea un documento HTML que solicite cuántos caramelos tienes
 y entre cuántas personas quieres repartirlos.
 A continuación el programa escribirá el mensaje:
 "Si tienes __ caramelos y hay __ personas,
 tienes que repartir __ caramelos a cada uno
 y te sobran __ caramelos".
*/

const numCaramelosInput = document.getElementById("numCaramelosInput")
const numPersonasInput = document.getElementById("numPersonasInput")
const resultadoTA = document.getElementById("resultadoTA")

const botones = document.getElementsByTagName("button")
const miBoton = botones[0]

numCaramelosInput.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        numPersonasInput.focus()
    }
})
numPersonasInput.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        comprobarYcalcular()
    }
})
miBoton.addEventListener("click",comprobarYcalcular)

function comprobarYcalcular() {
    //comprobar que hay 2 numeros correctos escritos y dividir
    let numCar = parseInt(numCaramelosInput.value)
    let numPer = parseInt(numPersonasInput.value)
    if (numCar >= 0 && numPer > 0) {
        let parteEntera = Math.floor(numCar / numPer)
        let restantes = numCar % numPer
        // resultadoTA.value = "Repartes " + parteEntera
        //     + " caramelos a cada persona y te sobran "
        //     + restantes + " caramelos"
        
        resultadoTA.value = `Repartes ${parteEntera} caramelos a cada persona y te sobran ${restantes} caramelos`
    } else {
        resultadoTA.value = "Debes escribir números enteros positivos en los 2 campos"
    }
}
