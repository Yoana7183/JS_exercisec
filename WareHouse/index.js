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
    ;

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
        console.log(this.productType);
    }

    StockDelivery() {
        let prod;
        let key;
        let quantity;
        for (let i = 0; i < this.productType.length; i++) {
            
            prod = this.productType[i].products
          
            key = this.productType[i].products.keys()
           quantity = prod.get(...key)
           
           console.log(quantity);
        }
        




    }



}


let wareHouse = new WareHouse('Flavors')
wareHouse.addProductType(prodCategory1)
wareHouse.addProductType(prodCategory2)
wareHouse.addProductType(prodCategory3)


wareHouse.StockDelivery()