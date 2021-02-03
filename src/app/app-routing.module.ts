import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from "./shared/auth.guard";

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Error404Component } from './components/error-page/error404/error404.component';





const routes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'error-404', pathMatch: 'full' },
   { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
