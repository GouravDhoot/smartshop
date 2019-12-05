import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchtext:string='';
products:Product[];
filteredProduct:Product[];
productType:string[];
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getTypeOfProducts().subscribe(data =>{
     // console.log(data);
      this.productType=data;
      //console.log(this.productType[0]);
    
    });
    this.productService.getAllProducts().subscribe(data=>{
     this.products=data;
     this.filteredProduct=data;
    console.log(this.filteredProduct);
    
    });
  }
  search(){
    // console.log("in food search method");
     
    this.filteredProduct=this.products.filter(x=>x.productName.toLowerCase().indexOf(this.searchtext.toLowerCase())!==-1);       
    
     // console.log(this.food);
     //this.food=this.service.getFoodItems1(this.searchtext);
    // this.menuService.getAllMenuItems().subscribe(data => {this.food =data;});
   }

   productTypeSelected(event:any){
    console.log(event.target.value);
    if(event.target.value=='All'){
      this.productService.getAllProducts().subscribe(data=>{
        this.products=data;
        this.filteredProduct=data;
      console.log(this.filteredProduct);
       
       });
    }
    else{
    this.productService.getProducts(event.target.value).subscribe(
      data =>{
        this.products=data;
     this.filteredProduct=data;
      }
    )
   }
  }
}
