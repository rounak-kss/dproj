import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {serverurl} from './website.url';
import 'rxjs/Rx';
//import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}
  getData(data: any){
    const body = JSON.stringify(data);
    console.log("Data Sent: "+body);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(serverurl, body,{headers:headers})
    .map((data: Response)=>{
      console.log("Data Received:");
      console.log(data.json());
      return data.json();
    });//.catch(this.errorHandle);
  }
  /*
  errorHandle(error: any) {
    console.log(error);
    return Observable.throw(error);
  }*/

}
