import { ProdutsService } from './../../services/produts.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];//3ashan tshel kol el products ely gaya f array
  categories:string[]=[];//3ashan tshel kol el categories ely gaya f array
  loading:boolean=false;
  cartProducts:any[]=[];
  constructor(private service: ProdutsService) {}
  ngOnInit(): void {
    this.getProducts(); //ana kda bnadm 3la el function w bsh8alha awl ma el page e7salha loading
    this.getCategories();
  }
  getProducts() {
    this.loading=true;
    this.service.getAllProducts().subscribe((res: any) => {
       //sunbscribe here to is the layer to get data from back
      this.products = res; // here is the sucsuss case , if we got data sucsusslly fromt the array
      this.loading=false;

    },error =>{
          this.loading=false;
          console.log(error.message)
    }
    );
  }
  getCategories() {
    this.loading=true;
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories = res
      this.loading=false;
        },error =>{
          this.loading=false;
alert(error)    }
    );
  }
  filterCategory(event:any){
  let value=event.target.value;
  (value == "all")?this.getProducts():this.getProductsCategory(value)
  //this is a way to write a short condition => says : if the selection = All show all the data if any other show the selected option


  }
  getProductsCategory(keyword:string){
    this.loading=true;
    this.service.getProductByCategory(keyword).subscribe((res:any)=>{
      this.products=res;
      this.loading=false;


    })
      }
      addtocart(event:any){
        if("cart" in localStorage){ //this condition in case we have the cart in local storage , but what gonna happen in case not?
          //1- this step means we get the data from local storage and save it in the cart
          this.cartProducts=JSON.parse(localStorage.getItem("cart")!)//kda e7na saglna el data ely fl localstorage fl cartproducts
          //To avoid repeating the data and to check if has been exsist before or not : gonna need to search on the array
          //am searching and ask if the there is any item id equal event id = save it in the exsist
          let exist=this.cartProducts.find(item=>item.item.id==event.item.id)
          //we added the item here because we now getting the data from the item after that will get the ID of this data
          if(exist){
          alert("Product Has been added dude!")
          }
         else{
         //2- Next step we need to push in the cart
         this.cartProducts.push(event);
        //3- after pushing in the cart we need to add the pushed data with the updated array to the local storage(So we gonna set)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        }


        }
        else{ // if we dont have the cart in local storage , gonna push from the beginging
          //Just gonne push the data and set it
          this.cartProducts.push(event);
          localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        }
      }

}
