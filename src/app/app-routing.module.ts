import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './public/add-user/add-user.component';
import {SigninComponent} from './public/signin/signin.component';
import {HomeComponent} from './Authenticate/home/home.component';
import {AboutComponent}  from './Authenticate/about/about.component';
import {ServiceComponent}  from './Authenticate/service/service.component';
 import {ContactComponent}  from './Authenticate/contact/contact.component';

export const appRoutes:Routes=[
    {path:'sign-up', component:AddUserComponent},
    {path:'sign-in',component:SigninComponent},
    {path:'home',component:HomeComponent,data:{breadcrumb:'Home'}},
    {path:'about',component:AboutComponent,data:{breadcrumb:'About'}},
    {path:'service',component:ServiceComponent,data:{breadcrumb:'Services'}},
    {path:'contact',component:ContactComponent,data:{breadcrumb:'Contact'}},
    {path:'',redirectTo:'/sign-in',pathMatch:'full'},
    {path:'**',redirectTo:'/sign-in',pathMatch:'full'}
];