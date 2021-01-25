const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase.includes('password')) {
                throw new Error('Password should not contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Mike',
//     email: 'mike1346@gmail.com',
//     password: 'password12345'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const task = new Task({
    description: '   Eat lunch',
})

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
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
