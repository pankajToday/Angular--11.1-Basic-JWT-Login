import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../shared/token.service';

const base_url ="https://reqres.in/";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient, public token: TokenService) { }

    // User registration
    register(user: User): Observable<any> {
        return this.http.post(base_url+'api/register', user);
    }

    // Login
    signin(user: User): Observable<any> {
        return this.http.post<any>(base_url+'api/login', user);
    }

    // Access user profile
    profileUser(): Observable<any> {
        return this.http.get(base_url+'/api/unknown/2');
    }

    isLoggedInXXX(){
       return this.token.isLoggedIn()
    }

}
// User interface
export class User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}