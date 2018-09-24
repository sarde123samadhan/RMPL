import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthGuardGuard} from '../../auth/auth-guard.guard';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardTitle:string;
  itemPrice:string;
  cardText:string;
  cardFooter:string;
  cardDetails=[];
  categoryName:string;
  url=environment.backendURL;
  categories:any;
  constructor(private httpClient:HttpClient,private authGuard:AuthGuardGuard,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log("Activated Route:",this.route.snapshot);
    this.httpClient.get(this.url+'/display-product').subscribe(res=>{
      let response:any;
      response=res;
      let resultArray=response.result;
      for(let i=0;i<resultArray.length;i++){
        this.cardTitle=resultArray[i].name;
        this.itemPrice=resultArray[i].price;
        this.cardText=resultArray[i].description;
        this.cardFooter='&#9733; &#9733; &#9733; &#9733; &#9734';
        let obj={'cardTitle':this.cardTitle,'itemPrice':this.itemPrice,'cardText':this.cardText,'CardFooter':this.cardFooter};
        this.cardDetails.push(obj);
      }
    }
  );

  this.httpClient.get(this.url+'/display-category').subscribe(resp=>{
    let response:any;
    response=resp;
    this.categories=response.cat;
  });
}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }
  
}
