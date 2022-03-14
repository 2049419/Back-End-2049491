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
    var lowerCasePhrase2 = phrase2.toLowerCase();
    for (var i = 0; i < lowerCasePhrase2.length; i++) {
        if (lowerCasePhrase2[i] == "a" || lowerCasePhrase2[i] == "e" || lowerCasePhrase2[i] == "i" || lowerCasePhrase2[i] == "o" || lowerCasePhrase2[i] == "u") {
            numberVowels += 1;
        }
    }
    console.log("This phrase has", numberVowels, "vowels.")
}
vowels("Hoje e Domingo")

//4.
function letter(phrase3, letter) {
    var lowerCasePrase3 = phrase3.toLowerCase();
    var lowerCaseLetter = letter.toLowerCase();
    var numberLetters = 0;
    for (var i = 0; i < lowerCasePrase3.length; i++) {
        if (lowerCasePrase3[i] == lowerCaseLetter) {
            numberLetters += 1;
        }
    }
    console.log(phrase3);
    console.log("The letter", letter, "has appeared", numberLetters, "times.");
}
letter("Hoje e Domingo", "O")

//5.
function work(entry, exit) { //08:12:30
    var splitEntry = entry.split(":");
    var splitExit = exit.split(":");
    var hours = splitExit[0] - splitEntry[0];
    var minutes = splitExit[1] - splitEntry[1];
    var seconds = splitExit[2] - splitEntry[2];
    if (splitEntry[0] >= 8 && splitExit[0] <= 18) {
        if (minutes < 0 || minutes > 60) {
            hours += 1;
        } else if (seconds < 0 || seconds > 60) {
            minutes += 1;
        }
    console.log("Work time was:", hours,":",minutes,":",seconds)
    } else {
        console.log("Wrong time(s) were inputed.");
    }
}
work("8:12:30", "17:20:30")