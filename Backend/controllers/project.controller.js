
var firebase = require("firebase");


module.exports.addProject = (req, res, err) => {
  const project = {
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
    description: req.body.description
  }
  firebase.firestore().collection('projects').add(project)
.then(function(docRef) {
  res.send({ messege: "suceess" })
})
.catch(function(error) {
  res.status(422).send(error)
});
 

}

module.exports.updateProject = (req, res, next) => {
  console.log(req.body)
  firebase.firestore().collection('projects').doc(req.params.projectId).update({
    projectName: req.body.projectName,
    date: req.body.date,
    venue: req.body.venue,
    description:req.body.description
  })
  .then(function(docRef) {
    res.send({ messege: "suceess" })
  })
  .catch(function(error) {
    res.status(422).send(error)
  });
   
}


module.exports.getprojects = (req, res, next) => {
  var projects=[]
  var ref =firebase.firestore().collection('projects')
  ref.get().then(snapshot => {
    console.log(snapshot)
    snapshot.forEach(doc => {
      var project ={
        projectId:doc.id,
        projectName:doc.data().projectName,
        date:doc.data().date,
        venue:doc.data().venue,
        description:doc.data().description,
      }
      projects.push(project)
    
        
    
      });
   
    console.log(projects)
    res.send(projects)
   
  })
}


module.exports.deleteproject = (req, res, next) => {
  firebase.firestore().collection('projects').doc(req.params.projectId).delete()
  .then(function(docRef) {
    res.send({ messege: "suceess" })
  })
  .catch(function(error) {
    res.status(422).send(error)
  });


}


