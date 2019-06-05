import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {user }from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private Http :  HttpClient) { }
  user={
    userId:'',
    Email:''
  }

  updateUser(Project){
    return this.Http.put(environment.apiBaseUrl+'/updateuser/'+Project.userId,Project)

  }
  getusers(){
    return this.Http.get(environment.apiBaseUrl+'/getusers')
  }
  deleteUser(userId){
    return this.Http.delete(environment.apiBaseUrl+'/deleteuser/'+userId)

  }

}
