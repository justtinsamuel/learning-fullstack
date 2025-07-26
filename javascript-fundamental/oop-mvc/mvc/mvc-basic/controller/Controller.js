// Controller: Logika yang menghubungkan Model dan View

const Coffee = require("../models/Model.js"); // Assuming you have a model file
const View = require("../views/view"); // Assuming you have a view file

class Controller {
  static showCoffees() {
    let coffees = Coffee.getCoffees(); // Get coffee data from the model
    View.show(coffees); // Pass the data to the view to display
    // Logic to show all coffees
  }

  static addCoffee(param) {
    Coffee.add(param); // Logic to add a coffee
  }

  static deleteCoffee(param) {
    Coffee.delete(param);
  }

  static updateCoffee(param) {
    Coffee.update(param);
  }

  static message(msg) {
    console.log(msg);
  }
}

module.exports = Controller; // Export the Controller class for use in other files