
var firebase = require("firebase");


module.exports.addProject = (req, res, err) => {
  const project = {
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
    description: req.body.description
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
  firebase.database().ref('Project/' + req.params.projectId).update({
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
    description:req.body.description
  }, function (error) {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send({ messege: "suceess" })
    }
  });
}


module.exports.getprojects = (req, res, next) => {
  var projects=[]
  firebase.database().ref('Project').once('value', (snapshot) => {

    snapshot.forEach(element => {
      var project ={
        projectId:element.key,
        projectName:element.val().projectName,
        date:element.val().date,
        venue:element.val().venue,
        description:element.val().description,
      }
      projects.push(project)
    });
    console.log(projects)
    res.send(projects)
   
  })
}


module.exports.deleteproject = (req, res, next) => {
  firebase.database().ref('Project/' + req.params.projectId).remove((err) => {
    if (err) {
      res.send(err)
    }
    else {
      res.send({ "messege": "Sucess" })
    }
  })


}


