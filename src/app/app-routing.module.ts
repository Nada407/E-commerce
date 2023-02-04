import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }, //in case write any wrong path
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
