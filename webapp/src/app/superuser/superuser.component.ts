import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../signup/user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  managerList:User[]

  constructor(private authService:AuthService, private router:Router, private userService :UserService) { }

  ngOnInit() {

    this.userService.getManagerDetails().subscribe(
      data=>{this.managerList=data;
        console.log(data);
        console.log(this.managerList);
      });
  }

  accept(manager:User){
   manager.status='A';
    this.userService.ManagerAcceptedDenied(manager).subscribe(data=>{
      this.ngOnInit();
    });
  }
  decline(manager:User){
    manager.status='D';
    this.userService.ManagerAcceptedDenied(manager).subscribe(data=>{
      this.ngOnInit();
    });
  }
}
