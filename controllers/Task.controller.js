const TaskModel = require("../models/Task.model");

const getTasks = async (req, res) => {
  try {
    const allTasks = await TaskModel.find();
    res.status(200).json({
      success: true,
      data: allTasks,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const addTask = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const newTask = await TaskModel.create({
      title,
      desc,
    });
    await newTask.save();
    res.status(201).json({
      success: true,
      message: "Task Created Successfully!✅",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      success: true,
      message: "Task Updated Successfully!✅",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      success: true,
      message: "Task Deleted Successfully!✅",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
