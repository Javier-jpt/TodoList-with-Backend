const router = require('express').Router();
// import todo model
const todoItemModel = require('../models/todoItems');
const itemController = require('../controllers/itemController')

// Creating Routes -- Add todo Items to Database.

router.post('/', itemController.createItem)

// Here we create a second route -- get data from database

router.get('/', itemController.getItem)

// Here we update the item from Database

router.patch('/:id', itemController.updateItem)

// Here we delete the item from Database

router.delete('/:id', itemController.deleteItem)

module.exports = router;

