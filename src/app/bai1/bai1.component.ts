import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {
  student = {
    name: "Đinh thị Tố Lan",
    birthday: "24/11/2000",
    gender: "nữ",
    photo: "../../assets/images/hinhdaidien.jpg",
    mark: 10
  }
  constructor() { }

  ngOnInit() {
  }

}
