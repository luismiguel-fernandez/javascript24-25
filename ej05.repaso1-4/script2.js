/* Reto 2
 Crea un documento HTML que solicite
 al usuario cuatro números por separado
 y escriba en el documento cuál es
 la diferencia entre el mayor y el menor.
*/

const numeroInput = document.getElementById("numeroInput")
const numerosTA = document.getElementById("numerosTA")
const resultadoTA = document.getElementById("resultadoTA")
const calcularBtn = document.getElementById("calcularBtn")
const vaciarBtn = document.getElementById("vaciarBtn")

let misNumeros = []

numeroInput.focus()
numeroInput.addEventListener("keyup", function(ev) {
    if (ev.key == "Enter") {
        if (!isNaN(numeroInput.value)) {
            //si es un nº lo meto al array
            misNumeros.push(numeroInput.value)
            numerosTA.value = misNumeros
            //vaciar la caja de texto de entrada
            numeroInput.value = ""
        }
    }
})

calcularBtn.addEventListener("click",function(){
    const max = Math.max(...misNumeros)
    // Math.max(misNumeros[0],misNumeros[1], ..... misNumeros[n-1])
    const min = Math.min(...misNumeros)
    resultadoTA.value = `La diferencia entre ${max} y ${min} es ${max-min}.`
})

vaciarBtn.addEventListener("click",function(){
    numerosTA.value = ""
    misNumeros = []
})












// INPUT / TEXTAREA / SELECT / CHECKBOXES / RADIOBUTTON

//     .value


// H1 / SPAN / DIV / LABEL / P / BUTTON

//     .textContent
//     .innerHTML

//     miLabel.textContent = "Hola"
//     miLabel.textContent = "<b>hola</b>"

//     en el HTML, dentro del label aparecerá
//     "Hola" o "<b>hola</b>"

//     miLabel.innerHTML = "<b>hola</b>"
//         "hola" en negrita








