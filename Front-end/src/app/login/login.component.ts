import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HardcodeAuthenticationService } from '../services/hardcode-authentication.service';
import { BasicAuthenticationService } from '../services/Basic-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username=""
  password=""
  errorMessage='invalide credential'
  ivalidelogin=false

  constructor(private router : Router,private BasicAuthenticationService :BasicAuthenticationService,
  private hardcodeAuthentificationService: HardcodeAuthenticationService) { }
  handllogin(){
    if(this.hardcodeAuthentificationService.authenticate(this.username,this.password)){
      this.ivalidelogin=false
     this.router.navigate(['welcom',this.username])
     
 }
    else{
      this.ivalidelogin=true
  
    }
    
  }

handlBasicAuthlogin(){
  //return an obervable back donc subscibe it 
    this.BasicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
     data=>{
       console.log(data)
       this.router.navigate(['welcom',this.username])
       this.ivalidelogin=false
      } ,
     error=>{
       console.log(error)
       this.ivalidelogin=true
     }
    )

    
  }

  ngOnInit(): void {
  }

}
