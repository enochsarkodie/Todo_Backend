const express = require('express');
const { getAllTodos, 
        createTodo,
        updateTodoStatus,
        sortCompletedTodos,
        sortActiveTodos, 
        deleteTodoById,
        clearCompletedTodos } = require('../controllers/todoController');
const router = express.Router();


router.route('/').get(getAllTodos).post(createTodo).delete(clearCompletedTodos);
router.route("/:id").patch(updateTodoStatus).delete(deleteTodoById);
router.route('/completed').get(sortCompletedTodos);

router.route('/active').get(sortActiveTodos);
module.exports = router;