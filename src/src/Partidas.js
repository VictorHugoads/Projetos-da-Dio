function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

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

function main() {
    const prompt = require('prompt-sync')();
    let vitorias = parseInt(prompt("Digite o número de vitórias: "));
    let derrotas = parseInt(prompt("Digite o número de derrotas: "));

    while (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
        console.log("Por favor, insira números válidos para vitórias e derrotas.");
        vitorias = parseInt(prompt("Digite o número de vitórias: "));
        derrotas = parseInt(prompt("Digite o número de derrotas: "));
    }

    const resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo ${resultado.saldoVitorias} e está no nível ${resultado.nivel}.`);
}

main();
