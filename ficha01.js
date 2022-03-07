//5.
function disciplina(teorica, pratica)
{
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
function mes(numero)
{
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
function operadores(num1, num2, op)
{
    if (op == "+"){
        res = num1 + num2;
        console.log(res);
    } else if (op == "-"){
        res = num1 - num2;
        console.log(res);
    } else if (op == "*"){
        res = num1 * num2;
        console.log(res);
    } else if (op == "/"){
        res = num1 / num2;
        console.log(res);
    } else if (op == "^"){
        res = num1**num2;
        console.log(res);
    }
}
operadores(2,2, "^");


//8.
function multiplos()
{
    i = 1;
    while (i < 4) {
        multi = i * 5;
        console.log(multi);
        i++;
    }
}
multiplos();


//9.
function soma100(){
    res = 0;
    for (i = 1; i <= 100 ;i++){
        res += i;
    }
    console.log(res);
}
soma100();


//10.
function factorial(n){
    console.log(n**n);
}
factorial(3);


//11.
function verify_array(array){
    for (i = 0; i < array.length; i++){
        if (array[i] < 0){
            console.log("Erro:Numero negativo encontrado");
        } else {
            max = 0;
            for (j = 0; j <= max; j++){
                if (array[j] > max) {
                    max = array[i]
                    console.log("Biggest number: ", max);
                }  
            }
        }
    }
}

verify_array([1,2,3,-3,4])