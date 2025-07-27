class ProfilesController {
  static getProfile(req, res) {
    res.json({
      message: "Profile main page",
    });
  }

  static add(req, res) {
    res.json({
      message: "Profile add page",
    });
  }

  static delete(req, res) {
    console.log(+req.params.id);

    res.json({
      message: "Profile delete page",
    });
  }

  static edit(req, res) {
    console.log(+req.params.id);
    
    res.json({
      message: "Profile Edit page",
    });
  }

  static search(req, res) {
    res.json({
      message: "Profile search page",
    });
  }
}

module.exports = ProfilesController;
