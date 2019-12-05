import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private url=environment.product;
  constructor(private authService: AuthService,private httpClient: HttpClient) { }


  bill(contact:string,productCode:string,quantity:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post<any>(this.url+"bill/"+contact+"/"+productCode+"/"+quantity,httpOptions);
  }

  getBillHistory(userId:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get<any>(this.url+"bill/"+userId,httpOptions);


  }
}
