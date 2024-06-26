
/**
 * Description placeholder
 *
 * @param {number} [diceSize=6]
 * @returns {*}
 */
function rollDice(diceSize=6) {
    let rollResult = Math.floor(Math.random() * diceSize) + 1

    return rollResult;
}

function rollDiceWithAdvantage(diceSize=6){
    let result={
        finalResult: null,
        rolls:  []
    }

    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]

    result.finalResult =Math.max(...result.rolls);
    
    return result;
}

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