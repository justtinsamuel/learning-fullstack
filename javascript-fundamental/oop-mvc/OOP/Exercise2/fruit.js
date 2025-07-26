class Fruit {
  constructor(id, name, type, price, amount, harvestedAt) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.amount = amount;
    this.harvestedAt = harvestedAt;
  }
}

class Apple extends Fruit {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

class Orange extends Fruit {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

class OtherFruit extends Fruit {
  constructor(id, name, type, price, amount, harvestedAt) {
    super(id, name, type, price, amount, harvestedAt);
  }
}

module.exports = { Fruit, Apple, Orange, OtherFruit };