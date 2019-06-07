
import { Routes } from '@angular/router';

import { MemberDashboardComponent } from '../../member/member-dashboard/member-dashboard.component';
import {ProjectCalenderComponent} from '../../member/project-calender/project-calender.component'
import {PaymentComponent} from '../../payment/payment.component'
import {MemberProfileComponent} from '../../member/member-profile/member-profile.component'

export const MemberLayoutRoutes: Routes = [

    { path: 'member-dashboard',      component: MemberDashboardComponent },
    { path: 'ProjectCalender',      component: ProjectCalenderComponent },
    {path :'payment' , component:PaymentComponent},
    {path :'profile' , component:MemberProfileComponent}


];

