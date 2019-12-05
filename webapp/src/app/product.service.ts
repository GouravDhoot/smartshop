import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url=environment.product;
  constructor(private httpClient: HttpClient,private authService: AuthService) { }

  getTypeOfProducts():Observable<string[]>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get<string[]>(this.url+"product/type",httpOptions);
  }

  getProducts(productType:string):Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };

    return this.httpClient.get<Product[]>(this.url+"product/"+productType,httpOptions);
  }
  getAllProducts():Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.get<Product[]>(this.url+"product",httpOptions);
  }

  getProduct(code:string):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    console.log(code);
    return this.httpClient.get<Product>(this.url+"product"+"/getproduct/"+code,httpOptions);
  }

  modifyProduct(product:Product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.put<Product>(this.url+"product"+"/modify",product,httpOptions); 
  }

  addProduct(product: Product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.post<Product>(this.url+"product"+"/addProduct",product,httpOptions); 
  }

  deleteProduct(code:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };
    return this.httpClient.delete<any>(this.url+"product"+"/delete/"+code,httpOptions);
  }
}
