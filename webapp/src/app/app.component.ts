import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService : AuthService) { }
  isAuthenticated() {
    return this.authService.loggedInUser;
  }

  isAdmin() {
    return this.authService.adminflag;
  }
  isCustomer() {
    return this.authService.customer;
  }
  getRole(){
    return this.authService.getRole();
  }

  getUser() {
    //console.log(this.authService.loggedusername);
    return this.authService.loggedusername;
  }
  
  onSignOut() {
   
   this.authService.logout();
  
  }
  ngOnInit() {
  }

}
