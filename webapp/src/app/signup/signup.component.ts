import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
type:string;
user:User={firstName:"",lastName:"",age:null,gender:"",contactNumber:"",userId:"",password:"", status:""}; 
userForm:FormGroup;

constructor(private route:ActivatedRoute, private userService : UserService, private routeTo: Router){}
  ngOnInit() {
  this.type = this.route.snapshot.paramMap.get('user');
 console.log(this.type);

 this.userForm = new FormGroup({
  'userId' : new FormControl('', [
    Validators.required,
  ]),
  'firstName' : new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\s]*$')
  ]),
  'lastName' : new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z\s]*$')
  ]),
  'age' : new FormControl('',[
   Validators.required,
  ]
  ),
  'gender' : new FormControl('',[
    Validators.required 
   ]
   ),
   'contactNumber' : new FormControl('',[
    Validators.required
   ]
   ),
   
  'password' : new FormControl('', [
    Validators.required
  ])
  // 'confirm_password' : new FormControl('', [
  //   Validators.required
  // ])
});
    this.userForm.get('userId').valueChanges.subscribe(value=>{this.user.userId=value;});
    this.userForm.get('firstName').valueChanges.subscribe(value=>{this.user.firstName=value; });
    this.userForm.get('lastName').valueChanges.subscribe(value=>{this.user.lastName=value;});
    this.userForm.get('password').valueChanges.subscribe(value=>{this.user.password=value;});
    this.userForm.get('age').valueChanges.subscribe(value=>{this.user.age=value;});
    this.userForm.get('gender').valueChanges.subscribe(value=>{this.user.gender=value;});
    this.userForm.get('contactNumber').valueChanges.subscribe(value=>{this.user.contactNumber=value;});
  }

  onSubmit(){
   console.log(this.user);
    if(this.type=='user'){
      
      if(this.user.userId==""||this.user.firstName==""){
        
        alert("Enter all values");
      }
     else{ 
     
         this.userService.adduser(this.user).subscribe(data => {console.log("added user");
      this.routeTo.navigateByUrl('/login');
    },error=>{

     alert("User Already Present")
    });
  }
    }
    if(this.type=='admin'){
      if(this.user.userId==""||this.user.firstName==""){
        console.log("in admin if");
        alert("Enter all values")
         }
          else{
            console.log("in admin else");
     
      this.userService.addManager(this.user).subscribe(data => {console.log("added admin");
      this.routeTo.navigateByUrl('/login');
    },error=>{
      alert("User Already Present")
    }
    );
  }
    }
  
   }

   get userId() {
    return this.userForm.get('userId'); }
   get firstName() { 
    return this.userForm.get('firstName'); }
   get lastName() { return this.userForm.get('lastName'); }
   get password() { return this.userForm.get('password'); }
   get age(){ return this.userForm.get('age')}
   get gender(){ return this.userForm.get('gender')}
   get contactNumber(){ return this.userForm.get('contactNumber')}
}
