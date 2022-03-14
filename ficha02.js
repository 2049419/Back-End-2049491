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
    else if (imc <= 18.5 && imc > 0) {
        console.log("You are underweight.")
    }
    else {
        console.log("Wrong value(s) were inputed.")
    }
}
physique(90, 1.8)

//2.
function reverse(phrase) {
    var resersePhrase = "";
    var split = phrase.split(" ");
    for (var j = 0; j < split.length; j++) {
        for (var i = split[j].length - 1; i >= 0; i--) {
            resersePhrase += split[j][i];
        }
        resersePhrase += " ";
    }
    console.log(resersePhrase);
}
reverse("Hoje e Domingo")

//3.
function vowels(phrase2) {
    var numberVowels = 0;
    for (var i = 0; i < phrase2.length; i++) {
        if (phrase2[i] == "a" || phrase2[i] == "e" || phrase2[i] == "i" || phrase2[i] == "o" || phrase2[i] == "u") {
            numberVowels += 1;
        }
    }
    console.log("This phrase has", numberVowels, "vowels.")
}
vowels("Hoje e Domingo")

//4.
function letter(phrase3, letter) {
    var numberLetters = 0;
    for (var i = 0; i < phrase3.length; i++) {
        if (phrase3[i] == letter) {
            numberLetters += 1;
        }
    }
    console.log("The letter", letter, "has appeared", numberLetters, "times.")
}
letter("Hoje e Domingo", "o")

//5.
