
var express = require('express');
var router = express.Router();


const Ctrlproject = require('../controllers/project.controller')
const Ctrluser =require('../controllers/user.controller')
//project crud
router.post('/addproject',Ctrlproject.addProject)
router.put('/updateproject/:projectId',Ctrlproject.updateProject)
router.get('/getprojects',Ctrlproject.getprojects)
router.delete('/deleteproject/:projectId',Ctrlproject.deleteproject)
router.get('/getusers',Ctrluser.getusers)
router.get('/getclaenderdata',Ctrlproject.getcalenderdata)
router.put('/updateuser/:projectId',Ctrluser.updateUser)
router.delete('/deleteuser/:projectId',Ctrluser.deleteuser)

module.exports =router