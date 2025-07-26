space = () => console.log('\n');
const Kitchen = require(`./kitchen`);

// Buat Object Kitchen
const newKitchen = new Kitchen([]);

// CREATE
newKitchen.showCookie()
console.log("\n");

console.log(`Added 3 ITEM:`);
newKitchen.bake("Brown Cookie", 1000, ["Milk", "Choco Powder"], "Chocolate");
newKitchen.bake("Dark Cookie", 1100, ["Milk", "Choco Powder", "Dark Chocolate"], "Chocolate");
newKitchen.bake("Original", 990, ["Sugar", 'Milk', "Water"], "Sweet");
newKitchen.bake("Strawberry Cookie", 690, ["Honey", 'Milk', "Strawberry"], "Strawberry");
newKitchen.bake("Strawberry Mint", 700, ["Mint", "Honey", 'Milk', "Strawberry"], "Strawberry");

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
newKitchen.showCookieTable();
space();

// SHOW ARRAY INSIDE OBJECT
newKitchen.showIngredients();
space();

// Filter by Ingredients
newKitchen.filterByIngredient('Milk');
space();
newKitchen.sortByPrice('asc');
space();
newKitchen.groupByType();
space();
newKitchen.clearCookies();
space();
newKitchen.showCookie();