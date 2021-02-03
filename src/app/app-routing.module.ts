import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from "./shared/auth.guard";

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Error404Component } from './components/error-page/error404/error404.component';





const appRoutes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },

  { path: 'error-404', component: Error404Component },

    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: '**', redirectTo: '/error-404' },

];
//  path: '' always take place first and then  path: '**'..
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
