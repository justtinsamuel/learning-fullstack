const { User } = require("../models");
const { Op } = require("sequelize");

class UserController {
  static async getUsers(req, res) {
    try {
      let Users = await User.findAll(); //findAll dapet dari sequelize
      res.status(200).json(Users);
    } catch (err) {
      res.status(500).json(err); // 500 = server error
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.findOne({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async add(req, res) {
    try {
      const { email, password, username, image } = req.body;
      let result = await User.create({
        email,
        password,
        username,
        image,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addMany(req, res) {
    try {
      const Users = req.body; // ini harus array
      const result = await User.bulkCreate(Users);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await User.destroy({
        where: { id },
      });

      if (deleted === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res
        .status(200)
        .json({ message: `User with id ${id} deleted successfully` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id; // request parametet, untuk select id
      const { email, password, username, image } = req.body; //request body, untuk show perubahan

      // update data
      const [updated] = await User.update(
        { email, password, username, image },
        { where: { id } }
      );

      // validation
      if (updated === 0) {
        return res.status(404).json({
          message: `User not found`,
        });
      }

      // get data kembali
      const updatedUser = await User.findOne({ where: { id } });

      res.status(201).json({
        message: `User with id ${id} updated successfully`,
        data: updatedUser,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async search(req, res) {
    try {
      const searchQuery = req.query.name;
      let result = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${searchQuery}%`,
          },
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
