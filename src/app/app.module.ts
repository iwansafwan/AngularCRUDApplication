import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [HomeComponent] // Specify your root component here
})
export class AppModule { }
