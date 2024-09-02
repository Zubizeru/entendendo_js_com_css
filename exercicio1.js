function executarExercicio1() {
    /*
    Informe se um aluno está aprovado,
    de recuperação ou reprovado
    seguindo os seguintes critérios:
    informar 3 notas
    media > 6: aprovado.
    media < 4:reprovado.

    Obs use o prompt e exiba os resultado em alert.
    */

    // Captura o nome do aluno
    let nome1 = prompt("Digite o Nome do Aluno:");

    // Verificar se o nome foi inserido corretamente (!nome: se nao tiver nome, nome1.trim:retira espaços para detectar se tem nome)
    if (!nome1 || nome1.trim() === "") {
        alert("Nome do aluno é obrigatório.");
        // Return interrompe a execução do algoritmo
        return;
    }

    // Captura as notas do aluno e converte para número com ponto flutuante
    let nota1 = parseFloat(prompt("Digite a Nota 1 do Aluno: "));
    let nota2 = parseFloat(prompt("Digite a Nota 2 do Aluno: "));

    // Verifica se as notas são números válidos
    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Todas as notas devem ser números válidos.");
        // Return interrompe a execução do algoritmo
        return;
    }

    // Processo: calcula a média das notas
    let media1 = (nota1 + nota2) / 2;
    let mensagem = "";

    // Comparar a média para determinar o resultado (aprovado, recuperação ou reprovado)
    if (media1 >= 7) {
        mensagem = nome1 + " está Aprovado.";
    } else if (media1 >= 5) {
        mensagem = nome1 + " está em Recuperação.";
    } else {
        mensagem = nome1 + " está Reprovado.";
    }

    // Exibe a mensagem final com o resultado do aluno
    alert(mensagem);
}