import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../Basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasixAuthService implements HttpInterceptor{


  constructor(private BasicAuthenticationService : BasicAuthenticationService) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler){
    //  let username = 'mohamed'
    // let password = 'ouammou'
     //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let basicAuthHeaderString =this.BasicAuthenticationService.getAuthenticatedToken()
    let username=this.BasicAuthenticationService.getAuthenticatedUser();
    //the request objet can not be modified so we will clone it and 
    //overrid a specific param so to add the Hedear  
   console.log("je suis la en servise")
   if(basicAuthHeaderString && username){
    request=request.clone({
       setHeaders :{
        Authorization: basicAuthHeaderString
       }
     })
     //send the modifie request (intercep the request  add the au
     //autozisation header and send it to the next http handler  )
    }
     return next.handle(request)

  }
  }



