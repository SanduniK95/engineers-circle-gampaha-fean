import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  userId: string;

  constructor(private auth :AuthService,private db :AngularFirestore) { 
    this.userId =this.auth.getUserid()
  }

  processPayment(token: any, amount: number) {
    const payment = { token, amount,userId:this.userId }
   // return this.db.list(`/payments/${this.userId}`).push(payment)
   this.db.collection('payments').add(payment)
   console.log(payment)
  }
}
