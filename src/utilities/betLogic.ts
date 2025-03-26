import {askBetMoney} from './takeInputs';
import { getPlayerMoney, setPlayerMoney } from './playerMoney';

const betMoney = askBetMoney();


function placeaskBetMoney() 
{
    if (isNaN(betMoney)) {
        console.log("Invalid askBetMoney. Please enter a number.",'\n');
        placeaskBetMoney();
    } else if (betMoney > getPlayerMoney()) {
        console.log(`You askBetMoney more money than you have. You have $${getPlayerMoney()}.`, '\n');
        placeaskBetMoney();
    }
    else if (betMoney <= 0) {
        console.log(`You askBetMoney less money than you have. You have $${getPlayerMoney()}.`, '\n');
        placeaskBetMoney();
    } else {
        setPlayerMoney(getPlayerMoney() - betMoney);
        console.log(`You askBetMoney $${askBetMoney} . Left: $${getPlayerMoney()}.`, '\n');
    }
}