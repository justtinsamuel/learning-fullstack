const { Item } = require("../models");
const { Op } = require("sequelize");

class ItemController {
  static async getItems(req, res) {
    try {
      let items = await Item.findAll(); //findAll dapet dari sequelize
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err); // 500 = server error
    }
  }

  static async getItemById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Item.findOne({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async add(req, res) {
    try {
      const { name, category, price, stock, image } = req.body;
      let result = await Item.create({
        name,
        category,
        price,
        stock,
        image,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const deleted = await Item.destroy({
        where: { id },
      });

      if (deleted === 0) {
        return res.status(404).json({ message: "Item not found" });
      }

      res
        .status(200)
        .json({ message: `Item with id ${id} deleted successfully` });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id; // request parametet, untuk select id
      const { name, category, price, stock, image } = req.body; //request body, untuk show perubahan

      // update data
      const [updated] = await Item.update(
        { name, category, price, stock, image },
        { where: { id } }
      );

      // validation
      if (updated === 0) {
        return res.status(404).json({
          message: `Item not found`,
        });
      }

      // get data kembali
      const updatedItem = await Item.findOne({ where: { id } });

      res.status(201).json({
        message: `Item with id ${id} updated successfully`,
        data: updatedItem,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async search(req, res) {
    try {
      const searchQuery = req.query.name;
      let result = await Item.findAll({
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

module.exports = ItemController;
