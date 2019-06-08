import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userId: string;

  constructor(private auth :AuthService,private db :AngularFirestore,private http:HttpClient) { 
    this.userId =this.auth.getUserid()
  }

  processPayment(token: any, amount: number) {
    const payment = { token, amount,userId:this.userId}
   // return this.db.list(`/payments/${this.userId}`).push(payment)
   this.db.collection('payments').doc(this.userId).set(payment)
   this.db.collection('users').doc(this.userId).set({ispaid:true})

   console.log(payment)
  }
  getreceipt(year){
    return this.http.get(environment.apiBaseUrl+'/getreceipts/' +year)

  }

  setvalid(id){
    return this.http.put(environment.apiBaseUrl+'/updatepaymentstate/'+id,{})
  }
  getnotpaidusers(){
    return this.http.get(environment.apiBaseUrl+'/notpaid')

  }

  sendmails(obj){
    return this.http.get(environment.apiBaseUrl+'/sendemail',obj)
  }




}
