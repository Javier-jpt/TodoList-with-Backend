const todoItemModel = require('../models/todoItems');

const itemController = {

  createItem: async (req, res) => {
    try {
      const newItem = new todoItemModel({
        item: req.body.item
      })

      const saveItem = await newItem.save()
      res.status(200).json(saveItem);
    } catch (err) {
      res.json(err);
    }
  },

  getItem: async (req, res) => {
    try {
      const allTodoItems = await todoItemModel.find({});
      res.status(200).json(allTodoItems)
    } catch (err) {
      res.json(err);
    }
  },

  updateItem: async (req, res) => {
    try {
      const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200).json('Item Updated');
    } catch (err) {
      res.json(err);
    }
  },

  deleteItem: async (req, res) => {
    try {
      const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item deleted');
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = itemController;