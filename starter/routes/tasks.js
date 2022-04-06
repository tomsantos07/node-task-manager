const express = require('express')
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
// what's with that 'patch'???
// https://medium.com/@gabrielrufino.js/put-vs-patch-pare-de-agora-escolher-errado-533b8c6058d9
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
