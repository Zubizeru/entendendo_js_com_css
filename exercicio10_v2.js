function executarExercicio10_v2() {
    let mensagem = "";
    let sair = false;
    do {
        let option = menuPrincipal();
        switch (option) {
            case "1":
                adicao();
                break;
            case "2":
                subtracao();
                break;
            case "3":
                multiplicacao();
                break;
            case "4":
                divisao();
                break;
            case "5":
                potenciacao();
                break;
            case "6":
                radiciacao();
                break;
            case "7":
                sair = true;
                break;
            default:
                mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 6.";
                alert(mensagem);
                break;
        }
    } while (!sair);
}

function menuPrincipal() {
    let infoMenu = `Informe qual operação você deseja fazer:
    1. Adição
    2. Subtração
    3. Multiplicação
    4. Divisão
    5. Potenciação
    6. Radiciação
    7. Sair`;
    let opcao = prompt(infoMenu);
    return opcao;
}

function lerNumero() {
    let numeros = [];
    numeros.push(parseFloat(prompt("Informe o 1° número:")));
    numeros.push(parseFloat(prompt("Informe o 2° número:")));
    return numeros;
}

function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[1];
    alert(`${num[0]} + ${num[1]} = ${resultado}`);
}

function subtracao() {
    let num = lerNumero();
    let resultado = num[0] - num[1];
    alert(`${num[0]} - ${num[1]} = ${resultado}`);
}

function multiplicacao() {
    let num = lerNumero();
    let resultado = num[0] * num[1];
    alert(`${num[0]} * ${num[1]} = ${resultado}`);
}

function divisao() {
    let num = lerNumero();
    while (num[1] == 0) {
        alert(`Não é possível dividir por zero.`);
        num = lerNumero();
    }
    let resultado = num[0] / num[1];
    alert(`${num[0]} / ${num[1]} = ${resultado}`);
}

function potenciacao() {
    let num = lerNumero();
    let resultado = num[0] ** num[1];
    alert(`${num[0]} ** ${num[1]} = ${resultado}`);
}

function radiciacao() {
    let num = lerNumero();
    let resultado = num[0] ** (1 / num[1]);
    alert(`${num[0]} ** (1/${num[1]}) = ${resultado}`);
}


