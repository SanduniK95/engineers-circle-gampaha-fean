import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MemberSidebarComponent} from '../member-components/member-sidebar/member-sidebar.component'

//import { TypographyComponent } from '../../typography/typography.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MemberSidebarComponent,
    //TypographyComponent
    //ProjectCalenderComponent
    
  ],
  exports: [
    MemberSidebarComponent,
   // TypographyComponent
  // ProjectCalenderComponent
  ]
})

export class MemberComponentsModule { }
