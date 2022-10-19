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
    constructor() {
        this.shoppingCart = new Map()


    }
    addProduct(product) {

        let key = product
        let value = 1
        this.shoppingCart.set(key, value)

        return this.shoppingCart


    }
    addProducts(product, quantity) {

        if (this.shoppingCart.has(product)) {
            let updatedValue = this.shoppingCart.get(product) + quantity
            this.shoppingCart.set(product, updatedValue)
            return this.shoppingCart
        }

        let key = product
        let value = quantity
        this.shoppingCart.set(key, value)
        return this.shoppingCart

    }
    removeProductFromCart(product) {
        if (this.shoppingCart.has(product)) {
            let updatedValue = this.shoppingCart.get(product) - 1
            this.shoppingCart.set(product, updatedValue)
            return this.shoppingCart
        } else {
            console.log(`There is no such product in your cart`);
        }

    }
    removeProductsFromCart(product, quantity) {
        if (this.shoppingCart.has(product)) {
            let updatedValue = this.shoppingCart.get(product) - quantity
            this.shoppingCart.set(product, updatedValue)
            return this.shoppingCart
        } if (this.shoppingCart.has(product) && this.shoppingCart.get(product) === 0) {
            this.shoppingCart.delete(product)
            return this.shoppingCart
        }

        else { console.log(`There is no such product in your cart`); }
    }



    calculateTotalPrice() {
        let totalPrice = 0
        this.shoppingCart.forEach((quantity, product) => {
            totalPrice += product.price * quantity
        });

        return totalPrice.toFixed(2)
    }
    productDiscount() {
        let totalPrice=0
        let pricing=0
        let updatedPrice = 0
        this.shoppingCart.forEach((quantity, product) => {
            pricing = product.price * quantity

            if (pricing > 10) {
                updatedPrice += pricing - ((pricing * 10) / 100)
             
            }
           totalPrice += pricing 
            
        });

        console.log(updatedPrice);
        console.log(totalPrice);



    }
}
let product1 = new Product('MilkyBio', 20.10)
let product2 = new Product('Маджаров ', 49)
let product3 = new Product('ДОБРУДЖА', 1.90)
let product4 = new Product('AGFA Photo', 4.80)
let product5 = new Product('MilkyWay', 2.80)
let product6 = new Product('Coca-Cola 1l', 1.90)
let product7 = new Product('Coca-Cola 2l', 2.90)
let product8 = new Product('Coca-Cola zero 2l', 2.95)
let product9 = new Product('OralB', 0.99)



let cart = new ShoppingCart()


console.log(cart.addProduct(product1));
console.log(cart.addProduct(product2));
console.log(cart.addProduct(product3));
console.log(cart.addProduct(product5));
console.log(cart.addProduct(product7));
console.log(cart.addProduct(product8));
console.log(cart.addProducts(product1, 4));
console.log(cart.removeProductFromCart(product1));
console.log(cart.removeProductFromCart(product8));
console.log(cart.removeProductsFromCart(product1, 2));
console.log(cart.calculateTotalPrice());
console.log(cart.productDiscount());

