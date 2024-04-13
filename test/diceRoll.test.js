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
      

        let diceVarieties = [
			{
				diceSize: 4,
				diceName: "D4"
			},
			{
				diceSize: 6,
				diceName: "D6"
			},
			{
				diceSize: 8,
				diceName: "D8"
			},
			{
				diceSize: 10,
				diceName: "D10"
			},
			{
				diceSize: 12,
				diceName: "D12"
			},
			{
				diceSize: 20,
				diceName: "D20"
			},
			{
				diceSize: 100,
				diceName: "D100"
			},
		];

		test.each(diceVarieties)("$diceName", (diceObject) => {
			let diceResult = rollDice(diceObject.diceSize);
			expect(diceResult).toBeGreaterThan(0);
			expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize);
		});

        // test('D6', () => {
        //     let result = rollDice(6);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(6);
        // })
        
        // test('D8', () => {
        //     let result = rollDice(8);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(8);
        // })

        // test('D10', () => {
        //     let result = rollDice(10);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(10);
        // })

        // test('D12', () => {
        //     let result = rollDice(12);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(12);
        // })

        // test('D20', () => {
        //     let result = rollDice(20);

        //     expect(result).toBeGreaterThan(0);
        //     expect(result).toBeLessThanOrEqual(20);
        // })
        
        
    })

    describe('... i want to see how many natural 20s I get ina session when i roll 1000 20s', () => {
      let diceResults = [];

      for(let index =0; index < 1000; index++){
        diceResults.push(rollDice(20));
      }
      console.log(diceResults);
      console.log(diceResults.length);

      let arrayOfNaturalResults = diceResults.filter((result) => result ==20);
      console.log("Number of natural 20s is: " + arrayOfNaturalResults.length);
      
      expect(diceResults.length).toBe(1000);
      expect(diceResults).toContain(20);

    })
    
    
})
