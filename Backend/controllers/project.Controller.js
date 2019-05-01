
var firebase = require("firebase");


module.exports.addProject = (req, res, err) => {
  const project = {
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
    discription: req.body.description
  }
  firebase.database().ref('Project').push(project, (err, doc) => {
    if (!err) {
      res.send(doc)
    }
    else {
      res.status(422).send(err)
    }
  })

}

module.exports.updateProject = (req, res, next) => {
  firebase.database().ref('Project/' + req.body.projectId).update({
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
  }, function (error) {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send({ messege: "suceess" })
    }
  });
}


module.exports.getprojects = (req, res, next) => {
  firebase.database().ref('Project').once('value', (snapshot) => {
    res.send(snapshot)
  })
}


module.exports.deleteproject = (req, res, next) => {
  firebase.database().ref('Project/' + req.body.projectId).remove((err) => {
    if (err) {
      res.send(err)
    }
    else {
      res.send({ "messege": "Sucess" })
    }
  })


}


