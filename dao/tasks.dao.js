/**
 * database communication
 */

const { default: mongoose } = require("mongoose");
const Task = require("../models/tasks");


class TaskDAO {
  constructor() {
    this.model = Task;
  }
  /**
   * Returns an array of all tasks.
   * 
   * @returns all tasks
   */
  async getAllTasks() {
    try {
      return await Task.find().select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * Returns an array of all inactive tasks.
   * 
   * @returns All inactive tasks (completed tasks)
   */
  async getAllInactiveTasks() {
    try {
      return await Task.find({ active: false }).select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * Returns an array of all active tasks.
   * 
   * @returns All active tasks (not yet completed tasks)
   */
  async getAllActiveTasks() {
    try {
      return await Task.find({ active: true }).select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
/**
 * Creates a new task and saves it to the database.
 * 
 * @param {*} data Request data from client
 * @returns A new task.
 */
  async createTask(data) {
    try {
      const foo = new Task({
        name: data.name,
        categoryID: data.categoryID,
        detail: data.detail,
        significance: data.significance,
        date: data.date,
      });
      return await foo.save();
    } catch (error) {
      throw new Error(error);
    }
  }
/**
 * Returns a task with the matching id.
 * 
 * @param {mongoose.Types.ObjectId} id The unique identifier of the task to retrieve.
 * @returns The task with the correct id.
 */
  async getTaskById(id) {
    try {
      return await Task.findById(id).select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
/**
 * Marks a task as complete (checked off) by setting its `active` field to false.
 * 
 * @param {mongoose.Types.ObjectId} id The unique identifier of the task to retrieve.
 * @returns The newly updated task.
 */
  async checkOff(id) {
    try {
      const data = await Task.findByIdAndUpdate(
        id,
        { active: false },
        { new: true }
      );
      return await data.save();
    } catch (error) {
      throw new Error(error);
    }
  }
/**
 * Retrieves all tasks that belong to a specific category.
 * 
 * @param {mongoose.Types.ObjectId} id The unique identifier of the task to retrieve.
 * @returns Array of tasks with the matching categoryID.
 */
  async getTasksByCategory(id) {
    try {
      return await Task.find({ categoryID: id });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = TaskDAO;
