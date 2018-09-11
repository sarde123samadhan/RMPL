import { Component, OnInit } from '@angular/core';
import {FormArray,FormControl,FormGroup} from '@angular/forms';
import {AuthService} from '../../services/AuthService/auth.service';
import {Router} from '@angular/router';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    });
  }

  loginUser(){
     console.log(this.loginForm.status);
     console.log(this.loginForm.value);
     this.authService.singIn(this.loginForm.value.email,this.loginForm.value.password).subscribe(result=>{
      if(result['success']==true){
        this.router.navigate(['home']);
      }else{
        this.router.navigate(['']);
      }
     });
  }

}
