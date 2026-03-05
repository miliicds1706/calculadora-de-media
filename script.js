const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const resultado = document. getElementById ("resultado")
const button = document.getElementById("button")

function calcularMedia(){
    console.valornota1 = Number (nota1.value)
     console.valornota2 = Number (nota2.value)

     const media = (valornota1 + valornota2)/2

     resultado.innerText = `A media e ${media.toFixed(2)}`
}

button.addEventListener("click", calcularMedia)
