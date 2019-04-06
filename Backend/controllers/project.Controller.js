
var firebase = require("firebase");


module.exports.addProject =(req,res,err)=>{
const project ={
    projectName:req.body.projectName,
    date :req.body.date

}
firebase.database().ref('Project').push(project,(err,doc)=>{
    if(!err){
        res.send(doc)
    }
    else{
        res.status(422).send(err)

    }
})

}