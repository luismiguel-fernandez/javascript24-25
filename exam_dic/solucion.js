const DB_URL = "https://my-json-server.typicode.com/luismiguel-fernandez/examen/"

const inpSearch = document.querySelector("#inpSearch")
const btnSearch  = document.querySelector("#btnSearch")

const btnSortArtist = document.querySelector("#btnSortArtist")
const btnSortTitle = document.querySelector("#btnSortTitle")
const btnSortLenInc = document.querySelector("#btnSortLenInc")
const btnSortLenDec = document.querySelector("#btnSortLenDec")

const selArt = document.querySelector("#selArt")
const inpTit = document.querySelector("#inpTit")
const inpLen = document.querySelector("#inpLen")
const btnAddSong = document.querySelector("#btnAddSong")
const feedback1 = document.querySelector("#feedback1")

const inpEdit = document.querySelector("#inpEdit")
const btnEdit = document.querySelector("#btnEdit")
const feedback2 = document.querySelector("#feedback2")

const inpDelete = document.querySelector("#inpDelete")
const btnDelete = document.querySelector("#btnDelete")
const feedback3 = document.querySelector("#feedback3")

const inpPlay = document.querySelector("#inpPlay")
const inpTimer = document.querySelector("#inpTimer")
const btnPlay = document.querySelector("#btnPlay")
const feedback4 = document.querySelector("#feedback4")

const btnLoad = document.querySelector("#btnLoad")
const btnLoadLS = document.querySelector("#btnLoadLS")
const btnSaveLS = document.querySelector("#btnSaveLS")

const divSongList = document.querySelector("#divSongList")

const CANCIONES = [
    { artist: 1, title: "Hola", length: 123},
    { artist: 2, title: "asd", length: 222},
    { artist: 3, title: "adios", length: 136}
]
let ARTISTAS

fetch(DB_URL + "artists")
.then( resp => resp.json() )
.then( json => {
    ARTISTAS = json
    selArt.innerHTML = "<option value='0'>(Elige artista)</option>"
    json.forEach( a => {
        // let nuevoOption = document.createElement("option")
        // nuevoOption.value = a.id
        // nuevoOption.textContent = a.name
        // selArt.append(nuevoOption)

        selArt.innerHTML += `<option value="${a.id}">${a.name}</option>`
        
        // selArt.innerHTML += '<option value="'+ a.id + '">' + a.name + '</option>'
    } )
    imprimirCanciones(CANCIONES)
})

btnAddSong.addEventListener("click",function(){
    if (selArt.value == 0) {
        alert("no has elegido artista")
        return
    }
    let artista = selArt.value
    let titulo = inpTit.value.trim()
    let duracion = inpLen.value.trim()
    // let auxiliar = 0
    // CANCIONES.forEach( c => {
    //     if (c.id > auxiliar) auxiliar = c.id
    // })
    CANCIONES.push({
        //id: Math.max( CANCIONES.map( c => c.id ) + 1 ),
        artist: artista,
        title: titulo,
        length: duracion
    })
    imprimirCanciones(CANCIONES)
})

function imprimirCanciones(lista) {
    divSongList.innerHTML = ""
    lista.forEach( (c,index) => {
        let artista = ARTISTAS.find( a => a.id == c.artist ).name
        divSongList.innerHTML += `<span> ${index+1} - ${artista} - ${c.title} (${c.length})</span><br>`
    })
}

let expreg = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]{1,}$/

function getArtistById(id) {
    return (ARTISTAS.find( a => a.id == id ).name)
}

btnDelete.addEventListener("click",function(){
    let posicion = inpDelete.value.trim()
    if (posicion >= 1 && posicion <= CANCIONES.length) {
        CANCIONES.splice(posicion-1,1)
        imprimirCanciones(CANCIONES)
    }
})

inpSearch.addEventListener("keyup",function(){
    let patron = inpSearch.value.trim()
    imprimirCanciones(CANCIONES.filter( c => c.title.toLowerCase().includes(patron.toLowerCase() ) 
                                        || getArtistById(c.artist).toLowerCase().includes(patron.toLowerCase() ) ))
})


btnSortArtist.addEventListener("click",function(){
    imprimirCanciones(CANCIONES.sort( (a,b) => {
        if (getArtistById(a.artist) < getArtistById(b.artist)) return -1
        else return 1
    } ))
})

btnSortTitle.addEventListener("click",function(){
    imprimirCanciones(CANCIONES.sort( (a,b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        else return 1
    } ))
})

btnSortLenDec.addEventListener("click",function(){
    imprimirCanciones(CANCIONES.sort( (a,b) => {
        if (a.title > b.title) return -1
        else return 1
    } ))
})

btnSortLenInc.addEventListener("click",function(){
    imprimirCanciones(CANCIONES.sort( (a,b) => {
        if (a.title < b.title) return -1
        else return 1
    } ))
})