const Task = require("../models/tasks");

exports.getAllTasks = async (req, res, next) => {
  try {
    const result = await Task.find().select("-__v");
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Tasks found!",
        payload: result,
      });
    }npm 
    res.status(404).send({ msg: "Tasks not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.createTask = async (req, res, next) => {
  try {
    const data = new Task({
      name: req.body.name,
      category: req.body.category
      
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Task created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Task was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.findTaskById = async (req, res, next) => {
  try {
    const result = await Task.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).send({
        msg: "Task found!",
        payload: result,
      });
    }npm 
    res.status(404).send({ msg: "Task not found" });
  } catch (error) {
    res.status(500).send(error);
  } 
}

exports.deleteTask = async (req, res, next) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Task deleted!",
        payload: result,
      });
    }npm 
    res.status(404).send({ msg: "Task not deleted" });
  } catch (error) {
    res.status(500).send(error);
  } 
}