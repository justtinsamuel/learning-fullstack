class TypeController {
  static getType(req, res) {
    res.json({
      message: "Type main page",
    });
  }

  static add(req, res) {
    res.json({
      message: "Type add page",
    });
  }

  static delete(req, res) {
    console.log(+req.params.id);

    res.json({
      message: "Type delete page",
    });
  }

  static edit(req, res) {
    console.log(+req.params.id);
    
    res.json({
      message: "Type Edit page",
    });
  }

  static search(req, res) {
    res.json({
      message: "Type search page",
    });
  }
}

module.exports = TypeController;
