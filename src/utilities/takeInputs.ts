import promptSync from 'prompt-sync';
const prompt = promptSync();


function askName () {
   const name = prompt('What is your name? '); 
   return name
}

function askBetMoney () {
    const bet = Number(prompt("Place your bet: "));
    return bet
}



// --------- exports ------------
export { askName,askBetMoney }
