import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../services/hardcode-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private service :HardcodeAuthenticationService) { }

  ngOnInit(): void {
      this.service.logout();
  }

}
