import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/UserService/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User=new User();
  month:string;
  day:string;
  year:string;
  date:Date;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }

  signUpUser(){
    this.date=new Date(Number.parseInt(this.year),Number.parseInt(this.month),Number.parseInt(this.day));
    this.user.dob=this.date;
    console.log(this.user);
    this.userService.signUp(this.user).subscribe(res=>{
      console.log("Result:",res);
      if(res["success"]==true){
        this.router.navigate(['/sign-in']);
      }else{
        this.router.navigate(['/sign-up']);
      }
    });;
  }

  monthValue(value){
    console.log("Month=>",value);
    this.month=value;
  }
  dayValue(value){
    console.log("day=>",value); 
    this.day=value; 
  }

  yearValue(value){
    console.log("Year=>",value);
    this.year=value;
  }
}
