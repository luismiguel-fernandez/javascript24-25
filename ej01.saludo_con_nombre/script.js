//alert("Primera instrucción javascript")

const nombres = [ "Miguel" , "Luisa", "Jose", "Nuria", "Pedro" ]

//funcionalidad del botón COMPROBAR DISPONIBILIDAD
  //1.localizar el botón
  const checkBoton = document.getElementById("checkAvailBtn")
  //2.evento clic del usuario sobre el botón
  checkBoton.addEventListener("click",comprobarNombre)


//funcionalidad del botón REGISTRAR
const registerBtn = document.getElementById("registerBtn")
registerBtn.addEventListener("click",registrar)

function registrar() {
    //mostrar en la consola
    console.log("boton funciona y usuario ya pillado")
    //mostrar en el label de info para el usuario
    const userMessagesLbl = document.getElementById("userMessagesLbl")
    userMessagesLbl.textContent = "Usuario ya pillado"
}

function comprobarNombre() {
    //1. recuperar el INPUT (la caja de texto)
    const usernameInput = document.getElementById("usernameInput")
    //2. extraer el texto que hay dentro de la caja INPUT
    const userName = usernameInput.value
    //3. comprobar si ese nombre está o no en la BD (array)
    // let yaExiste = false
    // for (let i=0; i<nombres.length; i++) {
    //     if (userName == nombres[i])
    //         yaExiste = true
    // }
    // //4. mostrar el mensaje que corresponda según "yaExiste"
    // const checkAvailLbl = document.getElementById("checkAvailLbl")
    // if (yaExiste) 
    //     checkAvailLbl.textContent = "Usuario ya reservado"
    // else
    //     checkAvailLbl.textContent = "Usuario disponible"
    //3. comprobar rápido si ese nombre está o no en la BD (array)
    if (nombres.includes(userName))
        checkAvailLbl.textContent = "Usuario ya reservado"
    else
        checkAvailLbl.textContent = "Usuario disponible"
}