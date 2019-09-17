import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartService';
import { products } from '../products';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {

  products: any;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.products = this.cart.getItems();

  }
}
