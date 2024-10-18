const formu = document.getElementsByTagName("form")[0]

formu.addEventListener("submit",function(ev){
    ev.preventDefault()

    let todoOk = true


    const expRegNombre = /^[a-zA-Z][\w]*(\.[a-z]{3})?$/
    //comprobar los campos que consideremos oportunos
    const nombre = document.getElementById("nombreInput")
    if ( !expRegNombre.test( nombre.value.trim() ) ) {
        todoOk = false
        //avisar al usuario del error en el campo nombre
    } else {
        //borrar el mensaje de error del campo nombre
    }





    const expRegMatricula = /^\d{4}[ -]?[]{3}$/
    //comprobar los campos que consideremos oportunos
    const matricula = document.getElementById("matriculaInput")
    if ( !expRegMatricula.test( matricula.value.trim() ) ) {
        todoOk = false
        //avisar al usuario del error en el campo nombre
    } else {
        //borrar el mensaje de error del campo nombre
    }





















    const generoSelect = document.getElementById("generoSelect")
    if (generoSelect.value == "0") {
        todoOk = false
        //avisar al usuario del error en el campo genero
    } else {
        //borrar el mensaje de error del campo genero
    }

    if (todoOk) {
        formu.submit()
    } else {
        alert("Ha habido errores, no se envía")
    }
})