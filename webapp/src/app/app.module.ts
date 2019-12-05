import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BillingComponent } from './billing/billing.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SignupComponent,
    SuperuserComponent,
    ProductinfoComponent,
    StockManagementComponent,
    AddProductComponent,
    BillingComponent,
    BillHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
