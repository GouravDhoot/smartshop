import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BillingComponent } from './billing/billing.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-search', pathMatch: 'full' },
  {path:'app-search', component: SearchComponent},
  {path:'signupA/:user', component:SignupComponent},
  {path:'signupU/:user', component:SignupComponent},
  { path:'login', component: LoginComponent },
  {path:'superuser', component: SuperuserComponent},
  {path:'product-edit/:code', component: StockManagementComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'billing', component:BillingComponent},
  {path: 'billHistory', component:BillHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
