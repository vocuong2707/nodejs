const express = require('express');
const route = express.Router();

const homeController = require('../app/controllers/HomeController');

route.use('/',homeController.index);


module.exports = route;