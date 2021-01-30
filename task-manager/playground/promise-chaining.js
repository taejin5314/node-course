require('../src/db/mongoose');
const User = require('../src/models/user');

// 6009b516d768701970dcd6dc

User.findByIdAndUpdate('6009b516d768701970dcd6dc', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})