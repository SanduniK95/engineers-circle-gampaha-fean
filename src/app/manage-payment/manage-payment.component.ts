import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../shared/payment/payment.service'
import { from } from 'rxjs';
import {AuthService} from '../shared/services/auth.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-manage-payment',
  templateUrl: './manage-payment.component.html',
  styleUrls: ['./manage-payment.component.scss']
})
export class ManagePaymentComponent implements OnInit {
recepts
notpaidmembers

mail ={
  subject:'',
  body:''
}
  constructor(private payment :PaymentService,private auth :AuthService) { }

  ngOnInit() {
   this.payment.getnotpaidusers().subscribe(res=>{
this.notpaidmembers=res
console.log(res)
   })
 
  }
  years = [
    {value: 2009, viewValue: '2009'},
    {value: 2010, viewValue: '2010'},
    {value: 2011, viewValue: '2011'},
    {value: 2012, viewValue: '2012'},
    {value: 2013, viewValue: '2013'},
    {value: 2014, viewValue: '2014'},
    {value: 2015, viewValue: '2015'},
    {value: 2016, viewValue: '2016'},
    {value: 2017, viewValue: '2017'},
    {value: 2018, viewValue: '2018'},
    {value: 2019, viewValue: '2019'},
    {value: 2020, viewValue: '2020'},

  ];

  onchange(data){
        
    this.payment.getreceipt(data).subscribe(res=>{
      this.recepts=res
      console.log(res)
    })
      }

      onSubmit(){
        event.preventDefault()
        console.log(this.mail)
        this.payment.sendmails(this.mail).subscribe(res=>{
          Swal.fire(
            'Submitted Succesfully',
            'success'
          )
        })
      }

  setvalid(id){
    this.payment.setvalid(id).subscribe(res=>{
      Swal.fire(
        'Submitted Succesfully',
        'success'
      )
      this.payment.getreceipt(id).subscribe(res=>{
        this.recepts=res
        console.log(res)
      })
    })
  }

}
