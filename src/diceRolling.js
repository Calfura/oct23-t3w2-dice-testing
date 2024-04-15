

/**
 * Generate a random number between 1 and a given size.
 * @date 4/13/2024 - 1:08:40 PM
 * @author Wakka
 * 
 * @param [diceSize=6] - number representing the size of the dice you want to use
 * @returns  A random number between 1 and the given size
 */

function rollDice(diceSize = 6){
    let rollResult = Math.floor(Math.random() * diceSize) + 1;

    return rollResult;
}

/**
 * Generate a random number between 1 and a given size twice, and identify the highest number.
 * @date 4/13/2024 - 1:08:40 PM
 * @author Wakka
 * 
 * @param [diceSize=6] - number representing the size of the dice you want to use
 * @returns  Generate a random number between 1 and a given size twice, and identify the highest number.
 */

function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];

    result.finalResult = Math.max(...result.rolls);


    return result;
}

/**
 * Generate a random number between 1 and a given size twice, and identify the smallest number.
 * @date 4/13/2024 - 1:08:40 PM
 * @author Wakka
 * 
 * @param [diceSize=6] - number representing the size of the dice you want to use
 * @returns  Generate a random number between 1 and a given size twice, and identify the smallest number.
 */


function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ];

    result.finalResult = Math.min(...result.rolls);


    return result;
}

module.exports = {
    rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
}