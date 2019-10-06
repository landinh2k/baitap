import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ttsv',
  templateUrl: './ttsv.component.html',
  styleUrls: ['./ttsv.component.css']
})
export class TtsvComponent implements OnInit {

  ttsv = {
    hvt: null,
    ngaysinh: null,
    gioitinh: null,
    diem: null,
    hocluc: null
  }
  constructor() { }

  ngOnInit() {
  }
  seen() {
    if (this.ttsv.diem >= 5)
      this.ttsv.hocluc = "Chúc mừng bạn đã đậu"
    if (this.ttsv.diem < 5)
      this.ttsv.hocluc = "Bạn đã rớt"
  }
}