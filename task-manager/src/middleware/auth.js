const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismynewcourse');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFjNDIxMWNlYjQ1MjBiNzQyYTI4ODEiLCJpYXQiOjE2MTI2NTIwOTJ9.hN4inmmq48BZnfL3z6uq1csFPQa4kBcwv30JzdV_ICI' })
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth;