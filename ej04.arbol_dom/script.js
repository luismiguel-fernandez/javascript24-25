//RECUPERAR Y ALTERAR UNA ETIQUETA EXISTENTE
const titulos = document.getElementsByTagName("h1")
// devuelve [ primer H1, segundo H1, tercer H1 ]
titulos[0].textContent = "nuevo titulo"

//AÑADIR UNA NUEVA ETIQUETA
const nuevoH2 = document.createElement("h2")
//agregar una etiqueta hija (el h2 recién creado) a BODY
document.body.append(nuevoH2)
nuevoH2.textContent = "titulo de nivel 2 recién añadido"

//ELIMINAR UNA ETIQUETA EXISTENTE
const hiperenlaces = document.getElementsByTagName("a")
hiperenlaces[0].remove()

//INSERTAR EN BODY UNA LISTA UL y DOS ITEMS LI "tomate" y "lechuga"
const nuevaUL = document.createElement("UL")
document.body.append(nuevaUL)
//---
let nuevoLI = document.createElement("LI")
nuevaUL.append(nuevoLI)
nuevoLI.textContent = "tomates"
//---
nuevoLI = document.createElement("LI")
nuevaUL.append(nuevoLI)
nuevoLI.textContent = "lechuga"
