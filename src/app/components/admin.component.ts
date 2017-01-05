import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [`
    .dp-active {
      background-color: #5466ce;
    }
    .dp-height {
      height: 60px;
    }
  `]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
