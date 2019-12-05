import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
isAdmin:boolean=false;
counter:number=0;
  @Input()
  productList:Product[];
  constructor(private authService: AuthService, private productService: ProductService, private router: Router) {

   }

  ngOnInit() {
    this.isAdmin = this.authService.getAdminflag();

  }
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }
  deleteProduct(code:string){
    this.productService.deleteProduct(code).subscribe(data=>{
      this.productService.getAllProducts().subscribe(data=>{
        this.productList=data;
       
       });
    })

  }

}
