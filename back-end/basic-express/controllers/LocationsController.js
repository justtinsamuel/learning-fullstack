class LocationController {
  static getLocation(req, res) {
    res.json({
      message: "Location main page",
    });
  }

  static add(req, res) {
    res.json({
      message: "Location add page",
    });
  }

  static delete(req, res) {
    console.log(+req.params.id);

    res.json({
      message: "Location delete page",
    });
  }

  static edit(req, res) {
    console.log(+req.params.id);
    
    res.json({
      message: "Location Edit page",
    });
  }

  static search(req, res) {
    res.json({
      message: "Location search page",
    });
  }
}

module.exports = LocationController;
