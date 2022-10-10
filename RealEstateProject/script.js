class RealEstate {
    constructor(type, squareMeters, adress) {
        this.constructor.counter = (this.constructor.counter || 0) + 1;
        this.id = this.constructor.counter;
        this.type = type;
        this.squareMeters = squareMeters;
        this.adress = adress
    }
}

const realEstatesData = []
let office1 = new RealEstate('office', 120, 'sofia 206')
let apartment1 = new RealEstate('apartment', 67, 'sofia 101')
let office2 = new RealEstate('office', 100, 'sofia 206')
let land1 = new RealEstate('land', 100000, 'Elin Pelin 100')
let land2 = new RealEstate('land', 500, 'Elin Pelin 100')
realEstatesData.push(office1, apartment1, office2, land1, land2)
console.log(realEstatesData);



class PriceCalculation {

    constructor(realEstateType, marketPrice) {
        this.realEstateType = realEstateType
        this.marketPrice = marketPrice
    }

    calculateSingleAsset(realEstate) {

        if (realEstate.type === this.realEstateType) {
            return realEstate.squareMeters * this.marketPrice
        }
        return 0;
    }

    calculate(realEstates) {

        let totalMarketPrice = 0
        for (let i = 0; i < realEstates.length; i++) {
            let realEstatesType = realEstates[i].type
            let realEstateSquareMeters = realEstates[i].squareMeters

            if (realEstatesType === this.realEstateType) {
                totalMarketPrice += realEstateSquareMeters * this.marketPrice
            }
        }
        return totalMarketPrice
    }
}

class AssetCalculation {

    constructor(realEstates) {
        this.realEstates = realEstates

    }

    getPriceCalculations() {
        let apartment = new PriceCalculation('apartment', 1400)
        let office = new PriceCalculation('office', 1200)
        let land = new PriceCalculation('land', 800)
        const marketPrices = []
        marketPrices.push(apartment, office, land)
        return marketPrices
    }

    calculateAssetUnderManage() {

        let totalMarketPrice = 0
        let marketPrices = this.getPriceCalculations()

        for (let i = 0; i < marketPrices.length; i++) {
            let price = marketPrices[i].calculate(realEstatesData)
            totalMarketPrice += price
        }
        return totalMarketPrice
    }

    findNetWorthForAsset(assetType) {

        let marketPrices = this.getPriceCalculations()
        let totalAssetTypePice = 0

        for (let i = 0; i < marketPrices.length; i++) {
            if (assetType === marketPrices[i].realEstateType) {
                totalAssetTypePice = marketPrices[i].calculate(realEstatesData)
            }
        }
        return totalAssetTypePice
    }

    findRealEstateByID(id) {

        let marketPrices = this.getPriceCalculations()
        let realEstateByID;

        for (let j = 0; j < realEstatesData.length; j++) {
            if (realEstatesData[j].id === id) {
                realEstateByID = realEstatesData[j];
            }
        }
        if (realEstateByID === undefined) {
            console.log(`There is no real estate with such ID`)
            return 0
        }

        for (let i = 0; i < marketPrices.length; i++) {
            if (realEstateByID.type === marketPrices[i].realEstateType) {
                return marketPrices[i].calculateSingleAsset(realEstateByID);
            }
        }
        return 0;
    }
}

let asset1 = new AssetCalculation(realEstatesData)
console.log(`Total market price ${asset1.calculateAssetUnderManage()} EUR`);
console.log(`Net worth price for offices ${asset1.findNetWorthForAsset('office')} EUR `);
console.log(`Net worth price for apartments ${asset1.findNetWorthForAsset('apartment')} EUR `);
console.log(`Net worth price for lands ${asset1.findNetWorthForAsset('land')} EUR `);
console.log(`Net worth price by ID ${asset1.findRealEstateByID(2)} EUR `);
