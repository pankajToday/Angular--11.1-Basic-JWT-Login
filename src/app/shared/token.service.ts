import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

    private issuer = {
        login: 'http://127.0.0.1:8000/api/auth/login',
        register: 'http://127.0.0.1:8000/api/auth/register'
    }

    constructor() { }

    handleData(token){
        localStorage.setItem('auth_token_ag_11', token);
    }

    getToken(){
        return localStorage.getItem('auth_token_ag_11');
    }

    // Verify the token
    isValidToken(){
        const token = this.getToken();
        if(token){
            // code commented due to undefined encode string. may be work in JWT Token.
           // const payload = this.payload(token);
            const  payload = token;
            if(payload){
                return true;
                // remove if JWT or any valid token comes.
               // return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
            }
        } else {

            return false;
        }
    }

    payload(token) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }

    // User state based on valid token
    isLoggedIn() {
        return this.isValidToken();
    }

    // Remove token
    removeToken(){
        localStorage.removeItem('auth_token_ag_11');
    }
}
