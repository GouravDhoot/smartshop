import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css']
})
export class StockManagementComponent implements OnInit {

types:string[];

  editForm:FormGroup;
  editProduct:Product;
  constructor(private formBuild:FormBuilder,private router:Router, private route:ActivatedRoute, private productService:ProductService) { }

  ngOnInit() {
  
    const code = this.route.snapshot.paramMap.get('code');
    this.productService.getTypeOfProducts().subscribe(data =>{
      // console.log(data);
       this.types=data;
       //console.log(this.productType[0]);
     
     });
    // this.foodItem = this.menuItemService.getMenuItem(+foodItemId);
     this.productService.getProduct(code).subscribe(
       (data) =>{

         //data.dateOfLaunch=new Date(data.dateOfLaunch)
         this.editProduct=data; 
         this.form();
     }); 
    this.form();
   }
   form() {
   
     this.editForm = this.formBuild.group({
       editName: [this.editProduct.productName,[
         Validators.required,
         Validators.minLength(2),
         Validators.maxLength(20)
       ]],
       editURL: [this.editProduct.productImage,[
         Validators.required
       ]],
       editBrand: [this.editProduct.brand,[
         Validators.required
       ]],
       expiryDate: [this.editProduct.dateOfExpiry,[
         Validators.required
       ]],
       addDate: [this.editProduct.addDate,[
        Validators.required
      ]],
       type: [this.editProduct.productType,[
         Validators.required
       ]],
       rate: [this.editProduct.ratePerQuantity,[
        Validators.required
      ]],
      manufactureDate: [this.editProduct.dateOfManufacture,[
        Validators.required
      ]],
       editStock: [this.editProduct.stock,[
        Validators.required
      ]],
       aisle: [this.editProduct.aisle,[
         Validators.required
       ]],
       shelf: [this.editProduct.shelf,[
        Validators.required
      ]],
     })
   }
 
   get editName() {
     return this.editForm.get('editName');
   }
   get editBrand() {
     return this.editForm.get('editBrand');
   }
   get expiryDate() {
     return this.editForm.get('expiryDate');
   }
   get addDate() {
    return this.editForm.get('addDate');
  }
   get aisle() {
     return this.editForm.get('aisle');
   }
   get shelf() {
     return this.editForm.get('shelf');
   }
   get rate() {
    return this.editForm.get('rate');
  }
  get manufactureDate() {
    return this.editForm.get('manufactureDate');
  }
   get editStock() {
     return this.editForm.get('editStock');
   }
   get type() {
    return this.editForm.get('type');
  }
   get editURL(){
     return this.editForm.get('editURL');
   }
   onSaveClick() {
     let proItem:Product = {productCode:this.editProduct.productCode,productName:this.editForm.value["editName"],brand:this.editForm.value["editBrand"],stock:this.editForm.value["editStock"],aisle:this.editForm.value["aisle"],
     dateOfExpiry:new Date(this.editForm.value["expiryDate"]),addDate:new Date(this.editForm.value["addDate"]),shelf:this.editForm.value["shelf"],productType:this.editForm.value["type"],ratePerQuantity:this.editForm.value["rate"],
     dateOfManufacture:new Date(this.editForm.value["manufactureDate"]),productImage:this.editForm.value["editURL"],quantity:null}
     this.productService.modifyProduct(proItem).subscribe(
       (data) =>{
         //data.dateOfLaunch=new Date(data.dateOfLaunch)
         proItem=data;
         this.router.navigate(['app-search'])});
     
   }
 
  }


