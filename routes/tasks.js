const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

/**
 * Endpoint routes for tasks.
 */
router.get("/", tasksController.getAllTasks);
router.get("/inactive", tasksController.getAllInactiveTasks);
router.get("/active", tasksController.getAllActiveTasks);
router.post("/", tasksController.createTask);
router.get("/:id", tasksController.findTaskById);
router.put("/:id", tasksController.checkOff);
router.get("/category/:categoryID", tasksController.getTasksByCategoryID);

module.exports = router;
