function executarExercicio16() {
    let baseRetangulo = parseFloat(prompt("Informe a Base do Retângulo:"));
    let alturaRetangulo = parseFloat(prompt("Informe a Altura do Retângulo:"));
    let resultado = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);
    alert(`A área do retângulo é: ${resultado.toFixed(2)}`);
    calcularAreaRetangulo();
}

function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}