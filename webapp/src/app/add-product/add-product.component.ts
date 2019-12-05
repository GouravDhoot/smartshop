import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  editForm:FormGroup;
  types:string[];
  constructor(private formBuild:FormBuilder, private productService: ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getTypeOfProducts().subscribe(data =>{
      // console.log(data);
       this.types=data;
       //console.log(this.productType[0]);
     
     });
    this.editForm = this.formBuild.group({
      editCode: [null,[
        Validators.required,
      ]],
      editName: [null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      editURL: [null,[
        Validators.required
      ]],
      editBrand: [null,[
        Validators.required
      ]],
      expiryDate: [null,[
        Validators.required
      ]],
      addDate: [null,[
       Validators.required
     ]],
      type: [null,[
        Validators.required
      ]],
      rate: [null,[
       Validators.required
     ]],
     manufactureDate: [null,[
       Validators.required
     ]],
      editStock: [null,[
       Validators.required
     ]],
      aisle: [null,[
        Validators.required
      ]],
      shelf: [null,[
       Validators.required
     ]],
    })
  }

  get editCode(){
    return this.editForm.get('editCode');
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

  onSaveClick(){
    let proItem:Product = {productCode:this.editForm.value["editCode"],productName:this.editForm.value["editName"],brand:this.editForm.value["editBrand"],stock:this.editForm.value["editStock"],aisle:this.editForm.value["aisle"],
    dateOfExpiry:new Date(this.editForm.value["expiryDate"]),addDate:new Date(this.editForm.value["addDate"]),shelf:this.editForm.value["shelf"],productType:this.editForm.value["type"],ratePerQuantity:this.editForm.value["rate"],
    dateOfManufacture:new Date(this.editForm.value["manufactureDate"]),productImage:this.editForm.value["editURL"],quantity:null}
    if(proItem.productName==null||proItem.ratePerQuantity==null||proItem.productCode==null){
      alert("Enter all values");
    }
    //console.log(proItem);
    else{
    this.productService.addProduct(proItem).subscribe(
      data=>{
        this.router.navigate(['app-search'])
      }
    )
  }
  }
}
