const express = require('express');
const {
  addUserData,
  getAllData,
  getSingleData,
  updateData,
  deleteData,
} = require('../controller/userController');

const userRoutes = express.Router();

userRoutes.post('/add', addUserData);

userRoutes.get('/get', getAllData);

userRoutes.get('/get/:id', getSingleData);

userRoutes.delete('/delete/:id', deleteData);

userRoutes.patch('/update/:id', updateData);

module.exports = userRoutes;
