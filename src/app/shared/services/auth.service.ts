import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";


var isadmin: boolean


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {

        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }



  cheackAdmin(uid) {
    var isadmin
    this.afs.collection('users').doc(uid).ref.get().then((doc) => {
      var that = this

      if (doc.exists) {


        console.log(doc.data().isadmin)
        if (doc.data().isadmin == true) {
          that.router.navigate(['dashboard']);
        }
        else if (doc.data().isadmin == false) {
          that.router.navigate(['member'])
        }
      } else {
        console.log("No such document!");
        return null
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
      return null
    });
    return isadmin
  }




  get isadminloggedin(): any {
    var uid
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      uid = (JSON.parse(localStorage.getItem('user')).uid)
    }
    var isadmin = this.afs.collection('users').doc(uid).ref.get().then((doc) => {

      if (doc.exists) {
        return doc.data().isadmin
      } else {
        console.log("No such document!");
        return null
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
      return null
    });
    return isadmin
  }




  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(this.cheackAdmin(result.user.uid))
        this.ngZone.run(() => {
          // if (this.cheackAdmin(result.user.uid)) {
          //   this.router.navigate(['dashboard']);
          // }
          // else if(!this.cheackAdmin(result.user.uid)) {
          //   this.router.navigate(['member'])
          // }
          this.cheackAdmin(result.user.uid)
        });
        //  this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }





  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {

        this.SendVerificationMail();
        // isadmin=false
        this.SetUserData(result.user);

      }).catch((error) => {
        window.alert(error.message)
      })
  }



  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {

          this.cheackAdmin(result.user.uid)
        })
         this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      isadmin: false
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}