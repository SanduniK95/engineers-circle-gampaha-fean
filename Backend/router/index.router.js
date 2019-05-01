
var express = require('express');
var router = express.Router();


const Ctrlproject = require('../controllers/project.Controller')

//project crud
router.post('/addproject',Ctrlproject.addProject)
router.put('/updateproject',Ctrlproject.updateProject)
router.get('/getprojects',Ctrlproject.getprojects)
router.delete('/deleteproject/:projectId',Ctrlproject.deleteproject)



module.exports =router