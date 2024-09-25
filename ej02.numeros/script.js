const box = document.getElementById("numberInput")
const analyzeBtn = document.getElementById("analyzeBtn")
const outputTa = document.getElementById("outputTa")

analyzeBtn.addEventListener("click",function(){
    analyzeNumber(box.value)
})

box.addEventListener("keyup",function(ev){
    if (ev.key == "Enter")
        analyzeNumber(box.value)
})

function analyzeNumber(number){
    console.log("hola")
    //comprobar si el usuario ha usado "," en lugar de "." decimal
    number = number.replace(",",".")

    if (isNaN(number)) {
        outputTa.value = "No has escrito un número válido"
    } else {
        //decir si es par o impar
        if (Math.floor(number) % 2) outputTa.value = "Es impar"
        else outputTa.value = "Es par"
        //decir si es entero o flotante
        if (number % 1) outputTa.value += "\nEs flotante"
        else outputTa.value += "\nEs entero"
        //mostrar su tabla de multiplicar
        for (let i= 0; i<=10; i++)
            //outputTa.value += "\n" + number + "x" + i + "=" + (number*i).toFixed(2)
            outputTa.value += `\n${number} x ${i} = ${(number*i).toFixed(2)}`

            
    }
}
