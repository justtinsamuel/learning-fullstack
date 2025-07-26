const fs = require("fs");

class Wine {
  constructor(id, name, year, type, createdAt) {
    this.id = +id;
    this.name = name;
    this.year = +year;
    this.type = type;
    this.createdAt = createdAt;
  }

  static getWines() {
    const data = fs.readFileSync("wines.json", "utf-8");
    return JSON.parse(data);
  }

  static saveWines(wines) {
    fs.writeFileSync("wines.json", JSON.stringify(wines, null, 2));
  }

  static splitInput(param) {
    // split input string by "/"
    const [name, year, typeCode] = param.split("/");

    // define type code
    let type = "";
    switch (typeCode) {
      case "R":
        type = "Red";
        break;
      case "W":
        type = "White";
        break;
      default:
        type = "Other";
        break;
    }

    // return destructured version
    return { name, year: +year, type };
  }

  static addWine(param) {
    // collect all wines
    const wines = Wine.getWines();

    // destructure & method split string input into array
    const { name, year, type } = Wine.splitInput(param);

    // check if wine already exists & set default date
    const id = wines.length > 0 ? wines[wines.length - 1].id + 1 : 1;
    const createdAt = new Date().toISOString();

    // create new instance
    const newWine = new Wine(id, name, year, type, createdAt);

    // push new wine
    wines.push(newWine);

    // update wines.json
    Wine.saveWines(wines);
  }

  static sellWine(param) {
    // collect all wines
    const wines = Wine.getWines();

    // ID from param
    const id = +param[0];

    // find wine ID
    const index = wines.findIndex((wine) => wine.id === id);

    // remove wine if found
    if (index !== -1) {
      wines.splice(index, 1);
      Wine.saveWines(wines);
    }
  }

  static renameWine(param) {
    // collect wines
    const wines = Wine.getWines();

    // check ID param
    const id = +param[0];
    const newName = param[1];

    // find wine ID
    const wine = wines.find((wine) => wine.id === id);

    // update name if found
    if (wine) {
      wine.name = newName;
      Wine.saveWines(wines);
    }
  }

  static findWineById(param) {
    // collect wines
    const wines = Wine.getWines();

    // check ID param
    const id = +param[0];

    // find wine ID
    const wine = wines.find((wine) => wine.id === id);

    // return message when found:
    if (wine) {
        return `${wine.name} ${wine.year} is ${wine.type} with age of ${new Date().getFullYear() - wine.year} years.`;
    }
  }

  static sortByGroup(param) {
    // collect wines
    const wines = Wine.getWines();

    // check type param
    const type = param[0];

    // filter wines by type
    const filteredWines = wines.filter((wine) => wine.type.toLowerCase() === type.toLowerCase());

    // return filtered wines
    return filteredWines;
  }
}
module.exports = Wine;
