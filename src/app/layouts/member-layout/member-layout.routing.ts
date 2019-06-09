
import { Routes } from '@angular/router';

import {ProjectCalenderComponent} from '../../member/project-calender/project-calender.component'
import {PaymentComponent} from '../../payment/payment.component'
import {MemberProfileComponent} from '../../member/member-profile/member-profile.component'

export const MemberLayoutRoutes: Routes = [

    { path: 'ProjectCalender',      component: ProjectCalenderComponent },
    {path :'payment' , component:PaymentComponent},
    {path :'profile' , component:MemberProfileComponent}


];

