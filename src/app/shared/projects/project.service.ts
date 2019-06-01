import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {project} from './project.model'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   project ={
     projectID:'',
     projectName:'',
     date :'',
     venue :'',
     discription:'',
     startTime:'',
     endTime:''
  }

  constructor(private Http :HttpClient) { }

  postProject(Project){
   return this.Http.post(environment.apiBaseUrl+'/addproject',Project)
  }
  updateproject(Project){
    return this.Http.put(environment.apiBaseUrl+'/updateproject/'+Project.projectId,Project)

  }
  getprojects(){
    return this.Http.get(environment.apiBaseUrl+'/getprojects')
  }
  deleteProject(projectid){
    return this.Http.delete(environment.apiBaseUrl+'/deleteproject/'+projectid)

  }
  getcalenderdata(){
    var proj
    this.Http.get(environment.apiBaseUrl+'/getprojects').subscribe(
      res=>{
        var proj=[]
       var  projects
          projects =res as project[]
          var i =1
          projects.map(pro=>{
              var date =pro.date.toString()
              var stime =pro.startTime.toString()
              var etime =pro.endTime.toString()
             var StartTime=moment(date +" " +stime,"YYYY-MM-DD HH:mm")
             var EndTime =moment(date +" " +etime,"YYYY-MM-DD HH:mm")
              var obj ={
                  Id :i,
                  Subject :pro.projectName,
                  StartTime:StartTime.toDate(),
                  EndTime:EndTime.toDate(),
                  CategoryColor: '#7fa900'
  
              }
              console.log(obj)
              proj.push(obj)
          
              i++
  
          })
          return proj
          
      },
      err=>{
  
      }
      
  )
  
  return proj
  }
}
