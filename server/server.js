const express = require('express');
const mongoose = require('mongoose');
const Task = require('./schemas/taskSchema');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://ronaldp:ronstodoapp1@ds215988.mlab.com:15988/ronstodo', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to db');
  }
});

app.post('/addTask', (req, res) => {
  console.log(req.body);
  let title = req.body.title;
  let task = req.body.task;
  let deadline = req.body.deadline;
  Task.create({ title, task, deadline }, (err, data) => {
    console.log('data: ', data);
    if (err) {
      console.log({ code: -1, result: {}, message: 'Task failed to add.' });
    } else {
      console.log('added task!');
      return res.json({ code: 0, result: { data }, message: 'Task added' })

    }
  })
});

app.post('/getTasks', (req, res) => {
  Task.find((err, data) => {
    if (err) {
      console.log({ code: -1, result: {}, message: 'Failed to get tasks' });
    } else {
      console.log('added task!');
      return res.json({ code: 0, result: { data }, message: 'Task retreived!' })
    }
  })
})

app.delete('/deleteTask/:_id', (req, res) => {
  console.log(req.body);
  let { _id } = req.params;
  Task.findByIdAndDelete(_id, (err, data) => {
    if (data === null) {
      return res.json({ code: -1, result: {}, message: 'No task to delete' });
    }
    if (err) {
      res.json({ code: -1, result: {}, message: 'Failed to delete task' });
    } else {
      console.log('deleted task!');
      return res.json({ code: 0, result: { data }, message: 'Task deleted!' })
    }
  });
});


app.put('/updateTask', (req, res) => {
  console.log(req.body);
  let { id, title, task, deadline } = req.body;
  let updatedValues = {
    title,
    task,
    deadline
  }
  Task.findOneAndUpdate(id, updatedValues, (err, data) => {
    if (!id) {
      return res.json({ code: -1, result: {}, message: 'No id provided' });
    }
    if (err) {
      return res.json({ code: -1, result: {}, message: 'Failed to update task' });
    } else {
      return res.json({ code: 0, result: { data }, message: 'Task updated!' })
    }
  });
});

app.listen(3020, () => {
  console.log('listening on port 3020');
})