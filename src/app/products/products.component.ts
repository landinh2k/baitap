import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    console.log(products);
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }
  searchText;
  visibleImage = true;
  listProducts = [...products]

}
