import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { externalProject } from './external-projects.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ExternalProjectsService {
  externalProject = {
    projectID: '',
    fullName: '',
    email: '',
    projectTitle: '',
    description: ''
  }

  constructor(private Http: HttpClient) { }

  postExternalProject(Project) {
    return this.Http.post(environment.apiBaseUrl + '/addexternalproject', Project)
  }

  getExternalProjects() {
    return this.Http.get(environment.apiBaseUrl + '/getexternalproject')
  }

  deleteExternalProject(projectid){
    return this.Http.delete(environment.apiBaseUrl+'/deleteexternalproject/'+projectid)
  }
}
