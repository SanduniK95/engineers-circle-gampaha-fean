var firebase = require('firebase')
require("firebase/firestore");
//import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBzlekLOg0_Y15S0Ve9tC1FpVKJymDRw8E",
    authDomain: "engineers-circle-gampaha-fean.firebaseapp.com",
    databaseURL: "https://engineers-circle-gampaha-fean.firebaseio.com",
    projectId: "engineers-circle-gampaha-fean",
    storageBucket: "engineers-circle-gampaha-fean.appspot.com",
    messagingSenderId: "465713684074"
  };
  
 firebase.initializeApp(config);
 firebase.firestore().settings({timestampsInSnapshots: true})
 

//module.exports.db = db