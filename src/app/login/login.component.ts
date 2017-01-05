import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private database: DatabaseService) {}
  ngOnInit() {
      this.database.response.subscribe(
      data => console.log(data)
    );
  }
  getdata(){
     this.database.query({username: "user"});
  }

}
