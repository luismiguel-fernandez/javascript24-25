/* Reto 3
  Crea un documento HTML que solicite al usuario
  un número y se escriba en el documento
  todos los números múltiplos de 7 que hay
  del 1 al número introducido
  (por ejemplo si introduce un 40, escribirá en el documento
  "Múltiplos del 7 entre 1 y 40: 7, 14, 21, 28, 35").
  Comprueba previamente que han introducido
  un número y no una letra, y muestra un error en este caso.
*/

const numeroInput = document.getElementById("numeroInput")
const boton = document.getElementsByTagName("button")[0]
const resultadoTA = document.getElementById("resultadoTA")

numeroInput.addEventListener("keyup",function(ev){
  if (ev.key == "Enter") {
    calcularMult7()
  }
})

boton.addEventListener("click",calcularMult7)

function calcularMult7() {
  const tope = parseInt(numeroInput.value)
  if (tope >= 7) {
    resultadoTA.value = ""
    for (let i = 1; i <= tope; i++) {
      if (i % 7 == 0) {
        //hemos encontrado un múltiplo
        resultadoTA.value += i + " "
      }
    }
  } else {
    resultadoTA.value = "El nº introducido es menor que 7"
  }
}