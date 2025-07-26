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

// EXPORT
module.exports = {
    Cookie, Chocolate, Sweet, Strawberry
} 