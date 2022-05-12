import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'list-users',component:ListUsersComponent},
  {path:'update-users',component:UpdateUsersComponent},
  {path:'delete-users',component:DeleteUsersComponent},
  {path:'find-by-id',component:FindByIdComponent},
  {path:'list-products',component:ListProductsComponent},
  {path:'add-products',component:AddProductsComponent},
  {path:'update-products/:id',component:UpdateProductsComponent},
  {path:'display-products',component:DisplayProductsComponent},
  {path:'view-cart',component:ViewCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
