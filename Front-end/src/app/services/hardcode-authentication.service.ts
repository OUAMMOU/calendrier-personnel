import { Injectable } from '@angular/core';
// makes it a service injecgt to anay place i want to use
@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username,password){
    //console.log('befor'+this.isUserLoogedIn());
    if(username=== "mohamed" && password=== "ana"){
      sessionStorage.setItem('authenticateUser',username);
      // console.log('after'+this.isUserLoogedIn());
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoogedIn()
  {
    let user=sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  logout()
    {
    sessionStorage.removeItem('authenticateUser');
    }
  
}
