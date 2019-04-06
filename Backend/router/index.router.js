
var express = require('express');
var router = express.Router();


const Ctrlproject = require('../controllers/project.Controller')

router.post('/addproject',Ctrlproject.addProject)

module.exports =router