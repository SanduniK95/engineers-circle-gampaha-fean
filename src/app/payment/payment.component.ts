import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import {AuthService} from '../shared/services/auth.service'
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  ngOnInit() {
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
  
    constructor(private storage: AngularFireStorage ,private db: AngularFirestore,private auth :AuthService) { }
  
    
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
          if (snap.bytesTransferred === snap.totalBytes) {
            // Update firestore on completion
            this.db.collection('payment').add( { path, size: snap.totalBytes ,UserId:this.auth.getUserid()})
          }
        })
      )
  
      // The file's download URL
      this.snapshot.pipe(finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())).subscribe();
    }
  
    // Determines if the upload task is active
    isActive(snapshot) {
      return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
    }


    

}







