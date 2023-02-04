import { CartsoService } from './../carts/services/cartso.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts:any[]=[]; // this parameter have all the data am accepting from the local storage
  total:any=0;
  success:boolean=false
constructor(private service:CartsoService){}
ngOnInit(): void {this.getCartProducts( )}
getCartProducts(){
if("cart" in localStorage){
this.cartProducts=JSON.parse(localStorage.getItem("cart")!)//here we get the data that called cart from the local storage
}
this.getCartTotal()
}

minsAmount(index:number){this.cartProducts[index].quantity--;
  this.getCartTotal();
  if(index >=1){
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
  else{

  }
}
AddAmount(index:number){this.cartProducts[index].quantity++;
  this.getCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
detectchange(){
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

}
deleteProduct(index:number){
  this.cartProducts.splice(index,1);
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
clearCart(){
  this.cartProducts=[];
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts));

}
getCartTotal(){
  this.total=0;//initial val
  for(let x in this.cartProducts){// we creating loop to loop in all cartproduct
this.total+= this.cartProducts[x].item.price*this.cartProducts[x].quantity;
  }
}
addCart(){
  let  products = this.cartProducts.map(item =>{
  return  {productId:item.id,quantity: item.quatity} //gonna return array of object
  })
  let Model = {
    userId:5,
    date:new Date(),
    products:products
  }
  this.service.createNewCart(Model).subscribe(res =>{
    this.success=true;

  })
console.log(Model)
}
}
