import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddUserComponent} from './public/add-user/add-user.component';
import {SigninComponent} from './public/signin/signin.component';
import {HomeComponent} from './Authenticate/home/home.component';

export const appRoutes:Routes=[
    {path:'sign-up', component:AddUserComponent},
    {path:'sign-in',component:SigninComponent},
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'/sign-in',pathMatch:'full'},
    {path:'**',redirectTo:'/sign-in',pathMatch:'full'}
];