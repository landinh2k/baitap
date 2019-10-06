import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttl',
  templateUrl: './ttl.component.html',
  styleUrls: ['./ttl.component.css']
})
export class TtlComponent implements OnInit {

  employee = {
    fullname: null,
    salary: null,
    gender: null,
    rate: 0
  };
  list = [
    {
      age: 'Dưới 25 tuổi',
      rate: 0.07,
    },
    {
      age: 'Từ 25 đến 40 tuổi',
      rate: 0.1,
    },
    {
      age: 'Trên 40 tuổi',
      rate: 0.15,
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  TinhThuong() {
    let s = this.employee.rate * this.employee.salary;
    if (this.employee.gender == "Nu")
      s = s + 200000
    return s;
  }
}