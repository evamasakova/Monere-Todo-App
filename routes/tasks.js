const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");


/**
 * Sends hello world
 * URL: http://localhost:4000/v1/tasks/
 * Method: GET
 */
router.get("/all", tasksController.getAllTasks);
router.post("/create", tasksController.createTask);
router.get("/:id", tasksController.findTaskById);
router.delete("/:id", tasksController.deleteTask);


module.exports = router;