import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MemberDashboardComponent } from './member/member-dashboard/member-dashboard.component'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthGuard } from "./auth.guard";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';
import { LandingComponent } from './landing/landing.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ExternalProjectComponent } from './external-project/external-project.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'external-project', component: ExternalProjectComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AdminLayoutComponent, children: [
      { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'  }
    ]
    ,canActivate:[AuthGuard]
  },
  {
    path :'',component:MemberLayoutComponent,children:[
      {path:'', loadChildren:'./layouts/member-layout/member-layout.module#MemberLayoutModule'}
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
