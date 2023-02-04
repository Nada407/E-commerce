import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() data:any={}
@Output() item =new EventEmitter ();//gonna send the data the i have been standed in on item parm so gonna accept it in parent with item
addbutton:boolean=false;
amount:number=0;
constructor(){}
ngOnInit(): void {}
add(){
  this.item.emit({item:this.data,quantity:this.amount});
  //want to add the data the am already stand in , also gonna send the amount of number that i have been entered in the input
}

}
