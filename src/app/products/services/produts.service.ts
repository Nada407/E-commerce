import { enviroment } from './../../../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutsService {
  constructor(private http: HttpClient) {}
  item:any;
  getAllProducts() {
    return this.http.get(enviroment.baseApi+'products');
    //when we get data from API , we only type get + the link the want to get the data from
  }
  getAllCategories(){
    return this.http.get(enviroment.baseApi+'products/categories');

  }
  getProductByCategory(keyword:string){// keyword gonna be the selected value
    return this.http.get(enviroment.baseApi+'products/category/'+keyword);
  }
  getProductByID(id:any){
    return this.http.get(enviroment.baseApi+'products/'+id);

  }



}
