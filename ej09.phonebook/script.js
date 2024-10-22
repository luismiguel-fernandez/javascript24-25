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
    addContact()
})
inputNumber.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        addContact()
    }
})

//funciones auxiliares
function addContact() {
    let name = inputName.value.trim()
    let number = inputNumber.value.trim()
    const expRegNumber = /^(([0-9]{4})|(\+[0-9]{2,3}))?[0-9]{9}$/
        // 123456789 || 0034123456789 || +34123456789
    if ( name.length && expRegNumber.test(number) ){
        addContactToPhonebook(name,number)
        addContactToTable(name,number)
        resetForm()
    }
}
function addContactToPhonebook(name,number) {
    phonebook.push(
        {
            name: name,
            number: number,
            favorite: false
        }
    )
}
function addContactToTable(name,number,favorite=false) {
    let newTR = phonebookTbody.insertRow()
    let newTD1 = newTR.insertCell()
    let newTD2 = newTR.insertCell()
    let newTD3 = newTR.insertCell()
    newTD1.textContent = name
    newTD2.textContent = number
    
    let newDeleteButton = document.createElement("button")
    newDeleteButton.textContent = "Delete"
    newDeleteButton.classList.add("btn","btn-danger")
    newTD3.append(newDeleteButton)
    newDeleteButton.addEventListener("click",function(){
        newTR.remove()
        deleteContactFromPhonebook(name,number)
    })

    let newFavButton = document.createElement("button")
    newFavButton.classList.add("btn","btn-link")
    newTD3.append(newFavButton)
    if (!favorite)
        newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg>`
    else
        newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`
    
    newFavButton.addEventListener("click",function(){
        //colorear o vaciar la estrella (HTML)
        favorite = !favorite
        if (!favorite)
            newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/></svg>`
        else
            newFavButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`
        //cambiar la propiedad "favorite" de ese contacto en el ARRAY
        let index = phonebook.findIndex( c => c.name == name && c.number == number )
        phonebook[index].favorite = !phonebook[index].favorite
    })
    
}
function deleteContactFromPhonebook(name,number) {
    //localizar el indice del contacto dado por name y number
    let index = phonebook.findIndex( c => c.name == name && c.number == number )
    if (index >= 0) phonebook.splice(index,1)
}
function resetForm() {
    inputName.value = ""
    inputNumber.value = ""
    inputName.focus()
}

