import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// makes it a service injecgt to anay place i want to use

import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const Token = 'token'
export const authenticate_User='authenticateUser'

export class AutenticationBean {
  constructor(public message: string) {
    
  }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  isUserLoogedIn()
  {
    let user=sessionStorage.getItem(authenticate_User)
    return !(user === null)
  }
  logout()
    {
    sessionStorage.removeItem(authenticate_User)
    sessionStorage.removeItem(Token)
    }
    executeAuthenticationService(username,password){
        let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)

      let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })
    
      console.log("im here in param service");
      return this.http.get<AutenticationBean>(
      `${API_URL}/AuthBasic`,{headers}).pipe(map(
        data=>{
          sessionStorage.setItem(authenticate_User,username);

          sessionStorage.setItem(Token,basicAuthHeaderString);
          return data;
        }
      )
      )
     }
     getAuthenticatedUser()
  {
    return sessionStorage.getItem(authenticate_User)

  }
  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(Token)

  }



    /*Access to XMLHttpRequest at 'http://localhost:8080/bean/mohamed' from origin 'http://localhost:4200' has
     been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    */
   
    //after 
    /* Access to XMLHttpRequest at 'http://localhost:8080/bean/mohamed' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
    */



}
