import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
searchtext : string;
products: Product[];
filteredProduct: Product[];
cartProducts:Product[];
total:number=0;
contact:string;

  constructor(private productService: ProductService,private billService:BillService) { }

  ngOnInit() {
    this.cartProducts=[];
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
      this.filteredProduct=data;
    });

  }
  search(){
     
    this.filteredProduct=this.products.filter(x=>(x.productName.toLowerCase().indexOf(this.searchtext.toLowerCase())!==-1||x.productCode.toLowerCase().indexOf(this.searchtext.toLowerCase())!=-1));       
    
   }
   addToCart(product: Product){
    let added: boolean= false;
     //console.log(product);
     product.quantity=1;
     this.cartProducts.forEach(element => {
      if(element.productCode.match( product.productCode)){
        added=true;
      }  

     });
     if(!added){
      this.cartProducts.push(product);
      this.total= this.total + (+product.ratePerQuantity);
     }
   }

   remove(product:Product){
    if(product.quantity<=1){
      let index = this.cartProducts.indexOf(product);
       this.cartProducts.splice(index,1);
    }
    if(product.quantity > 0) { 
      product.quantity--;
      this.total= this.total - (+product.ratePerQuantity); 
    }

   }

   add(product:Product) {
    product.quantity++;
    this.total= this.total + (+product.ratePerQuantity); 
  }


  bill(){
    console.log(this.contact)
    this.cartProducts.forEach(element => {
      this.billService.bill(this.contact,element.productCode,element.quantity).subscribe(data=>{
        alert("Bill generated Successfully")
        this.cartProducts=null;
        this.searchtext="";
        this.contact="";
      })
    });
  }
}
