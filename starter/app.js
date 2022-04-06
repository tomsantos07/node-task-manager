const express = require('express');
const app = express();
const tasks = require('./routes/tasks');


// middleware
app.use(express.json()) // if we don't have it, there's no rec.body data

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks)

const port = 3000;

app.listen(port, console.log(`Server is listening on ${port}...`));
