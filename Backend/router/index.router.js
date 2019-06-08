var express = require('express');
var router = express.Router();

const Ctrlproject = require('../controllers/project.controller')
const Ctrluser =require('../controllers/user.controller')
const Ctrlexternalproject = require('../controllers/external-project.controller')
const Ctrlreceipts =require('../controllers/payment.controller')
//project crud
router.post('/addproject',Ctrlproject.addProject)
router.put('/updateproject/:projectId',Ctrlproject.updateProject)
router.get('/getprojects',Ctrlproject.getprojects)
router.delete('/deleteproject/:projectId',Ctrlproject.deleteproject)
router.get('/getusers',Ctrluser.getusers)
router.get('/getclaenderdata',Ctrlproject.getcalenderdata)
router.put('/updateuser/:projectId',Ctrluser.updateUser)
router.delete('/deleteuser/:projectId',Ctrluser.deleteuser)

// External project CRUD
router.post('/addexternalproject', Ctrlexternalproject.addExternalProject)
router.post('/getexternalproject', Ctrlexternalproject.getExternalProject)

//report

router.get('/getprojectsbymonth/:month',Ctrlproject.getprojectsbymonth)
//payment
router.get('/getreceipts/:year',Ctrlreceipts.getreceipts)
router.put('/updatepaymentstate/:userId',Ctrlreceipts.updatepaymentstate)

router.get('/notpaid',Ctrlreceipts.notpaid)

router.post('/sendemail',Ctrlreceipts.sendemail)

module.exports =router