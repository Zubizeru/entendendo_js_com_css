function executarExercicio3() {
    // Faça um algoritmo que peça dois números e imprima o maior deles.

let numero1 = parseInt(prompt("Digite o Primeiro Número"));
let numero2 = parseInt(prompt("Digite o Segundo Número"));
    
// Verifica se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Todas os números tem que ser válidos.");
        // Return interrompe a execução do algoritmo
        return;
    }
    
if (numero1 > numero2) {
    mensagem = `O primeiro numero (${numero1}) é maior que o segundo número (${numero2}).`;
}

else if (numero2 > numero1) {
    mensagem = `O segundo número (${numero2}) é maior que o primeiro número (${numero1}).`;
}
    else {mensagem = `O primeiro e segundo números são iguais (${numero1} e ${numero2}).`}
alert(mensagem);
}