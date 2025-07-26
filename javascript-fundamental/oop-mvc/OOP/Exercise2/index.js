// import from warehouse.js
const { Vegetable, Fruit } = require("./vegetable");
const Warehouse = require("./warehouse");


// Create a new warehouse instance
const warehouse = new Warehouse([]);

// Harvest some vegetables and fruits
warehouse.harvest("Carrot", "Vegetable", 5000);
warehouse.harvest("Potato", "Vegetable", 3000);
warehouse.harvest("OtherVegetable", "Vegetable", 10000);
warehouse.harvest("Apple", "Fruit", 10000);
warehouse.harvest("Orange", "Fruit", 8000);
warehouse.harvest("OtherFruit", "Fruit", 12000);

// Show all items in the warehouse
warehouse.showCartsTable();

// ship some items
warehouse.ship(1, 3); // Ship 3 Carrots
warehouse.ship(4, 2);  // Ship 2 Apples
warehouse.ship(2, 5); // Ship 5 Potatoes

// Show all items in the warehouse after shipping
warehouse.showCartsTable();

// Sell some items that already shipped
warehouse.sell(1, 4); // Sell 4 Carrots
warehouse.sell(4, 2); // Sell 2 Apples
warehouse.sell(2, 5); // Sell 5 Potatoes

// Show Updated total price after selling
warehouse.showTotalPrice();