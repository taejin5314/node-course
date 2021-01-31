require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('6010817b3563ff3b3435dc72', { completed: false }).then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('6010817b3563ff3b3435dc72').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})