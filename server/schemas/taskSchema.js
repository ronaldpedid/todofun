const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
  title: { type: String },
  task: { type: String },
  deadline: { type: String },
  created: { type: Date, default: Date.now() }
});

let Task = mongoose.model('Task', taskSchema);


module.exports.schema = taskSchema;
module.exports = Task;