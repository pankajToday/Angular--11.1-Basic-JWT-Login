import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],


})
export class SigninComponent implements OnInit {

  constructor(public router: Router,
              public fb: FormBuilder,
              private token: TokenService,
              private authState: AuthStateService,
              private authService : AuthService) {
      this.loginForm = this.fb.group({
          email: ['eve.holt@reqres.in'],
          password: ['cityslicka']
      })
  }

    loginForm: FormGroup;
    errors = null;


  ngOnInit(): void {
  }

    onSubmit() {

        this.authService.signin(this.loginForm.value).subscribe(
            result => {
                this.responseHandler(result);
                console.log(result)
            },
            error => {
                this.errors = error.error;
            },() => {
                this.authState.setAuthState(true);
                this.loginForm.reset()
                this.router.navigate(['user-profile']);
            }
        );
    }

// Handle response
    responseHandler(data){

      if(data.token)
      {
          this.token.handleData(data.token);
      }
      else if( data.access_token )
      {
          this.token.handleData(data.access_token);
      }
      else
      {
          this.token.handleData('');
      }

    }

}
