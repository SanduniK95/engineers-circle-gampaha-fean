
import { Routes } from '@angular/router';

import { MemberDashboardComponent } from '../../member/member-dashboard/member-dashboard.component';
import {ProjectCalenderComponent} from '../../member/project-calender/project-calender.component'



export const MemberLayoutRoutes: Routes = [

    { path: 'member-dashboard',      component: MemberDashboardComponent },
    { path: 'ProjectCalender',      component: ProjectCalenderComponent },


];

