var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBzlekLOg0_Y15S0Ve9tC1FpVKJymDRw8E",
    authDomain: "engineers-circle-gampaha-fean.firebaseapp.com",
    databaseURL: "https://engineers-circle-gampaha-fean.firebaseio.com",
    projectId: "engineers-circle-gampaha-fean",
    storageBucket: "engineers-circle-gampaha-fean.appspot.com",
    messagingSenderId: "465713684074"
  };
  
var app=  firebase.initializeApp(config);

console.log(app)