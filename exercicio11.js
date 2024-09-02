function executarExercicio11() {
    /*Faça um algoritmo que faz uma conversão de temperaturas onde .
 
1. Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
 
2. Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9 */
 
let textoMenu = `Informe o tipo de conversão que você quer fazer:
1- Celsius para Fahrenheit
2- Fahrenheit para Celsius`;

let conversao_escolhida = prompt(textoMenu);
let conversao_nome;
let mensagem;

switch (conversao_escolhida) {
case "1":
conversao_nome = "Celsius para Fahrenheit";
let celpfah = parseFloat(prompt("Digite a temperatura em Celsius para converter para Fahrenheit:"));
    if (isNaN(celpfah)) {
        alert("Digite um número válido.");
        // Return interrompe a execução do algoritmo
        return;
    }
    
let resultado_celpfah = (celpfah * 9/5) + 32;
{
mensagem = "A temperatura em Fahrenheit é " + resultado_celpfah;
}
break;

case "2":
conversao_nome = "Fahrenheit para Celsius";
let fahpcel = parseFloat(prompt("Digite a temperatura em Fahrenheit para converter para Celsius:"));
    if (isNaN(fahpcel)) {
        alert("Digite um número válido.");
        // Return interrompe a execução do algoritmo
        return;
    }
    
let resultado_fahpcel = (fahpcel - 32) * 5/9;
{
mensagem = "A temperatura em Celsius é " + resultado_fahpcel;
}
break;


default:
conversao_nome = "Conversão Inválida";
{
mensagem = "Opção inválida. Por favor, escolha 1 ou 2.";
}
break;
}

alert(mensagem);
}

