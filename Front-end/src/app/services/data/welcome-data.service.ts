import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message : String ){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }


executeHelloWorldBeanService(){

 console.log("im here");
 return this.http.get<HelloWorldBean>("http://localhost:8080/bean");
}

executeHelloWorldParamService(name){

  // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

  // let headers = new HttpHeaders({
  //      Authorization: basicAuthHeaderString
  //    })

  console.log("im here in param service");
  return this.http.get<HelloWorldBean>(
  `http://localhost:8080/Acceuil/${name}`,
  //{headers}
  );
 }
/*Access to XMLHttpRequest at 'http://localhost:8080/bean/mohamed' from origin 'http://localhost:4200' has
 been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
*/
// createBasicAuthenticationHttpHeader(){
//   let username = 'mohamed'
//      let password = 'ouammou'
//      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//      return basicAuthHeaderString;
//  }
//after 
/* Access to XMLHttpRequest at 'http://localhost:8080/bean/mohamed' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
*/
}

