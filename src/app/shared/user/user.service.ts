import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user={
  email:'',
  password:''

}
constructor(private Http :HttpClient) { }

updateuser(user){
  return this.Http.put(environment.apiBaseUrl+'/updateuser/'+user.u_id,user)

}
getuser(){
  return this.Http.get(environment.apiBaseUrl+'/getuser')
}
deleteuser(U_id){
  return this.Http.delete(environment.apiBaseUrl+'/deleteuser/'+U_id)
}
}
