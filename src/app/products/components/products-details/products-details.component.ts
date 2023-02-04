import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products';
import { ProdutsService } from '../../services/produts.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  id:any;
  data:any={}
  loading:boolean=false;
  constructor(private route:ActivatedRoute,private service:ProdutsService)
  {this.id=this.route.snapshot.paramMap.get("id")

}
ngOnInit(): void {
this.getProduct();
}
getProduct(){
  this.loading=true;//when caliing the system will be true
  this.service.getProductByID(this.id).subscribe(res=>{
  this.loading=false;//when any action happened be false
  this.data=res;

}, error =>{
  this.loading=false
  alert(error)
})
}

}
