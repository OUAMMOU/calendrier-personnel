import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../services/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn : boolean=false
  constructor(public hardcodeAuthenticationService : HardcodeAuthenticationService) { }

  ngOnInit(): void {
   // this.isUserLoggedIn=this.hardcodeAuthenticationService.isUserLoogedIn();
  }

}
