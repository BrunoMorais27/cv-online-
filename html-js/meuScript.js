let rs = require("readline-sync")

let peso = rs.questionFloat("qual o seu peso? \n")

let altura = rs.questionFloat("qual a sua altura? \n")

let IMC = peso / (altura * altura)

console.log  ("O SEU IMC É " + IMC )

if (IMC < 17 ) {
      console.log  ("Muito Abaixo do peso")
}
else if (IMC > 17  && IMC < 18.5 ) {
    console.log ("abaixo do peso")
}
else if (IMC > 18.50 && IMC < 25 ) {
    console.log ("peso normal")
}
else if (IMC > 25 && IMC < 30) {
    console.log ("Acima do peso")
}
else if (IMC > 30 && IMC < 35) {
    console.log ("Obesidade I")
}
else if (IMC > 35 && IMC < 39) {
    console.log ("Obesidade II")
}
else {
    console.log ("Obesidade III")
}