const mongoose = require("mongoose");

// TODO: Define your Task schema here
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true  
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
