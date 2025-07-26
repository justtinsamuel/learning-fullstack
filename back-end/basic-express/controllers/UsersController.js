class UserController {
  static getUsers(req, res) {
    res.json({
      message: "User main page",
    });
  }

  static add(req, res) {
    res.json({
      message: "User add page",
    });
  }

  static delete(req, res) {
    res.json({
      message: "User delete page",
    });
  }

  static edit(req, res) {
    res.json({
      message: "User Edit page",
    });
  }

  static search(req, res) {
    res.json({
      message: "User search page",
    });
  }
}

module.exports = UserController;
