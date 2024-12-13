const buscador = document.querySelector("#buscador")
const bodyResul = document.querySelector("#tableResultados>tbody")
const tableCart = document.querySelector("#tableSeleccionados")
const cuerpoCart = tableCart.querySelector("tbody")
const pieCart = tableCart.querySelector("tfoot")

const celdaTotalArticulos = pieCart.querySelectorAll("td")[0]
const celdaTotalPrecio = pieCart.querySelectorAll("td")[1]

let cart = []

solicitarProductos("")

buscador.addEventListener("keyup",function(ev){
    solicitarProductos( this.value.trim() )
})

function actualizarCartEnPantalla(cart) {
    cuerpoCart.innerHTML = ""
    cart.forEach( p => {
        let nuevaFila = cuerpoCart.insertRow() //createElement + append
        let celda1 = nuevaFila.insertCell()
        let celda2 = nuevaFila.insertCell()
        let celda3 = nuevaFila.insertCell()
        let celda4 = nuevaFila.insertCell()
        let celda5 = nuevaFila.insertCell()
        celda1.textContent = p.titulo
        celda2.textContent = p.precio + "€"
        celda3.textContent = p.unidades
        celda4.textContent = p.unidades * p.precio  + "€"
        let botonBorrar = document.createElement("button")
        botonBorrar.textContent = "Borrar"
        botonBorrar.addEventListener("click",function(){
            let encontrada = cart.find( a => a.id == p.id)
            if (encontrada && encontrada.unidades > 1) {
                // reducir el número de unidades
                encontrada.unidades--
                //actualizar las celdas del TFOOT con los totales
                actualizarTotales()
                //actualizar también las celdas de la fila donde se 
                // muestran el número de unidades y el subtotal de € de esa GPU
                let celdaUnidades = botonBorrar.parentNode.parentNode.children[2]
                celdaUnidades.textContent = encontrada.unidades
                let celdaSubTotal = botonBorrar.parentNode.parentNode.children[3]
                celdaSubTotal.textContent = encontrada.unidades * encontrada.precio + "€"
            } else {
                // solo hay 1 unidad -> borra todo el articulo
                nuevaFila.remove() //borra pero solo del DOM (vista del usuario)
                let posicion = cart.findIndex( a => a.id == p.id)
                cart.splice(posicion,1)
                actualizarTotales()
            }
        })
        celda5.append(botonBorrar)
    })
    actualizarTotales()
}

function actualizarTotales() {
    let numArticulos = 0
    cart.forEach( p => {
        numArticulos += p.unidades
    })
    celdaTotalArticulos.textContent = numArticulos + " artículos"
    let precioTotal = 0
    cart.forEach( p => {
        precioTotal += p.precio * p.unidades
    })
    celdaTotalPrecio.textContent = precioTotal + "€"
}

function addToCart(gpu) {
    //comprobar si la GPU ya está en el carrito
    let encontrada = cart.find( a => a.id == gpu.id)
    if (encontrada) {
        encontrada.unidades ++
        //añado una unidad más de esa GPU que ya existe en mi array
    } else {
        //añado la GPU a mi array
        cart.push( {
            ...gpu, //equivale a  id,titulo,precio
            unidades: 1
        })
        console.table(cart)
    }
    actualizarCartEnPantalla(cart)




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


const tableResul = document.querySelector("#tableResultados")
const celdaPrecio = tableResul.querySelector("th:nth-child(1)")
//const celdaPrecio = document.querySelectorAll("#tableResultados>thead>tr>th")[1]

celdaPrecio.addEventListener("click",function(){
    celdaPrecio.classList.toggle("amarillo")

    /*
    si el objeto tiene la clase amarillo, se la quita
    si el objeto no tiene la clase amarillo, se la pone
    */
})















