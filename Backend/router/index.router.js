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

// Project requests CRUD
router.post('/addexternalproject', Ctrlexternalproject.addExternalProject)
router.get('/getexternalproject', Ctrlexternalproject.getExternalProject)
router.delete('/deleteexternalproject/:externalProjectId', Ctrlexternalproject.deleteExternalProject)

//report

router.get('/getprojectsbymonth/:month',Ctrlproject.getprojectsbymonth)
//payment
router.get('/getreceipts/:year',Ctrlreceipts.getreceipts)
router.put('/updatepaymentstate/:userId',Ctrlreceipts.updatepaymentstate)

router.get('/notpaid',Ctrlreceipts.notpaid)

router.post('/sendemail',Ctrlreceipts.sendemail)

//external-project email
router.post('/sendmail',Ctrlexternalproject.sendemail)

module.exports =router