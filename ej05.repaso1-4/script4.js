/* Reto 4
  Crea un documento HTML que simule aproximadamente el juego
  de Blackjack. Primero entregará al usuario un número aleatorio
  entre 1 y 11. A continuación preguntará al usuario si quiere
  más números. Mientras el usuario conteste que sí, el programa
  generará más números aleatorios entre 1 y 11. Si el usuario
  acumula más de 21 puntos directamente ha perdido.
  Si el jugador deja de pedir números antes de sobrepasar el 21,
  entonces el programa generará cartas aleatorias para el crupier
  para competir contra el jugador y decidir quién ha ganado
  la partida.
*/

const cartaBtn = document.getElementById("cartaBtn")
const plantarseBtn = document.getElementById("plantarseBtn")
const manoUl = document.getElementById("manoUl")
const marcadorDiv = document.getElementById("marcadorDiv")
const resultadoTA = document.getElementById("resultadoTA")

let partidaEnMarcha = false
let puntos

cartaBtn.addEventListener("click",function(){
  if (partidaEnMarcha == false) {
    puntos = 0
    resultadoTA.textContent = ""
    partidaEnMarcha = true
    plantarseBtn.disabled = false
    //vaciar las cartas de la partida anterior
    manoUl.innerHTML = ""
    marcadorDiv.textContent = puntos + " puntos"
    this.textContent = "Pedir otra carta"
    //this = cartaBtn dentro del ambito del function del addeventlistener
    //al principio se dan 2 cartas
    darCarta()
    darCarta()
    //Caso particular: sacas un 21 de primeras --> BLACKJACK
    //(sin hacer)
  } else {
    darCarta()
  }
})

plantarseBtn.addEventListener("click",function(){
  partidaEnMarcha = false
  let puntosCrupier = 0
  while (puntosCrupier < 17 || puntosCrupier > 21) {
    const cartaRandom = Math.floor(Math.random()*11) + 1
    puntosCrupier += cartaRandom
  }
  if (puntosCrupier > 21 ){
    //mostrar que el jugador ha ganado
    resultadoTA.textContent = "La casa ha obtenido " + puntosCrupier + " puntos. Ganas la partida."
  } else {
    //comparar puntuaciones para decidir quién ha ganado
    if (puntos > puntosCrupier)
      resultadoTA.textContent = "Ganas. La casa tiene " + puntosCrupier + " puntos."
    else if (puntos == puntosCrupier) {
      resultadoTA.textContent = "Empatas. La casa tiene " + puntosCrupier + " puntos."
    } else {
      resultadoTA.textContent = "Pierdes. La casa tiene " + puntosCrupier + " puntos."
    }
  }
})



















function darCarta() {
  const cartaRandom = Math.floor(Math.random()*11) + 1
  //Por un lado, aumentar puntos
  puntos += cartaRandom
  //Por otro lado, mostrar la carta en el HTML
  const nuevoLi = document.createElement("li")
  nuevoLi.textContent = cartaRandom
  nuevoLi.classList.add("list-group-item")
  manoUl.append(nuevoLi)
  marcadorDiv.textContent = puntos + " puntos"
  //comprobar si nos hemos pasado de 21
  if (puntos > 21) {
    partidaEnMarcha = false
    cartaBtn.textContent = "Empezar"
    resultadoTA.textContent = "Te has pasado de 21. Pierdes la partida."
    //deshabilitar boton Plantarse
    plantarseBtn.disabled = true
  }
}