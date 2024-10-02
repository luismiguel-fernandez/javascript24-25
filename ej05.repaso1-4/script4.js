/* Reto 4
  Crea un documento HTML que simule aproximadamente el juego
  de Blackjack. Primero entregará al usuario un número aleatorio
  entre 1 y 11. A continuación preguntará al usuario si quiere
  más números. Mientras el usuario conteste que sí, el programa
  generará más números aleatorios entre 1 y 11. Si el usuario
  acumula más de 21 puntos directamente ha perdido.
  Si el jugador deja de pedir números antes de sobrepasar el 21,
  entonces el programa generará un número aleatorio entre 14 y 21
  para competir contra el jugador y decidir quién ha ganado
  la partida.
*/

const cartaBtn = document.getElementById("cartaBtn")
const plantarseBtn = document.getElementById("plantarseBtn")
const manoUl = document.getElementById("manoUl")
let partidaEnMarcha = false
let puntos

cartaBtn.addEventListener("click",function(){
  if (partidaEnMarcha == false) {
    puntos = 0
    partidaEnMarcha = true
    //this = cartaBtn dentro del ambito del function del addeventlistener
    this.textContent = "Pedir otra carta"
    //al principio se dan 2 cartas
    darCarta()
    darCarta()
  } else {
    darCarta()
  }
})

function darCarta() {
  const cartaRandom = Math.floor(Math.random()*11) + 1
  //Por un lado, aumentar puntos
  puntos += cartaRandom
  //Por otro lado, mostrar la carta en el HTML
  const nuevoLi = document.createElement("li")
  nuevoLi.textContent = cartaRandom
}