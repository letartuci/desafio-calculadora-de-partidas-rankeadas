// Função que calcula o saldo e o nível do herói
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso (simulação de partidas)
let vitorias = 85;
let derrotas = 45;

// Chamada da função
let resultado = calcularNivel(vitorias, derrotas);

// Saída final
console.log(
    `O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`
);
