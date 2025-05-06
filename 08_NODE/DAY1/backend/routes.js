// import express
const express = require('express')
const userController = require('./controllers/userController');

//create instance to access the class router in express
const route = new express.Router();

//path for register
route.post("/register", userController.registerController)

//path to login
route.post("/login",userController.loginController)

//routes export
module.exports = route