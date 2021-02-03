import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import {RouterModule} from '@angular/router';
import  {AppRoutingModule} from './app-routing.module';
import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Error404Component } from './components/error-page/error404/error404.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      ReactiveFormsModule, FormsModule,
      RouterModule,AppRoutingModule
  ],
  providers: [ {
      provide: AuthService,
      useClass: AuthInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
