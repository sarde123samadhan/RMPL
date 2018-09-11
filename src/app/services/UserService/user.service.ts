import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user';

import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

  signUp(user:User){
    let body=JSON.stringify(user);
    console.log("Body:",body);
    return this.http.post(environment.backendURL+'/add-user',JSON.parse(body)).pipe(map(res=>{
      console.log(res);
      return res;
    }));
  }
}
