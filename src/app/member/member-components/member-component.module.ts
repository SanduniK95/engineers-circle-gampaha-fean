import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MemberSidebarComponent} from '../member-components/member-sidebar/member-sidebar.component';
import { MemberNavbarComponent } from '../member-components/member-navbar/member-navbar.component'
//import { TypographyComponent } from '../../typography/typography.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MemberSidebarComponent,
    MemberNavbarComponent,
    //TypographyComponent
    //ProjectCalenderComponent
    
  ],
  exports: [
    MemberSidebarComponent,
    MemberNavbarComponent
   // TypographyComponent
  // ProjectCalenderComponent
  ]
})

export class MemberComponentsModule { }
