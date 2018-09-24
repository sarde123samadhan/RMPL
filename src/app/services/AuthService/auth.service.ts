import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendURL:string=environment.backendURL;
  constructor(private http:HttpClient) { }

  singIn(email:string,password:string){
    return this.http.post(this.backendURL+'/sign-in',{email:email,password:password}).pipe(map(result=>{
      console.log(result);
      if(result){
        localStorage.setItem("token",result['token']);
        localStorage.setItem("role",result['role']);
      }
      return result;
    }));
  }
  autheriseAdmin(){
    if(localStorage.getItem('role')=='admin')
      return true;
    else
      return false;
  }
}
