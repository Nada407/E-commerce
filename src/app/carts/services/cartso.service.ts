import { enviroment } from './../../../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsoService {

  constructor(private http:HttpClient) { }
  createNewCart(model:any){
    return this.http.post(enviroment.baseApi+'carts',model )
  }
}
