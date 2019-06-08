var firebase = require("firebase");

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'engineer.circle.gampaha@gmail.com',
      pass: 'ucsc@123'
    }
  });

  module.exports.sendemail =(req,res,next)=>{
    var maillist=[]

    var ref =firebase.firestore().collection('users')
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
          if(!doc.data().ispaid){        
            maillist.push(doc.data().email) 
    }
        });

        console.log(maillist)
        var mailOptions = {
            from: 'engineer.circle.gampaha@gmail.com',
            to: maillist,
            subject: req.body.subject,
            text: req.body.body
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              res.status(422).send(error)
            } else {
              res.status(200).json(info)
            }
          });


    })
 
}



module.exports.getreceipts = (req, res, next) => {
    var users=[]

    var ref =firebase.firestore().collection('payment-recipt')
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
          if(doc.data().year == req.params.year){
        var usr ={
          userId:doc.id,
          downloadUrl:doc.data().downloadUrl,
          validity :doc.data().validity,
          username:doc.data().userName
        }
        users.push(usr)    
    } 
        });
    
     
      res.send(users)
     
    })
  }

  module.exports.updatepaymentstate=(req,res,next)=>{
    firebase.firestore().collection('payment-recipt').doc(req.params.userId).update({
       validity:true
      })
      .then(function(docRef) {
        res.send({ messege: "suceess" })
      })
      .catch(function(error) {
        res.status(422).send(error)
      });
  }

  module.exports.notpaid = (req, res, next) => {
    var notpaidusers=[]
    var ref =firebase.firestore().collection('users')
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
          if(!doc.data().ispaid){
        var usr ={
          userId:doc.id,
          UserName:doc.data().displayName,
          Email:doc.data().email
        }
        notpaidusers.push(usr)
      
    }
      
        });
     
      res.send(notpaidusers)
     
    })
  }

