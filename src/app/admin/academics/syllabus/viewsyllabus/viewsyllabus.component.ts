import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-viewsyllabus',
  templateUrl: './viewsyllabus.component.html',
  styles: []
})
export class ViewsyllabusComponent implements OnInit {

  constructor(private database: DatabaseService) {
    this.database.response.subscribe(
      data => console.log(data)
    );
  }

  ngOnInit() {
  this.database.query({goto:"abc",username: "user"});
  }

}