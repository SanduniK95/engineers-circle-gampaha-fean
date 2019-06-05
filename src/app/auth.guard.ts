import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService}from './shared/services/auth.service'
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public authservice:AuthService,
    public router:Router
    ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
console.log(this.authservice.isLoggedIn)
    if(this.authservice.isLoggedIn !== true ){
this.router.navigate(['sign-in'])
return false
    }else{
     // console.log(this.authservice.isadminloggedin)
    return this.authservice.isadminloggedin.then(data=>{
        if(!data){
          console.log(data)
          this.router.navigate(['sign-in'])
          return false
        }
        // else{
        //   console.log(data)
        //  // this.router.navigate(['dashboard'])
        //   return true
        // }
        return data
      })
      
      

    
    }
  }
  
}
