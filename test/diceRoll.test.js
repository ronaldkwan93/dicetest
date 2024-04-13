const { rollDice } = require("../diceRolling")

beforeEach(()=> {

    console.log("A test has been started!")
})

afterEach(()=> {
    console.log("A test has finished!")
})

beforeAll(() => {
    console.log("Testing will begin!")
})

describe('As a casual gamer', () => {
  
    test('... i want to roll a 6-sided dice...', () => {
      
        let result = rollDice();

        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThanOrEqual(6);

    })
    
})

describe('As a dungeon master...', () => {
  
    describe('... I want to roll a variety of dice sizes...', () => {
      
        test('D6', () => {
            let result = rollDice(6);

            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThanOrEqual(6);
        })
        
        test('D8', () => {
            let result = rollDice(8);

            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThanOrEqual(8);
        })

        test('D10', () => {
            let result = rollDice(10);

            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThanOrEqual(10);
        })

        test('D12', () => {
            let result = rollDice(12);

            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThanOrEqual(12);
        })

        test('D20', () => {
            let result = rollDice(20);

            expect(result).toBeGreaterThan(0);
            expect(result).toBeLessThanOrEqual(20);
        })
        
        
    })
    
})
