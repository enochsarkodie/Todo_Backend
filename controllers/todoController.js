const Todo = require('../models/Todo');

const getAllTodos = async(req,res) =>{
    try{
          const todos = await Todo.find();
          res.status(200).json({
            status:'success',
            results: todos.length,
            data: {
               todos
            }      
         });
        }
    catch(err){
        res.status(404).json({
            status:'failed',
            message:err
         })
    }
}
const createTodo = async(req,res) =>{
    try{
        const newTodo = await Todo.create(req.body);
          res.status(200).json({
            status:'success',
            data: {
               todo:newTodo
            }      
         });
        }
    catch(err){
        res.status(404).json({
            status:'failed',
            message:err
         })
    }
}

const updateTodoStatus = async (req,res)=>{
    const {id} =req.params;
    const {completed} = req.body;
    try{
        const updateTodo = await Todo.findByIdAndUpdate(
            id,{completed},{new:true}
        );
        if (!updateTodo){
            return res.status(404).json({error:"Todo not found"})
        }res.json(updateTodo);
    }catch(error){
        console.error('Error updating todo status',error);
        res.status(500).json({error:'Internal Server error...'})
    }
}
 const sortCompletedTodos = async (req,res)=>{
    try {
        const sortedTodos = await Todo.find({completed:true})
        .sort({createdAt:-1});
        res.json(sortedTodos)
    }catch(error){
        console.error('error fetching for completed Todos',error);
        res.status(500).json({error:'Internal Server Error'})
    }
 }

 const sortActiveTodos = async (req,res)=>{
    try {
        const activeTodos = await Todo.find({completed:false})
        .sort({createdAt:-1});
        res.json(activeTodos)
    }catch(error){
        console.error('error fetching for active Todos',error);
        res.status(500).json({error:"Internal Server Error"})
    }
 }
 async function clearCompletedTodos(req, res) {
    try {
      const result = await Todo.deleteMany({ completed: true });
  
      console.log(`${result.deletedCount} completed todos deleted`);
  
      res.status(200).json({ message: 'Completed todos cleared successfully' });
    } catch (error) {
      console.error('Error clearing completed todos:', error);
      res.status(500).json({ error: 'An error occurred while clearing completed todos' });
    }
  }
  

 const deleteTodoById = async (req,res)=>{
    try{
        const {id}= req.params;
        const deleteTodo = await Todo.findByIdAndDelete(id);
        res.json({messages:"Deleted!!"})
    }catch(error){
        console.error('error deleting todo',error);
        res.status(500).json({error:"Internal Server error"});
    }
 }


module.exports = {getAllTodos,createTodo,updateTodoStatus,sortCompletedTodos,sortActiveTodos,deleteTodoById,clearCompletedTodos};