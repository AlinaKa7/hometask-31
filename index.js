const SIZE_SMALL = {
  price: 50, 
  calories: 20
}
const SIZE_LARGE = {
  price: 100,
  calories: 40
}
const STUFFING_CHEESE = {
  price: 10,
  calories: 20
}
const STUFFING_SALAD = {
  price: 20,
  calories: 5
}
const STUFFING_POTATO = {
  price: 15,
  calories: 10
}
const TOPPING_SAUCE = {
  price: 15,
  calories: 0
}
const TOPPING_MAYO = {
  price: 20,
  calories: 5
}

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  
  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculate() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (let topping of this.toppings) {
      totalCalories += topping.calories;
    }
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    for (let topping of this.toppings) {
      totalPrice += topping.price;
    }
    return totalPrice;
  }
}

// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
