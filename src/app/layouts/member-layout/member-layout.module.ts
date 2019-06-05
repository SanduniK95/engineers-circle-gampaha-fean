import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberLayoutRoutes } from './member-layout.routing';
import {MemberDashboardComponent} from '../../member/member-dashboard/member-dashboard.component'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {ProjectCalenderComponent} from '../../member/project-calender/project-calender.component'
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  } from '@angular/material';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MemberLayoutRoutes),
      FormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      ScheduleModule
    ],
    declarations: [
        MemberDashboardComponent,
        ProjectCalenderComponent
    ]
})

export class MemberLayoutModule {}
