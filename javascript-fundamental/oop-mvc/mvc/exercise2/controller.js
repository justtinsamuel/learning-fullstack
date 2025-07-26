const { TurtleBox } = require("./model");
const View = require("./view");

class Controller {
  static showHelp() {
    View.showHelp();
  }

  static message(msg) {
    View.message(msg);
  }

  static showBoxes() {
    try {
      const data = TurtleBox.getBoxes();
      View.showBoxes(data);
    } catch (err) {
      View.message(`❌ Error saat menampilkan box: ${err.message}`);
    }
  }

  static createBox(boxName) {
    try {
      TurtleBox.createBox(boxName);
      View.message(`✅ Box "${boxName}" berhasil dibuat.`);
    } catch (err) {
      View.message(`❌ Gagal membuat box: ${err.message}`);
    }
  }

  static addTurtle(boxId, turtleData) {
    try {
      TurtleBox.addTurtle(boxId, turtleData);
      View.message(`✅ Turtle berhasil ditambahkan ke dalam box.`);
    } catch (err) {
      View.message(`❌ Gagal menambahkan turtle: ${err.message}`);
    }
  }

  static sellTurtle(boxId, turtleId) {
    try {
      TurtleBox.sellTurtle(boxId, turtleId);
    } catch (err) {
      View.message(`❌ Gagal menjual turtle: ${err.message}`);
    }
  }

  static countTotalPrice(boxId) {
    try {
      const { boxName, totalPrice } = TurtleBox.countTotalPrice(boxId);
      View.message(
        `💰 Total harga turtle dalam box "${boxName}": Rp${totalPrice.toLocaleString(
          "id-ID"
        )}`
      );
    } catch (err) {
      View.message(`❌ Gagal menghitung harga total: ${err.message}`);
    }
  }

  static boxDetail(boxId) {
    try {
      TurtleBox.boxDetail(boxId);
    } catch (err) {
      View.message(`❌ Gagal menampilkan detail box: ${err.message}`);
    }
  }

  static filterPerSpecies(species) {
    try {
      const result = TurtleBox.filterBySpecies(species);

      if (result.length === 0) {
        View.message(`🧐 Tidak ditemukan turtle dengan species "${species}"`);
        return;
      }

      View.showFilteredTurtles(result, species);
    } catch (err) {
      View.message(`❌ Gagal memfilter turtle: ${err.message}`);
    }
  }
}

module.exports = Controller;
