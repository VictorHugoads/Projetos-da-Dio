const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarHeroi() {
    readline.question("Digite o nome do herói: ", (nomeHeroi) => {
        readline.question("Digite a quantidade de XP do herói: ", (xpHeroi) => {
            xpHeroi = parseInt(xpHeroi);
            let nivel;

            if (xpHeroi < 1000) {
                nivel = "Ferro";
            } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
                nivel = "Bronze";
            } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
                nivel = "Prata";
            } else if (xpHeroi >= 5001 && xpHeroi <= 8000) {
                nivel = "Platina";
            } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
                nivel = "Ascendente";
            } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            console.log(`${nomeHeroi} está no nível ${nivel}.`);
            readline.close();
        });
    });
}

perguntarHeroi();