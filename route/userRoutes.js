const express = require('express');
const { addUserData } = require('../controller/userController');

const userRoutes = express.Router();

userRoutes.post('/add', addUserData);

module.exports = userRoutes;
