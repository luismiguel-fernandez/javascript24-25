const entradaInput = document.getElementById("entradaInput")
const terminarBtn = document.getElementsByTagName("button")[0]
const salidaTA = document.getElementById("salidaTA")

let nombres = []

entradaInput.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        let texto = entradaInput.value.trim()    // .toLowerCase() .toUpperCase()
        if (texto.length > 0) {
            nombres.push(texto)
        } else {
            //terminar de introducir datos
            mostrarDatosExtra()
        }
    }
})

terminarBtn.addEventListener("click",mostrarDatosExtra)


function mostrarDatosExtra() {
    salidaTA.value = ""
    salidaTA.value += "Array original: " + nombres
    salidaTA.value += "Longitud original: " + nombres.length
    
    //Si queremos conservar el array original y ordenar, toca clonar previamente
    //let nombresOrdenados = nombres.slice().sort()

    //No queremos conservar el original
    salidaTA.value += "Array ordenado: " + nombres.sort()

    //filtrar y quitar los nombres de menos de 3 caracteres
    let nombresLargos = nombres.filter( name => name.length >= 3 )
    salidaTA.value += "Array filtrando nombres demasiado cortos: " + nombresLargos


    //salidaTA.value += ""

}


