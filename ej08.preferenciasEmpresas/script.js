const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const empresas = [
    "Apple",
    "Google",
    "IBM",
    "Microsoft",
    "Nvidia",
    "Intel",
    "Embargos a lo bestia"
]
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
    }
})
