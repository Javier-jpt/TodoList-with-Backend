const router = require('express').Router();
// import todo model
const todoItemModel = require('../models/todoItems');

// Creating Routes -- Add todo Items to Database.
router.post('/api/item', async (req,res)=> {
  console.log('Hello')
  try{
    const newItem = new todoItemModel({
      item: req.body.item
    })
    // Here we sabe the item in DataBase
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})

// Here we create a second route -- get data from database
router.get('/api/items', async (req,res)=>{
  try{
    const allTodoItems = await todoItemModel.find({});
    res.status(200).json(allTodoItems)
  } catch(err){
    res.json(err);
  }
})

// Here we update the item from Database
router.put('/api/item/:id', async (req,res)=>{
  try{  // finde the item by id and we update it
    const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json('Item Updated');
  }catch(err){
    res.json(err);
  }
})

// Here we delete the item from Database
router.delete('/api/item/:id', async (req,res)=>{
  try{  // finde the item by id and we delete it
    const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item deleted');
  }catch(err){
    res.json(err);
  }
})


//export router
module.exports = router;