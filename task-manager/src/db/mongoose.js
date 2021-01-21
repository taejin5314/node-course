const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Mike'
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    name: {
        type: String,
    },
    description: {
        type: String
    }
})

// const Todo = new Task({
//     name: 'Laundry',
//     description: 'Finish until 9 p.m.'
// })

// Todo.save().then(() => {
//     console.log(Todo);
// }).catch((error) => {
//     console.log('Error!', error)
// })
