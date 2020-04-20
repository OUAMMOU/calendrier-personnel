import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {
  name=''
  welcomMessageFromService : string
  constructor(private route : ActivatedRoute , private welcomedataservice : WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];

  }
  // getWelcomeMessage(){
  //   console.log(this.welcomedataservice.executeHelloWorldBeanService());
  //   this.welcomedataservice.executeHelloWorldBeanService().subscribe(
  //     Response =>this.handleSuccessfulResponse(Response)
  //   , Error=>this.handleErrorResponse(Error)
  //     );
  //   }
      getWelcomeMessageWithParam(){
        //console.log(this.welcomedataservice.executeHelloWorldBeanService());
        this.welcomedataservice.executeHelloWorldParamService(this.name).subscribe(
          Response =>this.handleSuccessfulResponse(Response)
        , Error=>this.handleErrorResponse(Error)
          );
  }
  handleSuccessfulResponse(Response)
   {
     this.welcomMessageFromService=Response.message
     console.log(Response)
     console.log("votre message"+this.welcomMessageFromService)
   }
   handleErrorResponse(Error)
   {
     console.log(Error)
    this.welcomMessageFromService=Error.error.message   }
}
