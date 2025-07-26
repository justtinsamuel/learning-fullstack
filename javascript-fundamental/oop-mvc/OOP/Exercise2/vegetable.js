class Vegetable {
  constructor(id, name, type, price, amount, harvestedAt) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.amount = amount;
    this.harvestedAt = harvestedAt;
  }
}

class Potato extends Vegetable {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

class Carrot extends Vegetable {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

class OtherVegetable extends Vegetable {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

module.exports = { Vegetable, Potato, Carrot, OtherVegetable };
