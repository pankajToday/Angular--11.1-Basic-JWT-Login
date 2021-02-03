import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// User interface
export class User {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}


export class AuthService {

    constructor(private http: HttpClient) { }

    // User registration
    register(user: User): Observable<any> {
        return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
    }

    // Login
    signin(user: User): Observable<any> {
        return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
    }

    // Access user profile
    profileUser(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
    }

    isLoggedIn(){
        return true ;
    }

}
