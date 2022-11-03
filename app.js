const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

// routes
app.get('/hello', (req,res) => {
res.send('./public/other.html');
})

app.use('/api/v1/tasks',tasks)
// app.get('/api/v1/tasks')             --get all tasks
// app.post('/api/v1/tasks')            --add task
// app.get('/api/v1/tasks/:id')         --get task one task
// app.patch('/api/v1/tasks/:id')       --update one task
// app.delete('/api/v1/tasks/:id')      --delete one task

const port = 3000;

app.listen(port, console.log(`server running on port ${port}`));