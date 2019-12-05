import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './signup/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=environment.product;
  constructor(private httpClient: HttpClient,private authService: AuthService) { }

  adduser(newuser:User){
    return this.httpClient.post(this.url+"users/customer",newuser);
     //this.user.push(newuser);
     //console.log(newuser);
   }
   addManager(newuser:User){
     return this.httpClient.post(this.url+"users/manager",newuser)
   }

   getManagerDetails():Observable<User[]>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get<User[]>(this.url+"shopmanagers",httpOptions);
  }

  ManagerAcceptedDenied(user:User):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.put(this.url+"users/managerAuthorization",user,httpOptions);
  }

}
