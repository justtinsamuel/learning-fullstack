class UserController {
  static getUsers(req, res) {
    res.json({
      message: "User main page",
    });
  }
}

module.exports = UserController;
