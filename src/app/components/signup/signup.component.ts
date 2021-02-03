import {Component, Injectable, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public router: Router,
               public fb: FormBuilder,) {
      this.registerForm = this.fb.group({
          name: [''],
          email: [''],
          password: [''],
          password_confirmation: ['']
      })
  }

    registerForm: FormGroup;
    errors = null;

  ngOnInit(): void {
  }

    onSubmit() {
        /*this.authService.register(this.registerForm.value).subscribe(
            result => {
                console.log(result)
            },
            error => {
                this.errors = error.error;
            },
            () => {
                this.registerForm.reset()
                this.router.navigate(['login']);
            }
        )*/
    }


}
