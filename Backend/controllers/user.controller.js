const firebase =require('firebase')

 
 

module.exports.getusers = (req, res, next) => {
  var users=[]
  var ref =firebase.firestore().collection('users')
  ref.get().then(snapshot => {
    snapshot.forEach(doc => {
      var usr ={
        userId:doc.id,
        UserName:doc.data().displayName,
        Email:doc.data().email
      }
      users.push(usr)
    
        
    
      });
   
    res.send(users)
   
  })
}

module.exports.deleteuser = (req, res, next) => {
  firebase.firestore().collection('users').doc(req.params.projectId).delete()
  .then(function(docRef) {
    res.send({ messege: "suceess" })
  })
  .catch(function(error) {
    res.status(422).send(error)
  });


}

module.exports.updateUser = (req, res, next) => {
  firebase.firestore().collection('users').doc(req.body.userId).update({
    displayName:req.body.UserName,
    email:req.body.Email
  })
  .then(function(docRef) {
    res.send({ messege: "suceess" })
  })
  .catch(function(error) {
    res.status(422).send(error)
  });
   
}