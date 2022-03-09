//5.
function disciplina(teorica, pratica) {
    //notas de 0 a 20
    nota_teorica = teorica * 0.6;
    nota_pratica = pratica * 0.4;
    res = nota_teorica + nota_pratica;
    if (res < 9.5) {
        console.log("Reprovado.");
    } else {
        console.log("Aprovado.");
    }
}
disciplina(12, 11);


//6.
function mes(numero) {
    //1-12
    switch (numero) {
        case 1:
            console.log("janeiro");
            break;
        case 2:
            console.log("fevereiro");
            break;
        case 3:
            console.log("março");
            break;
        case 4:
            console.log("abril");
            break;
        case 5:
            console.log("maio");
            break;
        case 6:
            console.log("junho");
            break;
        case 7:
            console.log("julho");
            break;
        case 8:
            console.log("agosto");
            break;
        case 9:
            console.log("setembro");
            break;
        case 10:
            console.log("outubro");
            break;
        case 11:
            console.log("novembro");
            break;
        case 12:
            console.log("dezembro");
            break;
        default:
            console.log("Mês não Existente");
    }
}
mes(12);


//7.
function operadores(num1, num2, op) {
    if (op == "+") {
        res = num1 + num2;
        console.log(res);
    } else if (op == "-") {
        res = num1 - num2;
        console.log(res);
    } else if (op == "*") {
        res = num1 * num2;
        console.log(res);
    } else if (op == "/") {
        res = num1 / num2;
        console.log(res);
    } else if (op == "^") {
        res = num1 ** num2;
        console.log(res);
    }
}
operadores(2, 2, "^");


//8.
function multiplos() {
    i = 1;
    while (i < 4) {
        multi = i * 5;
        console.log(multi);
        i++;
    }
}
multiplos();


//9.
function soma100() {
    res = 0;
    for (i = 1; i <= 100; i++) {
        res += i;
    }
    console.log(res);
}
soma100();


//10.
function factorial(n) {
    if (n < 0) {
        console.log("Não é possivel fazer factorial de um numero negativo.")
    }
    else if (n == 0) {
        console.log("0")
    }
    else {
        fact = 1;
        for (i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log(fact)
    }
}
factorial(3);


//11.
function verify_array(array) {
    var containsNeg = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            containsNeg = true;
        }
    }
    if (!containsNeg) {
        biggest(array);
        smallest(array);
        media(array);
    }
    else
        console.log("Array tem negativos.");
}
function biggest(array) {
    var max = array[0];
    for (i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    console.log("Maior:", max);
    //max = Math.max.apply(null, array);
    //console.log("Maior:", max);
}
function smallest(array) {
    var min = array[0];
    for (i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log("Menor:", min);
    //min = Math.min.apply(null, array);
    //console.log("Menor:", min);
}
function media(array) {
    var total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    var avg = total / array.length;
    console.log("Média:", avg);
}

verify_array([1, 2, 3, 10, 4])