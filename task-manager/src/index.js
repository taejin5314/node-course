const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server is up on port: ' + port);
})

const Task = require('./models/task');

const main = async () => {
    const task = await Task.findById('6024602ad08e9e6cb0557e68');
    console.log(task.owner);
}

main();