function executarExercicio7() {
 //Faça um algoritmo em que valida se pode entrar na montanha russa ou não, os critérios são:

let mensagem
let altura = 0
let idade = 0

idade = parseInt(prompt("Informe sua idade:"));
     if (isNaN(idade)) {
        alert("Por favor, coloque uma idade válida.");
        return;
    }
    
altura = parseFloat(prompt("Informe sua altura:"));
 if (isNaN(altura)) {
        alert("Por favor, coloque uma altura válida.");
        return;
    } 
    
if (altura >= 1.70) {
    mensagem = "Você pode entrar na montanha russa"
}

else if (altura >= 1.60 && idade >= 18) {
    mensagem = "Você pode entrar na montanha russa"
}

else {
    mensagem = "Você não pode entrar na montanha russa"
}

alert(mensagem);  
}
