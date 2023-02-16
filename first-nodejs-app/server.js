const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/taskDB', { useNewUrlParser: true });
mongoose.set('strictQuery', true);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// Parse the request body
app.use(bodyParser.json());

const taskSchema = new mongoose.Schema({
  items: String,
});

const Task = mongoose.model('Task', taskSchema);

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Server Side.' });
});

app.post('/newitem', (req, res) => {
  const task = new Task({
    items: req.body.newItem,
  });
  console.log(items);
  task.save((error) => {
    if (!error) {
      res.json('Data added successfully');
    } else {
      res.status(500).send(error);
    }
  });
});

// app.post('/newitem', (req, res) => {
//   let task = new Task(req.body.newitem);
//   task
//     .save()
//     .then((task) => {
//       res.status(200).json({ items: 'added' });
//     })
//     .catch((err) => {
//       res.status(400).send('failed');
//     });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
