const express = require('express');
const route= express.Router();

const testController = require('./../controllers/test.controller.js');


route.get("/",testController.findAll);

module.exports = route;