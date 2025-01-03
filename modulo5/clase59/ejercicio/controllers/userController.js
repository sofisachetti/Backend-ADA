const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    const users = userModel.getAllUsers;
    res.json(users);
}

module.exports = {
    getUsers
}