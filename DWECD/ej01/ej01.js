//introducir datos
    // prompt (ventana emergente con caja de texto)
    // **definir INPUTs de tipo TEXT en HTML

    //mostrar datos al usuario
    // document.write
    // alert
    // *console.log console.warn console.error
    // **definir elementos HTML como LABEL, TEXTAREAS, P, DIV

    function saludar() {
        //recuperar el INPUT y consultar el texto que hay dentro
        const entrada = document.getElementById("entrada")
        const nombreUsuario = entrada.value
        //recuperar el LABEL y establecer un mensaje dentro
        const salida = document.getElementById("salida")
        salida.textContent = "Hola, " + nombreUsuario
    }


//Si no usamos DEFER entonces ciertas partes de código hay que ponerlas
// dentro del evento DOMContentLoaded del objeto "document"
// document.addEventListener("DOMContentLoaded",function(){
//     //recupero el botón del BODY y le asigno funcionalidad en click
//     const saludarBtn = document.getElementById("saludarBtn")
//     saludarBtn.addEventListener("click",saludar)
// })

const saludarBtn = document.getElementById("saludarBtn")
saludarBtn.addEventListener("click",saludar)