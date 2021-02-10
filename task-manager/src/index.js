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
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('6024602ad08e9e6cb0557e68');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    const user = await User.findById('60245de51d264103e049d26a');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main();