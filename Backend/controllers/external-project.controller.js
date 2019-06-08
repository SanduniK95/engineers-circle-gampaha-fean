var firebase = require("firebase");
var moment = require('moment');

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
