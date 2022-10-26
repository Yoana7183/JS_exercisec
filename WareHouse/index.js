class Product {
    constructor(product) {
        this.product = product
    }
}

let product1 = new Product('Banana')
let product2 = new Product('Orange')
let product3 = new Product('Apple')

let product4 = new Product('Potato')
let product5 = new Product('Eggplant')
let product6 = new Product('Cucumber')

let product7 = new Product('Pork')
let product8 = new Product('Beef')
let product9 = new Product('Chicken')

class ProductCategory {
    constructor(categoryName) {
        this.categoryName = categoryName
        this.products = new Map()
    }

    addProduct(product, quantity) {
        this.products.set(product, quantity)
    }
}

let prodCategory1 = new ProductCategory('FRUITS')
prodCategory1.addProduct(product1, 15)
prodCategory1.addProduct(product2, 15)
prodCategory1.addProduct(product3, 15)
let prodCategory2 = new ProductCategory('VEGETABLES')
prodCategory2.addProduct(product4, 1)
prodCategory2.addProduct(product5, 15)
prodCategory2.addProduct(product6, 15)
let prodCategory3 = new ProductCategory('MEATS')
prodCategory3.addProduct(product7, 5)
prodCategory3.addProduct(product8, 15)
prodCategory3.addProduct(product9, 15)

class WareHouse {
    constructor(name) {
        this.name = name;
        this.productType = []
    }

    addProductType(productType) {
        this.productType.push(productType)
    }

    getStokes() {
        console.log(`FROM WAREHOUSE: `);
        console.log(this.productType);
    }

    StockDelivery() {
        let prod;

        for (let i = 0; i < this.productType.length; i++) {
            prod = this.productType[i].products

            prod.forEach((quantity, p) => {
                if (quantity <= 5) {
                    console.log(`DELIVER NEW QUONTITY IN WAREHOUSE`);
                    prod.set(p, 25)
                    this.getStokes()

                }
            });
        }
        return prod
    }

    takingGoods(prodName) {
        let prod;

        for (let i = 0; i < this.productType.length; i++) {
            prod = this.productType[i].products

            prod.forEach((quantity, productName) => {


                if (productName.product === prodName) {
                    if (quantity >= 5) {

                        let upatetQuantity = quantity - 5
                        console.log(`CUT QUONTITY OF CHOOSEN PRODUCT`);
                        prod.set(productName, upatetQuantity)
                        this.getStokes()

                    } else {
                        console.log(`You need to wait for new deliver of ${prodName}`);
                        this.StockDelivery()
                        this.getStokes()
                        this.takingGoods(prodName)
                    }

                }
            });




        }
    }
}


let wareHouse = new WareHouse('Flavors')
wareHouse.addProductType(prodCategory1)
wareHouse.addProductType(prodCategory2)
wareHouse.addProductType(prodCategory3)


let supplierOfGoodsInTheWarehouse = {
    name: 'Georgi',
    age: '20',
    checkForGoodsShortage: function (wareHouse) {
        wareHouse.StockDelivery()
        wareHouse.getStokes()
    }
}

class Shop {
    constructor(name) {
        this.name = name
        this.stockInShop = []
    }
    addStokes(stokeGroup) {
        this.stockInShop.push(stokeGroup)

    }
    getStokes() {
        console.log(`FROM SHOP:`);
        console.log(this.stockInShop);
    }
    takeGoodsFromWarehouse(wareHouse) {
        let prod;
        let goodsTakenFromTheWarehouse;

        for (let i = 0; i < this.stockInShop.length; i++) {
            prod = this.stockInShop[i].products

            prod.forEach((quantity, p) => {
                if (quantity <= 10) {
                    goodsTakenFromTheWarehouse = wareHouse.takingGoods(p.product)
                    let newQuantity = quantity + 5
                    console.log();
                    prod.set(p, newQuantity)
                    this.getStokes()

                }
            });

        }
        return prod
    }
    sellProduct(product,quantity) {

    }


}


let shop1 = new Shop('Shop One')
shop1.addStokes(prodCategory1)
shop1.addStokes(prodCategory2)
shop1.addStokes(prodCategory3)
// shop1.takeGoodsFromWarehouse(wareHouse)
// shop1.takeGoodsFromWarehouse(wareHouse)

// let shop2 = new Shop ('Shop Two')
// let shop3 = new Shop ('Shop Three')
// wareHouse.StockDelivery()
// wareHouse.takingGoods('Pork')
// wareHouse.takingGoods('Pork')
// wareHouse.takingGoods('Pork')
// wareHouse.takingGoods('Pork')


// wareHouse.takingGoods('Eggplant')
// wareHouse.takingGoods('Eggplant')

// console.log(`from stock: `);
// supplierOfGoodsInTheWarehouse.checkForGoodsShortage(wareHouse)

class Client {
    constructor(name) {
        this.name = name
    }
    shopping(shop) {
        let shopProduct ;

    }
}
let client1 = new Client('Georgi Georgiev')
client1.shopping(shop1);
let client2 = new Client('Purvan Georgiev')
let client3 = new Client('Ivan Georgiev')
let client4 = new Client('Dragan Georgiev')
let client5 = new Client('Petkan Georgiev')
let client6 = new Client('Ivan Ivanov')
let client7 = new Client('Gergana Georgieva')
let client8 = new Client('Yordan Georgiev')
let client9 = new Client('Kaloqn Georgiev')



