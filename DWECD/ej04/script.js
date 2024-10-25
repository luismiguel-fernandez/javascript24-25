//const entrada = document.getElementById("entrada")
const entrada = document.querySelector("#entrada")
const insertar = document.querySelector("#insertar")
const vaciar = document.querySelector("#vaciar")
const ordenar = document.querySelector("#ordenar")
const filtrar = document.querySelector("#filtrar")
const salida = document.querySelector("#salida")

const numerosArray = []

insertar.addEventListener("click",function(){
    let numero = entrada.value.trim()
    if (!isNaN(numero)) {
        numerosArray.push(parseInt(numero))
        salida.textContent = numerosArray
    }
})

vaciar.addEventListener("click",function(){
    let numerosArray = []
    salida.textContent = ""

})

ordenar.addEventListener("click",function(){
    //modificar el original
    numerosArray.sort( (a,b) => {
        if (a <= b) return -1
        else return 1
    })
    salida.textContent = numerosArray

    //sin modificar el array original

})

filtrar.addEventListener("click",function(){
    //solo muestra los pares
    
})