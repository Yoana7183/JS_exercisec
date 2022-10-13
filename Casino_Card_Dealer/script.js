class Casino {
    constructor(players, sizeDeck) {
        this.players = players;
        this.sizeDeck = sizeDeck
        this.cards = []
    }

    createDeckOfCard() {
        let card;
        for (let i = 1; i < this.sizeDeck + 1; i++) {
            card = [i]
            this.cards.push(card)
        }
        return this.cards
    }
    shuffleDeck() {

        this.cards = this.cards.sort(function () {

            return Math.random() - 0.5;
        });
        return this.cards

    }
    dealingCards() {

        if(this.cards.length===0){
            console.log(`There is no more cards in the deck`);
            return;
        }
        for (let i = this.players * 3; i >= 1; i--) {
            this.cards.pop()

        }

        console.log(`Players are ${this.players}, each of them receive 3 cards. 
        In the deck left ${this.cards.length} for dealing 
        `);
        return this.cards

    }

}




casinoPlayers = new Casino(2, 52)

casinoPlayers.createDeckOfCard()
casinoPlayers.shuffleDeck()
casinoPlayers.dealingCards()
casinoPlayers.dealingCards()
casinoPlayers.dealingCards()