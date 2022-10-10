class LoteryNumberGenerator {
    constructor(drawCount, lottaryType) {
        this.drawCount = drawCount
        this.lottaryType = lottaryType

    }

    definignTheGame() {
        const arrayOfTheDefinedGameNumbers = []

        for (let i = this.lottaryType; i > 0; i--) {
            arrayOfTheDefinedGameNumbers.push(i)
        }
        return arrayOfTheDefinedGameNumbers
    }


    drawingOfWinningNumbers() {
        const winningNumbers = []
        let winningNumber;
        let definedGame = this.definignTheGame()


        while (winningNumbers.length < this.drawCount) {
            winningNumber = Math.floor(Math.random() * definedGame.length) + 1
            if (winningNumbers.indexOf(winningNumber) === -1) {
                winningNumbers.push(winningNumber)
            }
        }

        return winningNumbers

    }

}

class Lotary {
    constructor(lotaryGame) {
        this.lotaryGame = lotaryGame
    }

}

let numbersForLotary = new LoteryNumberGenerator(6, 49)
let lotary = new Lotary(numbersForLotary.drawingOfWinningNumbers())

class Citizen {
    constructor(name, lotaryGame) {
        this.name = name
        this.lotaryGame = lotaryGame
    }

    getName() {
        return this.name
    }
    getPlayedNumbers() {
        return (this.lotaryGame)
    }
}

let numbersForPlayers = new LoteryNumberGenerator(6, 49)


let player_1 = new Citizen('Ivan Ivanov', numbersForPlayers.drawingOfWinningNumbers())
let player_2 = new Citizen('Petar Petrov', numbersForPlayers.drawingOfWinningNumbers())
let player_3 = new Citizen('Georgi Georgiev', numbersForPlayers.drawingOfWinningNumbers())
let player_4 = new Citizen('Ivanka Georgieva', numbersForPlayers.drawingOfWinningNumbers())

console.log(`Player name: ${player_1.getName()}, Played numbers : ${player_1.getPlayedNumbers()} `);
console.log(`Player name: ${player_2.getName()}, Played numbers : ${player_2.getPlayedNumbers()} `);
console.log(`Player name: ${player_3.getName()}, Played numbers : ${player_3.getPlayedNumbers()} `);
console.log(`Player name: ${player_4.getName()}, Played numbers : ${player_4.getPlayedNumbers()} `);

class Winner {
    constructor(player, lotary) {
        this.player = player;
        this.lotary = lotary;
    }

    checkForWinningCombinationsOfNumbers() {
        let lotary = this.lotary.lotaryGame;
        let playedNum = this.player.lotaryGame;
        const winningCombinationsOfNumbers = []

        for (let i = 0; i < lotary.length; i++) {
            if (lotary.indexOf(playedNum[i]) > -1) {
                winningCombinationsOfNumbers.push(playedNum[i])
            }
        }
        return winningCombinationsOfNumbers
    }

    defineTheProfit() {

        let winningCombination = this.checkForWinningCombinationsOfNumbers()
        if (this.lotary.lotaryGame.length) {
            switch (winningCombination.length) {
                case 2:
                    console.log(`${this.player.name} is having 2 winning numbers : " ${winningCombination}" and WON 50 BGN`)
                    break;

                case 3:
                    console.log(`${this.player.name} is having 3 winning numbers : " ${winningCombination}" and WON 500 BGN`)
                    break;
                default: console.log(`${this.player.name} you guess only one number or none at all.`);
            }
        }

        if (this.lotary.lotaryGame.length === 5) {
            switch (winningCombination) {
                case 4:
                    console.log(`${this.player.name} is having 4 winning numbers : " ${winningCombination}" and WON 50 000 BGN`)
                    break;

                case 5:
                    console.log(`${this.player.name} is having 5 winning numbers : " ${winningCombination}" and WON JACKPOT 5 000 000 BGN`)
                    break;

            }
        }

        if (this.lotary.lotaryGame.length === 6) {
            switch (winningCombination) {
                case 4:
                    console.log(`${this.player.name} is having 4 winning numbers : " ${winningCombination}" and WON 5 000 BGN`)
                    break;

                case 5:
                    console.log(`${this.player.name} is having 5 winning numbers : " ${winningCombination}" and WON 50 000 BGN`)
                    break;

                case 6:
                    console.log(`${this.player.name} is having 6 winning numbers : " ${winningCombination}" and WON JACKPOT 5 000 000 BGN`)
                    break;

            }
        }


    }
}


let check_1 = new Winner(player_1, lotary)
console.log(check_1);
console.log(check_1.checkForWinningCombinationsOfNumbers());
console.log(check_1.defineTheProfit());

let check_2 = new Winner(player_2, lotary)
console.log(check_2);
console.log(check_2.checkForWinningCombinationsOfNumbers());
console.log(check_2.defineTheProfit());

let check_3 = new Winner(player_3, lotary)
console.log(check_3);
console.log(check_3.checkForWinningCombinationsOfNumbers());
console.log(check_3.defineTheProfit());

let check_4 = new Winner(player_4, lotary)
console.log(check_4);
console.log(check_4.checkForWinningCombinationsOfNumbers());
console.log(check_4.defineTheProfit());