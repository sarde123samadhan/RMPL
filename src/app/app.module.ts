/*Start of built in modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';
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
import { AboutComponent } from './Authenticate/about/about.component';
import { ServiceComponent } from './Authenticate/service/service.component';
import { ContactComponent } from './Authenticate/contact/contact.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {HeadComponent} from './head/head.component';

/*End of user defined stuff */
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AddUserComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    BreadcrumbComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule,AdminModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
