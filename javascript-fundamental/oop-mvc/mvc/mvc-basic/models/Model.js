const fs = require("fs"); // import the file system module

class Coffee {
  constructor(id, name, price, beans, is_available) {
    this.id = +id; // unique identifier for the coffee
    this.name = name; // name of the coffee
    this.price = +price; // price of the coffee
    this.beans = beans; // type of beans used
    this.is_available = is_available; // availability status
  }

  // Static method to show all coffees
  static getCoffees() {
    // Take data from data.json file
    const coffees = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    return coffees;
  }

  // Static method to add a new coffee
  static add(param) {
    // create temporary variable to hold the coffee data
    let coffees = Coffee.getCoffees();

    // Destructure the parameter.
    const [name, price, beans] = param;

    // Generate a new id
    let id = coffees[coffees.length - 1].id + 1;

    // Set the default availability status
    const is_available = true;

    // Create a new Coffee instance and add it to the coffees array
    coffees.push(new Coffee(id, name, price, beans, is_available));
    this.save(coffees);
  }

  // static method to save updated coffees
  static save(coffees) {
    // Convert coffees to JSON string and write to data.json
    const coffeesString = JSON.stringify(coffees, null, 2);

    // Write the string to data.json
    fs.writeFileSync("./data.json", coffeesString);
  }

  // Static method to UPDATE a coffee using filter
  static update(param) {
    // Get the current coffees
    let coffees = Coffee.getCoffees();

    // Destructure the parameter.
    const [id, name, price, beans] = param;

    // find the coffee to update
    let coffeeToUpdate = coffees.find((coffee) => coffee.id === +id);

    // If coffee is found, update its properties
    if (coffeeToUpdate) {
      coffeeToUpdate.name = name || coffeeToUpdate.name; // Update name if provided
      coffeeToUpdate.price = price ? +price : coffeeToUpdate.price; // Update price if provided
      coffeeToUpdate.beans = beans || coffeeToUpdate.beans; // Update beans if provided
    }

    // Save the updated coffees
    this.save(coffees);
  }

  // Static method to DELETE a coffee
  static delete(param) {
    // Get the current coffees
    let coffees = Coffee.getCoffees();

    // Destructure the parameter.
    const [id] = param;

    // Filter out the coffee with the specified id
    coffees = coffees.filter((coffee) => coffee.id !== +id);

    // Save the updated coffees
    this.save(coffees);
  }

  // 
}
module.exports = Coffee; // Export the Coffee class for use in other files
// NO CONSOLE.LOG ALLOWED IN MODEL FILES
