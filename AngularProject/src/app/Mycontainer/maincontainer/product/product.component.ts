import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSelect:string;
  addedproduct:any;
  productSelected:boolean=false;
  onSelectProduct(product)
  {
    this.productSelected=true;
    this.productSelect=product;
  }
  addToCart()
  {
    this.addedproduct=this.productSelect;
  }

}
