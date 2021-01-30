require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndUpdate('6010817b3563ff3b3435dc72', { completed: false }).then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})