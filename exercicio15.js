function executarExercicio15() {

    //Pergunta
    let preço = parseFloat(prompt("Qual é o preço do pão?"))
    //Identificando se o número é válido
    if (isNaN(preço)) {
        alert("Número de pães inválido ou em branco. Por favor, tente novamente.")
        return;
    }
    // Criando sequência
    let resultado = `Preço do pão: R$ ${(preço).toFixed(2)} unid. <br>`;
for (let i = 1; i <= 50; i++) {
    resultado += `${i} = R$ ${(preço * i).toFixed(2)} <br>`;
}
    document.write(resultado); // Usando document.write para mostrar a tabela de preços
}

