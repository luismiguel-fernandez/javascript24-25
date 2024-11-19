const chat = document.querySelector("#chat")
const nick = document.querySelector("#nick")
const teclado = document.querySelector("#teclado")

let ultimo = 0

nick.focus()

teclado.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        //comprobar si hay algo escrito en los 2 campos
        if (nick.value.trim() && teclado.value.trim()) {
            //si ok, llamar al php para insertar mensaje en BD
            let opciones = {
                method: "POST",
                body: new URLSearchParams("nick=" + nick.value.trim() + "&mensaje=" + teclado.value.trim())
            }
            fetch("server/chat_insert_post.php",opciones)
            .then( () => {
                teclado.value = ""
            })
        }
        
    }
})






let actualizaMensajesBot = setInterval( consultaNuevosMensajes , 1000)

function consultaNuevosMensajes() {
    fetch("server/chat_select_get_json.php?ultimo="+ultimo)
    .then( resp => resp.json() )
    .then( json => {
        json.forEach( m => {
            let nuevoMensajeDiv = document.createElement("div")
            nuevoMensajeDiv.classList.add("mensaje")
            nuevoMensajeDiv.textContent = m.nick + ": " + m.texto
            chat.append(nuevoMensajeDiv)
            ultimo = m.id
            //bajar scroll del DIV "chat" para mostrar siempre lo nuevo
            chat.scrollTop = chat.scrollHeight
        } )
    })
}