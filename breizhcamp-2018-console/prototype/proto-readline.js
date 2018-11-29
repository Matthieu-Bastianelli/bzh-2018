const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Vous allez bien ? : ', saisie => {console.log(`Vous avez saisi : ${saisie}`);
                                               rl.close();
                                              });