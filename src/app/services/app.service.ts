import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  body={
    "name":"Samadhan",
    "email":"sarde123samadhan@gmail.com",
    "password":"123456789",
    "address":"Nanded city",
    "city":"Pune",
    "state":"Maharashtra",
     "country":"India",
     "zip":"411041",
     "contact":"9881320423"
    } ;
  addUser(){
    return this.http.post('http://localhost:3000/add-user',this.body);
  }
}
