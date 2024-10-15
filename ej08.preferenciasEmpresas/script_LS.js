const studentName = document.querySelector("#studentName")
const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const insertButton = document.querySelector("#insertButton")
const cuerpoTable = document.querySelector("#studentsChoices>tbody")
const empresas = [
    "Apple",
    "Google",
    "IBM",
    "Microsoft",
    "Nvidia",
    "Intel",
    "Embargos a lo bestia"
]




let preferencias
if ( localStorage.getItem("preferencias") ) {
    preferencias = JSON.parse(localStorage.getItem("preferencias") )
    redibujarPreferencias()
} else
    preferencias = []









studentName.focus()
choice2.disabled = true
//insertButton.disabled = true

//reto 1: rellenar el primer SELECT con estas empresas
empresas.forEach( (empresa,index) => {
    let newOption = document.createElement("OPTION")
    choice1.append(newOption)
    newOption.textContent = empresa
    newOption.value = index + 1
})

//reto 2: que al elegir una empresa en el primer SELECT se rellene
// el segundo SELECT con el resto de empresas no elegidas
choice1.addEventListener("change", function(){
    choice2.innerHTML = '<option value="0">(choose one)</option>'
    if (choice1.value > 0) {
        //rellenar el SELECT choice2
        let empresaElegida1 = choice1.options[ choice1.selectedIndex ].textContent
        empresas.forEach( (empresa,index) => {
            if ( empresa != empresaElegida1 ) {
                let newOption = document.createElement("OPTION")
                choice2.append(newOption)
                newOption.textContent = empresa
                newOption.value = index + 1
            }
        } )
        choice2.disabled = false
    } else {
        choice2.disabled = true
    }
})

insertButton.addEventListener("click", function(){
    //comprobar que los 3 campos están bien rellenados
    if (studentName.value.trim()
        && choice1.value > 0 && choice2.value > 0) {
        //insertar en el array de preferencias
        insertarPreferencias() //llevar datos del FORM al ARRAY
        mostrarUltimaInsercion() //llevar los datos del ultimo elemento del ARRAY al TBODY
        resetearFormulario()
    } else {
        //algún campo (o todos) ha(n) fallado; avisar al usuario

    }
})

function insertarEnTabla() {
    let nombre = studentName.value.trim()
    let empresa1 = choice1.options[ choice1.selectedIndex ].textContent
    let empresa2 = choice2.options[ choice2.selectedIndex ].textContent

    //crear una fila de la tabla e insertar los 3 datos en 3 celdas
    const nuevoTR = document.createElement("tr")
    cuerpoTable.append(nuevoTR)
    const nuevoTD1 = document.createElement("td")
    const nuevoTD2 = document.createElement("td")
    const nuevoTD3 = document.createElement("td")
    const nuevoTD4 = document.createElement("td")
    nuevoTR.append(nuevoTD1,nuevoTD2,nuevoTD3,nuevoTD4)
    nuevoTD1.textContent = nombre
    nuevoTD2.textContent = empresa1
    nuevoTD3.textContent = empresa2
    const nuevoBotonBorrar = document.createElement("button")
    nuevoBotonBorrar.classList.add("btn","btn-danger")
    nuevoBotonBorrar.textContent = "Borrar"
    nuevoBotonBorrar.addEventListener("click",function(){
        //nuevoBotonBorrar.parentElement.parentElement.remove()
        nuevoTR.remove()
    })
    nuevoTD4.append(nuevoBotonBorrar)
}

function mostrarUltimaInsercion() {
    //por cada elemento del ARRAY hay que añadir un TR al TBODY
    
    let nuevaFila = cuerpoTable.insertRow() //incluye a la vez createElement y Append
    let nuevaCelda1 = nuevaFila.insertCell() 
    let nuevaCelda2 = nuevaFila.insertCell() 
    let nuevaCelda3 = nuevaFila.insertCell() 
    let nuevaCelda4 = nuevaFila.insertCell()
    nuevaCelda1.textContent = preferencias[preferencias.length-1].name
    nuevaCelda2.textContent = preferencias[preferencias.length-1].choice1
    nuevaCelda3.textContent = preferencias[preferencias.length-1].choice2
    const nuevoBotonBorrar = document.createElement("button")
    nuevoBotonBorrar.classList.add("btn","btn-danger")
    nuevoBotonBorrar.textContent = "Borrar"
    nuevoBotonBorrar.addEventListener("click",function(){
        //nuevoBotonBorrar.parentElement.parentElement.remove()
        nuevoTR.remove()
    })
    nuevaCelda4.append(nuevoBotonBorrar)
}


function redibujarPreferencias() {
    //por cada elemento del ARRAY hay que añadir un TR al TBODY
    preferencias.forEach( pref => {
        let nuevaFila = cuerpoTable.insertRow() //incluye a la vez createElement y Append
        let nuevaCelda1 = nuevaFila.insertCell() 
        let nuevaCelda2 = nuevaFila.insertCell() 
        let nuevaCelda3 = nuevaFila.insertCell() 
        let nuevaCelda4 = nuevaFila.insertCell()
        nuevaCelda1.textContent = pref.name
        nuevaCelda2.textContent = pref.choice1
        nuevaCelda3.textContent = pref.choice2
        const nuevoBotonBorrar = document.createElement("button")
        nuevoBotonBorrar.classList.add("btn","btn-danger")
        nuevoBotonBorrar.textContent = "Borrar"
        nuevoBotonBorrar.addEventListener("click",function(){
            //nuevoBotonBorrar.parentElement.parentElement.remove()
            nuevoTR.remove()
        })
        nuevaCelda4.append(nuevoBotonBorrar)
    })
}



function insertarPreferencias() {
    preferencias.push(
        {
            name: studentName.value.trim(),
            choice1: choice1.options[ choice1.selectedIndex ].textContent,
            choice2: choice2.options[ choice2.selectedIndex ].textContent
        }
    )
    //propagar cambios al LS
    localStorage.setItem("preferencias", JSON.stringify(preferencias) )
}











function resetearFormulario() {
    studentName.value = ""
    choice1.value = 0
    choice2.value = 0
    choice2.disabled = true
    studentName.focus()
}