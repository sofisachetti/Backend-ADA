const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');

router.get('/users', userControllers.getUsers);
