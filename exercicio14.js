function executarExercicio14() {

    let continuar = "s"

    do {//Pergunta
        let numero = parseFloat(prompt("Bem vindo a tabuada de dez, digite um número para multiplicar:"))
        //Identificando se o número é válido
        if (isNaN(numero)) {
            alert("Número inválido ou em branco. Por favor, tente novamente.")
            return;
        }
        //Criando sequência
        let mensagem = ""
        for (let i = 1; i <= 10; i++) {

            mensagem = mensagem + numero + "x" + i + "=" + numero * i + "\n";
        }
        alert(mensagem)
        //Pergunta para continuar
        continuar = prompt("Deseja executar a tabuada novamente? s=Sim n=Não")
    } while (continuar == "s")
}

