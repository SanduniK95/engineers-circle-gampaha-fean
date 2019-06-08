var firebase = require("firebase");


module.exports.getreceipts = (req, res, next) => {
    var users=[]
    var ref =firebase.firestore().collection('payment-recipt')
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        var usr ={
          userId:doc.id,
          downloadUrl:doc.data().downloadUrl,
        }
        users.push(usr)     
        });
     
      res.send(users)
     
    })
  }