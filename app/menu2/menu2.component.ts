import { Component, OnInit } from '@angular/core';
import { students } from '../student';


@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  config: any;
  constructor() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.listStudents.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  searchText

  listStudents = []

  onDeleteStudent(id) {
    let isDelete = confirm("Xác Nhận Xóa ???")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.id !== id
      })
      this.listStudents = [...temp]
    }
  }

  pageOfItems: Array<any>;
  ngOnInit() {
    this.listStudents = students.map((student, i) => (student));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    pageOfItems = pageOfItems;
  }
}
