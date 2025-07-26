const fs = require("fs");
const Controller = require("./controller");
const [, , command, ...params] = process.argv;

// CLI Router
switch (command) {
  case "help":
    Controller.showHelp();
    break;

  case "show":
    Controller.showBoxes();
    break;

  case "create":
    if (!params[0]) {
      Controller.message("Masukkan nama box yang ingin dibuat.");
    } else {
      Controller.createBoxes(params.join(" "));
    }
    break;

  case "add":
    if (params.length < 7) {
      Controller.message(
        "❗ Format: add <boxId> <name> <species> <size> <weight> <price> <pattern1,pattern2,...>"
      );
    } else {
      const [boxId, name, species, size, weight, price, patternString] = params;
      const turtleData = {
        name,
        species,
        size: Number(size),
        weight: Number(weight),
        price: Number(price),
        patterns: patternString.split(","),
      };
      Controller.addTurtle(Number(boxId), turtleData);
    }
    break;

  case "sell":
    if (params.length < 2) {
      Controller.message("❗ Gunakan format: sell <boxId> <turtleId>");
    } else {
      Controller.sellTurtle(Number(params[0]), Number(params[1]));
    }
    break;

  case "countPrice":
    if (!params[0]) {
      Controller.message("❗ Masukkan ID box untuk menghitung total harga.");
    } else {
      Controller.countTotalPrice(Number(params[0]));
    }
    break;

  case "detail":
    if (!params[0]) {
      Controller.message("❗ Masukkan ID box yang ingin dilihat detailnya.");
    } else {
      Controller.boxDetail(Number(params[0]));
    }
    break;

  case "filter":
    if (!params[0]) {
      Controller.message("Masukkan nama spesies yang ingin difilter.");
    } else {
      Controller.filterPerSpecies(params[0]);
    }
    break;

  default:
    command === undefined
      ? Controller.message(`Silakan masukkan perintah.`)
      : Controller.message(`Perintah tidak dikenali: ${command}`);
    break;
}
