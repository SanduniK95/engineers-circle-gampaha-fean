import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   project ={
     projectID:'',
     projectName:'',
     date :'',
     venue :'',
     discription:''
  }

  constructor(private Http :HttpClient) { }

  postProject(Project){
   return this.Http.post(environment.apiBaseUrl+'/addproject',Project)
  }
  updateproject(Project){
    return this.Http.put(environment.apiBaseUrl+'/updateproject',Project)

  }
  getprojects(){
    return this.Http.get(environment.apiBaseUrl+'/getprojects')
  }
  deleteProject(projectid){
    return this.Http.delete(environment.apiBaseUrl+'/deleteproject/'+projectid)

  }
}
