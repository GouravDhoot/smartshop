import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BillService } from '../bill.service';
import { Bill } from './bill';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {
billList:Bill[];
fillteredList:Bill[]
date:Date=null;
total:number=0;
  constructor(private authService: AuthService, private billService: BillService) { }

  ngOnInit() {
    this.billService.getBillHistory(this.authService.getLoggedusername()).subscribe(data=>{
      console.log(data);
      this.billList=data;
      this.fillteredList=data
    this.doTotal();

    })
  }
  dateChange(){
   
    if(this.date.toLocaleString().length==0){
      this.fillteredList=this.billList
      this.doTotal();
    }
    else{
    this.fillteredList= this.billList.filter(bill=>this.date.toLocaleString().match(bill.purchase_date.toLocaleString()))
   this.doTotal();
  }
   
  }
  doTotal(){
    this.total=0
    this.fillteredList.forEach(element => {
      this.total = this.total +(element.quantity* element.product.ratePerQuantity);
    });
  }
}
