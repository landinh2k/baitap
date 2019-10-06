import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {
  sl = {
    sl1: null,
    sl2: null,
    sl3: null,
  }
  dg = {
    dg1: null,
    dg2: null,
    dg3: null
  }
  constructor() { }

  ngOnInit() {
  }
  tinh1() {
    let s = this.sl.sl1 * this.dg.dg1;
    return s;
  }
  tinh2() {
    let s = this.sl.sl2 * this.dg.dg2;
    return s;
  }
  tinh3() {
    let s = this.sl.sl3 * this.dg.dg3;
    return s;
  }


}
