import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-viewsyllabus',
  templateUrl: './viewsyllabus.component.html',
  styles: []
})
export class ViewsyllabusComponent implements OnInit {
  standards: any[] = [];
  syllabus: any[] = [];
  constructor(private database: DatabaseService) {
    this.database.response.subscribe(
      data => {
        if(data.goto == "getstandards"){
          this.standards = data.data;
        }
        if(data.goto == "viewsyllabus"){
          this.syllabus = data.data;
        }
      }
    );
  }

  ngOnInit() {
  this.database.query({goto:"getstandards"});
  }
  selectedStandard(value) {
    if(value != 0){
      this.database.query({goto:"viewsyllabus",standard:value});
    }
  }

}