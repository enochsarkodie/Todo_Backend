const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
Title :{
    type: String,
    require: true
       },

  completed :{
    type: Boolean,
    default: false
  }  
});

const Todo = mongoose.model('Todo',TodoSchema);
 module.exports = Todo;