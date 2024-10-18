//recuperar elementos del arbol DOM
const inputName = document.querySelector("#inputName")
const inputNumber = document.querySelector("#inputNumber")
const btnAdd = document.querySelector("#btnAdd")
const phonebookTbody = document.querySelector("#phonebooktable>tbody")
const phonebook = []

//código automático (sin eventos de usuario); se ejecuta al cargar la página
resetForm()


//dejar programados los eventos de usuario
inputName.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        inputNumber.focus()
    }
})

btnAdd.addEventListener("click",function(){
    let name = inputName.value.trim()
    let number = inputNumber.value.trim()
    addContactToPhonebook(name, number)
    refreshPhonebookTable(name, number)
    resetForm()
})

inputNumber.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        let name = inputName.value.trim()
        let number = inputNumber.value.trim()
        addContactToPhonebook(name,number)
        refreshPhonebookTable(name,number)
        resetForm()
    }
})


//funciones auxiliares
function addContactToPhonebook(name,number) {
    const expRegNumber = /^(([0-9]{4})|(\+[0-9]{2,3}))?[0-9]{9}$/
        // 123456789 || 0034123456789 || +34123456789
    if ( name && expRegNumber.test(number) ){
        phonebook.push(
            {
                name: name,
                number: number
            }
        )
    } 
}

function refreshPhonebookTable(name,number) {
    let newTR = phonebookTbody.insertRow()
    let newTD1 = newTR.insertCell()
    let newTD2 = newTR.insertCell()
    let newTD3 = newTR.insertCell()
    newTD1.textContent = name
    newTD2.textContent = number
}

function resetForm() {
    inputName.value = ""
    inputNumber.value = ""
    inputName.focus()
}

