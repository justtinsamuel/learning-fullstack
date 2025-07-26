const Wine = require("./wines");
const View = require("./view");

class Controller {
  static showHelp() {
    View.showHelp();
  }

  static showWines() {
    let wines = Wine.getWines();
    View.show(wines);
  }

  static addWine(param) {
    Wine.addWine(param);
  }

  static sellWine(param) {
    Wine.sellWine(param);
  }

  static renameWine(param) {
    Wine.renameWine(param);
  }

  static findWineById(param) {
    const result = Wine.findWineById(param);
    View.show(result);
  }

  static message(msg) {
    View.message(msg);
  }

  static sortByGroup(param){
    Wine.sortByGroup(param);
  }
}

module.exports = Controller;
