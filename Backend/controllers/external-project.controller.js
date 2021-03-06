var firebase = require("firebase");
var moment = require('moment');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'engineer.circle.gampaha@gmail.com',
    pass: 'ucsc@123'
  },
  tls: {
    rejectUnauthorized: false
}
});


module.exports.sendemail =(req,res,next)=>{

  var mailOptions = {
    from: 'engineer.circle.gampaha@gmail.com',
    to: req.body.Email,
    subject: req.body.ProjectName,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(200).json(info)
    }
  });

}




module.exports.addExternalProject = (req, res, err) => {
  const externalProject = {
    fullName: req.body.fullName,
    email: req.body.email,
    projectTitle: req.body.projectTitle,
    description: req.body.description
  }

  firebase.firestore().collection('externalProjects').add(externalProject)
    .then(function (docRef) {
      res.send({ messege: "Success" })
    })
    .catch(function (error) {
      res.status(422).send(error)
    });
}

module.exports.getExternalProject = (req, res, next) => {
  var externalProjects = []
  var ref = firebase.firestore().collection('externalProjects')
  ref.get().then(snapshot => {
    snapshot.forEach(doc => {
      var externalProject = {
        externalProjectId: doc.id,
        fullName: doc.data().fullName,
        email: doc.data().email,
        projectTitle: doc.data().projectTitle,
        description: doc.data().description,
      }
      externalProjects.push(externalProject)
    });
    res.send(externalProjects)
  })
}

module.exports.deleteExternalProject = (req, res, next) => {
  firebase.firestore().collection('externalProjects').doc(req.params.externalProjectId).delete()
    .then(function (docRef) {
      res.send({ messege: "success" })
    })
    .catch(function (error) {
      res.status(422).send(error)
    });
}



