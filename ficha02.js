//1.
function physique(weight, height) {
    var imc = weight / (height ** 2)
    if (imc > 30) {
        console.log("You are overweight.")
    }
    else if (imc <= 30 && imc >= 25) {
        console.log("You are slightly overweight.")
    }
    else if (imc <= 25 && imc >= 18.5) {
        console.log("You weight is normal.")
    }
    else if (imc <= 18.5 && imc > 0 ) {
        console.log("You are underweight.")
    }
    else {
        console.log("Wrong value(s) were inputed.")
    }
}
physique(90, 1.8)

//2.
function reverse(phrase) {
    for (i = 0; phrase.lengt)
}