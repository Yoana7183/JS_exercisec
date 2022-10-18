// Task DescriptionCreate a simple Shopping Cart application.
//  Implement a ShoppingCart class with the following methods: 
// •  addProduct (Product p, int amount )•  addProduct (Product p ) – adds amount 1 of Product in shopping cart.
// •  removeProduct(Product p, int amount )•  removeProduct(Product p) - removes amount 1 of Product in shopping cart.
// •  calculateTotalPrice() – calculates the total price of all products in the shopping cart.
// Implement 2 different kind of discounts when calculating total price:
// •  If the amount for a Product is more than 10, the price for that product should be discounted with 10%.
// •  If the price of the whole shopping cart exceeds 1000, the total price should be discounted with 5%.



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