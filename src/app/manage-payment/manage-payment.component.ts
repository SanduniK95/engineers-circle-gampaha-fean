import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../shared/payment/payment.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-manage-payment',
  templateUrl: './manage-payment.component.html',
  styleUrls: ['./manage-payment.component.scss']
})
export class ManagePaymentComponent implements OnInit {
recepts
  constructor(private payment :PaymentService) { }

  ngOnInit() {
    this.payment.getreceipt().subscribe(res=>{
      this.recepts=res
      console.log(res)
    })
  }

}
