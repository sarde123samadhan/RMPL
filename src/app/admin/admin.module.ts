import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular-6-datatable';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FilterPipe } from '../Filter/filter.pipe';

@NgModule({
  declarations: [AdminHomeComponent,FilterPipe],
  imports: [
    CommonModule,DataTableModule,
    AdminRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AdminModule { }
