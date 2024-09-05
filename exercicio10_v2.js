function soma() {
    let soma1 = parseFloat(prompt("Digite o primeiro número para somar:"));
    let soma2 = parseFloat(prompt("Digite o segundo número:"));
    return soma1 + soma2;
}

function subtracao() {
    let subtracao1 = parseFloat(prompt("Digite o primeiro número para subtrair:"));
    let subtracao2 = parseFloat(prompt("Digite o segundo número:"));
    return subtracao1 - subtracao2;
}

function multiplicacao() {
    let multiplicacao1 = parseFloat(prompt("Digite o primeiro número para multiplicar:"));
    let multiplicacao2 = parseFloat(prompt("Digite o segundo número:"));
    return multiplicacao1 * multiplicacao2;
}

function divisao() {
    let divisao1 = parseFloat(prompt("Digite o primeiro número para dividir:"));
    let divisao2 = parseFloat(prompt("Digite o segundo número:"));
    if (divisao2 === 0) {
        return "Não é possível dividir por zero.";
    }
    return divisao1 / divisao2;
}

function potenciacao() {
    let base = parseFloat(prompt("Digite a base para a potenciação:"));
    let expoente = parseFloat(prompt("Digite o expoente:"));
    return base ** expoente;
}

function radiciacao() {
    let numero = parseFloat(prompt("Digite o número para radicializar:"));
    let indice = parseFloat(prompt("Digite o índice da raiz:"));
    if (indice === 0) {
        return "O índice da raiz não pode ser zero.";
    }
    return numero ** (1 / indice);
}

function executarExercicio10_v2() {
    let textoMenu = `Informe qual operação você deseja fazer:
                     1   Soma
                     2   Subtração
                     3   Multiplicação
                     4   Divisão
                     5   Potenciação
                     6   Radiciação
                     `;
    let operacaoEscolhida = prompt(textoMenu);
    let mensagem;

    if (operacaoEscolhida === "1") {
        mensagem = "O resultado da soma é " + soma();
    } else if (operacaoEscolhida === "2") {
        mensagem = "O resultado da subtração é " + subtracao();
    } else if (operacaoEscolhida === "3") {
        mensagem = "O resultado da multiplicação é " + multiplicacao();
    } else if (operacaoEscolhida === "4") {
        mensagem = divisao();
        if (typeof mensagem === "number") {
            mensagem = "O resultado da divisão é " + mensagem;
        }
    } else if (operacaoEscolhida === "5") {
        mensagem = "O resultado da potenciação é " + potenciacao();
    } else if (operacaoEscolhida === "6") {
        mensagem = radiciacao();
        if (typeof mensagem === "number") {
            mensagem = "O resultado da radiciação é " + mensagem;
        }
    } else {
        mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 6.";
    }

    alert(mensagem);
}



