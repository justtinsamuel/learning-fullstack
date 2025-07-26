const command = process.argv[2];
const param = process.argv.slice(3);
const fs = require("fs");
const Controller = require('./controller');

switch (command) {
    case "help":
        Controller.showHelp();
        break;
    case "wines":
        Controller.showWines();
        break;
    case "add":
        Controller.addWine(param[0]);
        break;
    case "sell":
        Controller.sellWine(param);
        break;
    case "rename":
        Controller.renameWine(param);
        break;
    case "findById":
        Controller.findWineById(param);
        break;
    case "sort":
        Controller.sortByGroup(param);
        break;
    default:
        command === undefined
        ? Controller.message(`Please provide a command.`)
        : Controller.message(`unknown command: ${command}`);
}