//let numero = 10
//let nombre = "Pocoyó"
//let caducado = true
let amigos = ["ballena", "perro", "pájaro"]
let personaje = {
    tipo: "animado",
    numOjos: 8
}
//guardar variables en localStorage
localStorage.setItem("numeroEnLS", 10)
localStorage.setItem("nombreEnLS", "Pocoyó")
localStorage.setItem("caducadoEnLS", JSON.stringify(false) )
localStorage.setItem("amigosEnLS", JSON.stringify(amigos) )
localStorage.setItem("personajeEnLS", JSON.stringify(personaje) )

//console.log(  parseInt(localStorage.getItem("numeroEnLS")) )
console.log( JSON.parse(localStorage.getItem("caducadoEnLS")) )
console.log( JSON.parse(localStorage.getItem("amigosEnLS")) )

console.log( JSON.parse(localStorage.getItem("personajeEnLS")) )

if ( JSON.parse(localStorage.getItem("caducadoEnLS"))  ) {
    console.log("entra")
}