const buscador = document.querySelector("#buscador")
const bodyResul = document.querySelector("#tableResultados>tbody")
const tableCart = document.querySelector("#tableSeleccionados")
const cuerpoCart = tableCart.querySelector("tbody")
const pieCart = tableCart.querySelector("tfoot")

let cart = []

solicitarProductos("")

buscador.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        solicitarProductos( this.value.trim() )
    }
})

function addToCart(gpu) {
    //comprobar si la GPU ya está en el carrito
    let encontrada = cart.find( a => a.id == gpu.id)
    if (encontrada) {
        encontrada.unidades ++
        //añado una unidad más de esa GPU que ya existe en mi array
    } else {
        //añado la GPU a mi array
        cart.push( {
            titulo: gpu.titulo,
            precio: gpu.precio,
            unidades: 1
        })
        console.table(cart)
    }
    actualizarCartEnPantalla(cart)



    // let nuevaFila = cuerpoCart.insertRow()
    // let celda1 = nuevaFila.insertCell()
    // let celda2 = nuevaFila.insertCell()
    // let celda3 = nuevaFila.insertCell()
    // let celda4 = nuevaFila.insertCell()
    // let celda5 = nuevaFila.insertCell()
}

function mostrarResultados(json) {
    bodyResul.innerHTML = ""
    json.forEach( resultado => {
        let newTR = bodyResul.insertRow()
        let celda1 = newTR.insertCell()
        let celda2 = newTR.insertCell()
        let celda3 = newTR.insertCell()
        celda1.textContent = resultado.titulo
        celda2.textContent = resultado.precio
        let btnAdd = document.createElement("BUTTON")
        btnAdd.textContent = "Añadir"
        btnAdd.addEventListener("click",() => addToCart( resultado ) )
        celda3.append(btnAdd)
    })
}

function solicitarProductos(patron) {
    //solicitamos la recuperación de un recurso en la red (PHP de consulta)
    fetch("server/gpushop.php?pattern=" + patron)
    //cuando el fetch reciba respuesta del servidor, la desempaquetamos (HTTP)
    .then( resp => resp.json() )
    //cuando acabe el parseo de los datos útiles de la respuesta, los procesamos
    .then( json => mostrarResultados(json) )
}