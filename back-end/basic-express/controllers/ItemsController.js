class ItemController {
  static getItems(req, res) {
    res.json({
      message: "item main page",
    });
  }
}

module.exports = ItemController;
