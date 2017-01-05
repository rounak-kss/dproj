import { Injectable, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DatabaseService {
  response = new EventEmitter();
  constructor(private http: HttpService) {}

  query(obj: any){
    this.http.getData(obj).subscribe(
      data => this.response.emit(data),
      error => this.response.emit(false)
    );
  }

}
