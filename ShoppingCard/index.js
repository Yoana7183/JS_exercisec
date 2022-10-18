class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

}
class ShoppingCart {
    constructor(products) {
        this.products = products
        this.shoppingCart = []


    }
    add() {

        let productList = new Map()
        for (let i = 0; i < this.products.length; i++) {
            let key = this.products[i].name
            let element = this.products[i].price
            productList.set(key, element)

        }

        return productList
    }
    addToCart(name, quantity) {
        let productList = this.add()

        let price = productList.get(name) * quantity
        this.shoppingCart.push(price)

        return this.shoppingCart

    }
    removeProductFromCart(name, quantity) {
        //   let item =   this.shoppingCart.indexOf(name)
        console.log(this.shoppingCart);

    }
}

let product1 = new Product('MilkyBio', 20.10)
let product2 = new Product('Маджаров ', 49)
let product3 = new Product('ДОБРУДЖА', 1.90)
let product4 = new Product('AGFA Photo', 4.80)
const products = []
products.push(product1, product2, product3, product4)

let cart = new ShoppingCart(products)

console.log(cart.add());
console.log(cart.addToCart('ДОБРУДЖА', 4));
console.log(cart.addToCart('Маджаров ', 0.2));
console.log(cart.removeProductFromCart('Маджаров ', 1));