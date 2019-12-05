import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticated:boolean=true;
  username:string ='';
  password:string = '';
  constructor(private authService: AuthService, private router: Router){

  }
  ngOnInit(): void {
   
  }


  onlogin(){

this.authService.authenticate(this.username,this.password).subscribe(data=>{
  this.authService.setToken(data.token);
  this.authService.setRole(data.role);
  this.authService.setLoggedusername(data.username);
  this.authService.setLoggedInUser(true);
  this.authenticated= true;
  if(data.role == "user"){
    this.authService.setCustomerflag(true);
    this.router.navigateByUrl("/app-search")
  }
  if(data.role== "admin"){
    this.authService.setAdminflag(true);
  
    this.router.navigateByUrl("/app-search")
  }
if(data.role == "super"){
  this.authService.setSuperUserflag(true);
this.router.navigateByUrl("/superuser");
}


},
error =>{
  console.log("hi")
  console.log(error);
  this.authenticated=false;
})
  }

}
