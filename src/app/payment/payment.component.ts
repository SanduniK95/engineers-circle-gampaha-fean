import { Component, OnInit ,HostListener} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import {AuthService} from '../shared/services/auth.service'
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import {PaymentService} from '../shared/payment/payment.service'
import {environment} from '../../environments/environment'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
handler :any;
amount = 500;

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
     // image: '/your/awesome/logo.jpg',
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }

    // Main task 
    task: AngularFireUploadTask;

    // Progress monitoring
    percentage: Observable<number>;
  
    snapshot: Observable<any>;
  
    // Download URL
    downloadURL: Observable<string>;
  
    // State for dropzone CSS toggling
    isHovering: boolean;
  
    constructor(private storage: AngularFireStorage ,private db: AngularFirestore,private auth :AuthService,private paymentSvc: PaymentService) { }

    
    toggleHover(event: boolean) {
      this.isHovering = event;
    }
  
  
    startUpload(event: FileList) {
      // The File object
      const file = event.item(0)
  
      // Client-side validation example
      if (file.type.split('/')[0] !== 'image') { 
        console.error('unsupported file type :( ')
        return;
      }
  
      // The storage path
      const path = `payment/${new Date().getTime()}_${file.name}`;
  
      // Totally optional metadata
      const customMetadata = { app: 'My AngularFire-powered PWA!' };
  
      // The main task
      this.task = this.storage.upload(path, file, { customMetadata })
  
      // Progress monitoring
      this.percentage = this.task.percentageChanges();
      this.snapshot   = this.task.snapshotChanges().pipe(
        tap(snap => {
          if (snap.bytesTransferred === snap.totalBytes) 
          {
            // Update firestore on completion
           // this.db.collection('payment-recipt').doc(this.auth.getUserid()).set( { path, size: snap.totalBytes})
          }
        })
      )
  
      // The file's download URL
      this.snapshot.pipe(finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())).subscribe();
    }
    submit(){
      this.downloadURL.subscribe(res=>{
        this.db.collection('payment-recipt').doc(this.auth.getUserid()).set( {downloadUrl:res,year:(new Date()).getFullYear()}).then(res=>{
          Swal.fire(
            'Submitted Succesfully',
            'success'
          )
        })
      })
      

    }
  
    // Determines if the upload task is active
    isActive(snapshot) {
      return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
    }
    handlePayment() {
      this.handler.open({
        name: 'Membership fees',
        excerpt: 'Deposit Funds to Account',
        amount: this.amount
      });
    }
    @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }
  


    

}







