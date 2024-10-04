//constantes y variables
const txtAdd = document.getElementById("txtAdd")
const mylist = document.getElementById("mylist")
const btnAdd = document.getElementById("btnAdd")

const btnDelSel = document.getElementById("btnDelSel")


//al abrir la webapp vaciar la caja de texto y darle el foco
txtAdd.value = ""
txtAdd.focus()

//el usuario puede añadir items a su lista a través del INTRO en la caja
// (al pulsar INTRO, se añade el item a la lista y se vacía la caja)
txtAdd.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        addItemToList()
    }
})

btnAdd.addEventListener("click",addItemToList)





btnDelSel.addEventListener("click",function(){
    //Recorrer todos los LI y averiguar si están seleccionados o no, para borrarlos
    // ALT: recuperar directamente SOLO los que estén seleccionados
    const todosLosLI = mylist.getElementsByTagName("LI")
    todosLosLI.forEach( li => {
        if ( li.classList.contains("seleccionado"))
            li.remove()
    })
})
















function addItemToList() {
    if ( txtAdd.value.trim().length > 0 ) {
        let nuevoLI = document.createElement( "LI" )
        nuevoLI.textContent = txtAdd.value.trim()
        mylist.append( nuevoLI )
        nuevoLI.addEventListener("click",function(){
            //nuevoLI se ponga amarillo
            // if (nuevoLI.classList.contains("seleccionado"))
            //     nuevoLI.classList.remove("seleccionado")
            // else
            //     nuevoLI.classList.add("seleccionado")
            nuevoLI.classList.toggle("seleccionado")
        })

        txtAdd.value = ""
    }
}