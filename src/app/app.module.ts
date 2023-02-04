import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [AppComponent, CartComponent, AllProductsComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule,FormsModule],

})
export class AppModule {}
