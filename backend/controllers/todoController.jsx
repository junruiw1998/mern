const mongoose = require("mongoose");
const Todo = require("../models/todoModel.jsx");
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //id is a Mongodb format id
    res.status(400).json({ error: "Incorrect MongoDB data format." });
  }
  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ error: "No such Todo!" });
  }
  res.status(200).json(todo);
};

const createTodo = async (req, res) => {
  const { title, date, priority } = req.body;

  //add to database
  try {
    const todo = await Todo.create({ title, date, priority });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Incorrect MongoDB data format." });
  }

  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) {
    res.status(404).json({ error: "No such Todo!" });
  }
  res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
  const { title, date, priority } = req.body;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Incorrect MongoDB data format." });
  }

  const todo = await Todo.findByIdAndUpdate(id, { title, date, priority });
  if (!todo) {
    res.status(404).json({ error: "No such Todo!" });
  }
  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
