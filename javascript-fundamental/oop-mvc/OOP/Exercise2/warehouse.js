const { Vegetable } = require("./vegetable");
const { Fruit } = require("./fruit");

class Warehouse {
  constructor(Carts, totalPrice, LastId) {
    this.Carts = Carts || [];
    this.totalPrice = totalPrice || 0;
    this.LastId = LastId || 0;
  }

  // Method to add a fruit and vegetable to the warehouse
  harvest(name, type, price) {
    // create if the type is Vegetable
    if (type === "Vegetable") {
      this.LastId += 1;
      const vegetableId = this.LastId;
      const vegetable = new Vegetable(
        vegetableId,
        name,
        "Vegetable",
        price,
        Math.floor(Math.random() * 100) + 1, // Harvested between 1 - 100
        new Date()
      );
      vegetable.shippedAmount = 0; // Initialize shipped amount
      this.Carts.push(vegetable);
    }

    // create if the type is Fruit
    if (type === "Fruit") {
      this.LastId += 1;
      const FruitId = this.LastId;
      const fruit = new Fruit(
        FruitId,
        name,
        "Fruit",
        price,
        Math.floor(Math.random() * 100) + 1,
        new Date()
      );
      fruit.shippedAmount = 0; // Initialize shipped amount
      this.Carts.push(fruit);
    }
  }

  // Method to ship fruits and vegetables from the warehouse
  // cant ship if the amount is less than 0
  ship(itemId, quantity) {
    const item = this.Carts.find((item) => item.id === itemId);
    
    if (!item) {
      console.log(`Item with ID ${itemId} not found.`);
      return;
    }

    if (item.amount < quantity) {
      console.log(`Not enough stock to ship ${quantity} of ${item.name}.`);
      return;
    }

    item.amount -= quantity;
    item.shippedAmount = (item.shippedAmount || 0) + quantity; // Update shipped amount
    console.log(`Shipped ${quantity} of ${item.name}. Remaining amount: ${item.amount}`);
  }

  // Method to show all carts in the warehouse
  showCarts() {
    console.log(`Carts in the warehouse:`);
    if (this.Carts.length > 0) {
      this.Carts.forEach((item) => {
        console.log(
          `${item.id}. ${item.name} (${item.type}) - Price: Rp. ${item.price}, Amount: ${item.amount}`
        );
      });
    } else {
      console.log(`No items in the warehouse.`);
    }
  }

  showCartsTable() {
    console.table(
      this.Carts.map((item) => ({
        ID: item.id,
        Name: item.name,
        Type: item.type,
        Price: `Rp. ${item.price}`,
        Amount: item.amount,
        HarvestedAt: item.harvestedAt.toLocaleString(),
      }))
    );
  }

    // Method to sell items that have already been shipped
  sell(itemId, quantity) {
    const item = this.Carts.find((item) => item.id === itemId);
    if (!item) {
      console.log(`Item with ID ${itemId} not found.`);
      return;
    }

    if (item.shippedAmount < quantity) {
      console.log(`Not enough shipped stock to sell ${quantity} of ${item.name}.`);
      return;
    }

    item.shippedAmount -= quantity;
    this.totalPrice += item.price * quantity; // Update total price

    console.log(`Sold ${quantity} of ${item.name}. Total price: Rp. ${item.price * quantity}`);
  }

  showTotalPrice() {
    console.log(`Total price of all sold items: Rp. ${this.totalPrice}`);
  }

  resetWarehouse() {
    this.Carts = [];
    this.totalPrice = 0;
    console.log(`Warehouse has been reset.`);
  }
}

module.exports = Warehouse;
