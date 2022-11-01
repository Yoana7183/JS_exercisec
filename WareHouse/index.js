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
        // ADD NEW 25+ QUANTITY IF THERE IS LACK OF QUANTYITY//
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
                        // SUBSTRACT 5  FRTOM GIVEN ITEM (QUANTITY) FROM WAREHOUSE TO GIVE THEM TO THE STORE//
                        console.log(`GIVE 5 PRODUCT QUANTITY TO THE SHOP`);
                        prod.set(productName, upatetQuantity)
                        this.getStokes()

                    } else {
                        console.log(`You need to wait for new deliver of ${prodName}`);
                        // this.StockDelivery() WILL ADD X25 NEW QUANTITY IN WAREHOUSE//
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

// SINGLE OBJECT THAT TAKES CARE OF STOCK IN THE WAREHOUSE //
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
                    // GET 5 ITEM FROM WAREHOUSE(-5) AND ADD NEW 5 IN THE SHOP
                    goodsTakenFromTheWarehouse = wareHouse.takingGoods(p.product)
                    let newQuantity = quantity + 5
                    console.log(`Takes products from warehouse`);
                    prod.set(p, newQuantity)
                    this.getStokes()

                }
            });

        }
        return prod
    }

    sellProduct(product, cientQuantity) {

        let prod;
        // SUBSTRACT GIVEN CLIENT QUANTITY OF GIVEN PRODUCT IN THE SHOP//
        for (let i = 0; i < this.stockInShop.length; i++) {
            prod = this.stockInShop[i].products

            prod.forEach((quantity, item) => {

                if (item == product) {
                 
                    let quantityAfterSell = quantity - cientQuantity
                    prod.set(item, quantityAfterSell)
                    this.getStokes()
                    

                }
            })


        }
      return prod
    }


}


let shop1 = new Shop('Shop One')
shop1.addStokes(prodCategory1)
shop1.addStokes(prodCategory2)
shop1.addStokes(prodCategory3)

let shop2 = new Shop('Shop Two')
shop2.addStokes(prodCategory1)
shop2.addStokes(prodCategory2)
shop2.addStokes(prodCategory3)

let shop3 = new Shop('Shop Three')
shop3.addStokes(prodCategory1)
shop3.addStokes(prodCategory2)
shop3.addStokes(prodCategory3)



class Client {
    constructor(name) {
        this.name = name
        this.shoppingList = []
    }
    addShoppingList(product) {
        this.shoppingList.push(product)

    }
    getList() {
        console.log(this.shoppingList);
    }
    shopping(shop) {
        // RANDOM CHOICE OF PRODUCT (each client has a own list of products) AND QUANTITY (1-4)//
        let quantity = Math.floor(Math.random() * 4) + 1;
        let shopProduct = this.shoppingList[Math.floor(Math.random() * this.shoppingList.length)]
        //  shop.sellProduct(shopProduct, quantity) CALL SHOP FUNCTION WICH WILL SOLD THE GIVEN PRODUCT AND QUANTITY TO THE CLIENT//
        shop.sellProduct(shopProduct, quantity)

    }
}
//CLIENT WICH WILL SHOPPING IN SHOP 1
let client1 = new Client('Georgi Georgiev')
client1.addShoppingList(product4)
client1.addShoppingList(product3)
client1.addShoppingList(product2)
client1.addShoppingList(product1)
console.log(`${client1.name} is shopping in Shop One:}`);
client1.shopping(shop1)
client1.shopping(shop1)
client1.shopping(shop1)
client1.shopping(shop1)
console.log(`check if the warehouse has some shortage of products :`);
supplierOfGoodsInTheWarehouse.checkForGoodsShortage(wareHouse)
let client2 = new Client('Purvan Georgiev')
client2.addShoppingList(product9)
client2.addShoppingList(product8)
client2.addShoppingList(product1)
client2.addShoppingList(product2)
console.log(`${client2.name} is shopping in Shop One:}`);
client2.shopping(shop1);

let client3 = new Client('Ivan Georgiev')
client3.addShoppingList(product5)
client3.addShoppingList(product6)
client3.addShoppingList(product7)
client3.addShoppingList(product3)
console.log(`${client3.name} is shopping in Shop One:}`);
client3.shopping(shop1);

//CLIENT WICH WILL SHOPPING IN SHOP 2
let client4 = new Client('Dragan Georgiev')
client4.addShoppingList(product1)
client4.addShoppingList(product5)
client4.addShoppingList(product7)
client4.addShoppingList(product9)
console.log(`${client4.name} is shopping in Shop One:}`);
client4.shopping(shop2);

let client5 = new Client('Petkan Georgiev')
client5.addShoppingList(product4)
client5.addShoppingList(product8)
client5.addShoppingList(product1)
client5.addShoppingList(product2)
console.log(`${client5.name} is shopping in Shop One:}`);
client5.shopping(shop2);

let client6 = new Client('Ivan Ivanov')
client6.addShoppingList(product1)
client6.addShoppingList(product7)
client6.addShoppingList(product2)
client6.addShoppingList(product4)
console.log(`${client6.name} is shopping in Shop One:}`);
client6.shopping(shop2);

//CLIENT WICH WILL SHOPPING IN SHOP 3
let client7 = new Client('Gergana Georgieva')
client7.addShoppingList(product7)
client7.addShoppingList(product9)
client7.addShoppingList(product5)
client7.addShoppingList(product2)
console.log(`${client7.name} is shopping in Shop One:}`);
client7.shopping(shop3);

let client8 = new Client('Yordan Georgiev')
client8.addShoppingList(product1)
client8.addShoppingList(product3)
client8.addShoppingList(product6)
client8.addShoppingList(product9)
console.log(`${client8.name} is shopping in Shop One:}`);
client8.shopping(shop3);

let client9 = new Client('Kaloqn Georgiev')
client9.addShoppingList(product2)
client9.addShoppingList(product4)
client9.addShoppingList(product5)
client9.addShoppingList(product7)
console.log(`${client9.name} is shopping in Shop One:}`);
client9.shopping(shop3);