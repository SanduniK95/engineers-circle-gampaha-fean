import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {
curuser : object
  constructor(private authservice : AuthService,private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.curuser=this.authservice.getUserProfile()
    this.cdRef.detectChanges();
    console.log(this.curuser)
  }

}
