import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Component/spinner/spinner.component';
import { SelectComponent } from './Component/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';


@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent,ProductComponent],
  imports: [CommonModule, BrowserModule, RouterModule, HttpClientModule,FormsModule],
  exports: [HeaderComponent,SpinnerComponent,SelectComponent,ProductComponent,FormsModule], //this export to make sure that project is readable outside the component
})
export class SharedModule {}
