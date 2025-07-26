/*
Exercise 1 CHEF
*/

// MAIN CLASS
class Cookie {
  constructor(id, name, price, ingredients = [], type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.type = type;
  }
}

// SUB-CLASS
class Chocolate extends Cookie {
  constructor(id, name, price, ingredients = [], isSweet = false) {
    super(id, name, price, ingredients, "Chocolate");
    this.isSweet = isSweet;
  }
}

class Sweet extends Cookie {
  constructor(id, name, price, ingredients = [], isSweet = false) {
    super(id, name, price, ingredients, "Sweet");
    this.isSweet = isSweet;
  }
}

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients = [], isSweet = false) {
    super(id, name, price, ingredients, "Strawberry");
    this.isSweet = isSweet;
  }
}

// FACTORY CLASS
class Kitchen {
  // Kitchen memiliki sebuah CONTAINER
  constructor(container = []) {
    this.container = container;
  }

  // METHOD, untuk CREATE.
  bake(name, price, ingredients, type, isSweet = false) {
    // Generate ID
    let id =
      this.container.length === 0
        ? 1
        : this.container[this.container.length - 1].id + 1;

    // Switch Case to PUSH to Container
    switch (type) {
      case "Chocolate":
        this.container.push(
          new Chocolate(id, name, price, ingredients, isSweet)
        );
        break;
      case "Sweet":
        this.container.push(new Sweet(id, name, price, ingredients, isSweet));
        break;
      case "Strawberry":
        this.container.push(
          new Strawberry(id, name, price, ingredients, isSweet)
        );
        break;
      default:
        console.log(`Wrong Input: ${type} is not a valid cookie type.`);
    }
  }

  // METHOD, untuk DELETE.
  eat(id) {
    this.container = this.container.filter(
      (tempContainer) => tempContainer.id !== id
    );
  }

  // METHOD, untuk UPDATE.
  addSugar(id) {
    this.container = this.container.map((thisCookie) => {
      if (thisCookie.id === id) {
        thisCookie.isSweet = true;
      }
      return thisCookie; 
    });
  }

  // METHOD, untuk READ.
  showCookie() {
    console.log(`Here are the list of your Cookie:`);

    if (this.container.length === 0) {
      console.log(`Currently there is nothing here!`);
    } else {
      this.container.forEach((item) => {
        const { id, name, price, ingredients, type, isSweet } = item;
        console.log(
          `${id}. ${name}, ${price}, ${ingredients}, ${type}, ${isSweet}`
        );
      });
    }
    console.log (`________________________________________________________________`);
  }

  showCookieTable(){
    console.table(this.container);
  }
}

// Buat Object Kitchen
const newKitchen = new Kitchen([]);

// CREATE
newKitchen.showCookie()
console.log("\n");

console.log(`Added 3 ITEM:`);
newKitchen.bake("Brown Cookie", 1000, ["Milk", "Choco Powder"], "Chocolate");
newKitchen.bake("Original", 990, ["Sugar", "Water"], "Sweet");
newKitchen.bake("Strawberry Cookie", 690, ["Honey", "Strawberry"], "Strawberry");

// READ
newKitchen.showCookie()
newKitchen.showCookieTable()

// UPDATE
console.log(`Updated Sugar Level:`);
newKitchen.addSugar(1, true)
newKitchen.showCookieTable()

// DELETE
console.log(`Deleted Item:`);
newKitchen.eat(2)
newKitchen.showCookieTable()

