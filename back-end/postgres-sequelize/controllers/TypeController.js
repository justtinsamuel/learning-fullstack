const { Type } = require("../models");
const { Op } = require("sequelize");

class TypeController {
  static async getTypes(req, res) {
    try {
      let Types = await Type.findAll(); //findAll dapet dari sequelize
      res.status(200).json(Types);
    } catch (err) {
      res.status(500).json(err); // 500 = server error
    }
  }

  static async getTypeById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Type.findOne({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name } = req.body;
      let result = await Type.create({
        name,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addMany(req, res) {
    try {
      const Types = req.body; // ini harus array
      const result = await Type.bulkCreate(Types);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await Type.destroy({
        where: { id },
      });

      if (deleted === 0) {
        return res.status(404).json({ message: "Type not found" });
      }

      res
        .status(200)
        .json({ message: `Type with id ${id} deleted successfully` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id; // request parametet, untuk select id
      const { name } = req.body; //request body, untuk show perubahan

      // update data
      const [updated] = await Type.update({ name }, { where: { id } });

      // validation
      if (updated === 0) {
        return res.status(404).json({
          message: `Type not found`,
        });
      }

      // get data kembali
      const updatedType = await Type.findOne({ where: { id } });

      res.status(201).json({
        message: `Type with id ${id} updated successfully`,
        data: updatedType,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async search(req, res) {
    try {
      const searchQuery = req.query.name;
      let result = await Type.findAll({
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

module.exports = TypeController;
