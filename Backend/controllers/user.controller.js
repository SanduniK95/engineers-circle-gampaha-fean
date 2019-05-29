const firebase =require('firebase')

 

module.exports.getusers=()=>{
const ref = firebase.firestore().collection('users');
ref.get().then(snapshot => {
console.log(snapshot)
snapshot.forEach(doc => {

console.log( doc.data());    
    

  });

});
} 
