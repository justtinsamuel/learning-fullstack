// const command = process.argv; // to get file location
// const params = process.argv.slice(2); // to get the parameters passed in the command line
// // console.log(command);
// // console.log(params);

// let data = fs.readFileSync('./data.json', 'utf8'); // read the file synchronously
// console.log(data); // log the data to the console

// let cofees = JSON.parse(data); // parse the data to a JavaScript object
// console.log(cofees); // log the object

// const params = process.argv.slice(2); // to get the parameters passed in the command line

const command = process.argv[2]; // to get file location
const param = process.argv.slice(3); // to get the parameters passed in the command line
const fs = require("fs"); // import from file system input
const Controller = require("./controller/controller"); // import the controller

switch (command) {
  case "show":
    Controller.showCoffees();
    break;
  case "add":
    Controller.addCoffee(param);
    break;
  case "delete":
    Controller.deleteCoffee(param);
    break;
  case "update":
    Controller.updateCoffee(param);
    break;
  default:
    Controller.message("Command not recognized.");
    break;
}