import { Component, OnInit } from '@angular/core';
import {RouterState} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FilterPipe} from '../../Filter/filter.pipe';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  backendURL=environment.backendURL;
  productDetails=[];
  searchText:string;
  display='none';
  updateFlag=true;
  deleteFlag=true;
  insertFlag=true;
  productForm= this.fb.group({
    id:[''],
    name:[''],
    price:[''],
    description:[''],
    categoryId:['']
  });
  constructor(private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit() {
    this.http.get(this.backendURL+"/display-products").subscribe(response=>{
      this.productDetails=response['result'];
    });
    
  }

  rowClick(rowEvent){
    console.log("Clicked: "+JSON.stringify(rowEvent));
    this.updateFlag=true;
    this.deleteFlag=true;
    this.insertFlag=false;
    this.openModalDialog();
    this.productForm= this.fb.group({
      id:[rowEvent._id],
      name:[rowEvent.name],
      price:[rowEvent.price],
      description:[rowEvent.description]
    });
  }

  openModalDialog(){
    console.log("Clicked...open");
    this.display='block'; //Set block css
 }

 closeModalDialog(){
  this.display='none'; //set none css after close dialog
 }

 updateProduct(product){
  console.log("Prodcut::",product);
  this.http.patch(this.backendURL+"/product-update/"+product.id,product).subscribe(data=>{
    console.log(JSON.stringify(data));
    if(data['message']){
      this.http.get(this.backendURL+"/display-products").subscribe(response=>{
        this.productDetails=response['result'];
      });
    }
  });
  this.closeModalDialog();
 }

 deleteProduct(product){
   this.http.delete(this.backendURL+'/product-delete/'+product.id).subscribe(data=>{
    console.log(JSON.stringify(data));
    if(data['status']==true){
      this.http.get(this.backendURL+"/display-products").subscribe(response=>{
        this.productDetails=response['result'];
      });
    }
   });
  this.closeModalDialog();
 }

 insertProductForm(){


   console.log("Insertion called successful");
   this.openModalDialog();
   this.updateFlag=false;
   this.deleteFlag=false;
   this.insertFlag=true;
   this.productForm= this.fb.group({
     id:[''],
     name:[''],
     price:[''],
     description:[''],
     categoryId:['']
   });
 }
 insertProduct(product){
   this.http.post(this.backendURL+"/product-insert",product).subscribe(resposne=>{
     if(resposne['status']==true){
        this.http.get(this.backendURL+"/display-products").subscribe(response=>{
          this.productDetails=response['result'];
        });
      }
   });
   this.closeModalDialog();
 }
}
