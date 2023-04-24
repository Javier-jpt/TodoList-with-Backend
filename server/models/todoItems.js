// import mongoose to create new Schema

const mongoose = require('mongoose');

// Schema 

const todoItemSchema = new mongoose.Schema({
  item:{
    type:String,
    required: true
  }

})

module.exports = mongoose.model('todo', todoItemSchema);