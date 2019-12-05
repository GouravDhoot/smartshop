import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './signup/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  loggedInUser:boolean;
  superUserFlag:boolean;
  adminflag:boolean;
  customer:boolean;
  loggedusername:string;
  role:string;
  
  private token: string=null;
  private authenticationApiUrl =environment.authenticate;

  constructor(private httpClient:HttpClient) { }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public getRole(){
    return this.role;
  }

  public setRole(v : string){
    this.role = v;
  }

//   public getId() {
//     return this.id;
//   }

//  public setId(id:number) {
//     this.id = id;
//   }

  public getLoggedusername() {
    return this.loggedusername
  }
  
   public setLoggedusername(v : string) {
     this.loggedusername = v;
   }
   
   public getLoggedInUser() {
    return this.loggedInUser
  }
  
   public setLoggedInUser(v : boolean) {
     this.loggedInUser = v;
   }
   
   public getAdminflag(){
    return this.adminflag;
  }

  public setAdminflag(v : boolean){
    this.adminflag = v;
  }

  public getSuperUserflag(){
    return this.superUserFlag;
  }

  public setSuperUserflag(v : boolean){
    this.superUserFlag = v;
  }
  getUserName(){
    return this.loggedusername;
  }

  public getCustomerflag(){
    return this.customer;
  }

  public setCustomerflag(v : boolean){
    this.customer = v;
  }
  
  authenticate(user: string, password: string): Observable<any>{
    //console.log(user+password);
    let credentials = btoa(user+':'+password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
   return this.httpClient.get(this.authenticationApiUrl,{headers});
  }
  
  logout(){
    this.setToken(null);
    this.setRole(null);
    this.setLoggedusername(null);
    this.setLoggedInUser(false);
    this.setAdminflag(null);
    this.setSuperUserflag(null);
  }
  
}
