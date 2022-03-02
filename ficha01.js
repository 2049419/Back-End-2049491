//5.
function disciplina(teorica, pratica)
{
    //notas de 0 a 20
    nota_teorica = teorica * 0.6;
    nota_pratica = pratica * 0.4;
    res = nota_teorica + nota_pratica;
    if (res < 9.5) {
        console.log("Reprovado.")
    } else {
        console.log("Aprovado.")
    }
}

disciplina(12, 11);

//6.