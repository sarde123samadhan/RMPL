/*Start of built in modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
/*End of built in modules */
/*Start of user defined stuff */
import {AdminModule} from './admin/admin.module';
import { AppComponent } from './app.component';
import {appRoutes} from './app-routing.module';
import { SigninComponent } from './public/signin/signin.component';
import {AddUserComponent} from './public/add-user/add-user.component';
import {AuthService} from './services/AuthService/auth.service';
import { HomeComponent } from './Authenticate/home/home.component';
import {UserService} from './services/UserService/user.service';
/*End of user defined stuff */
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AddUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
