import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';


const paths = [

  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent}

]


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    RouterModule.forChild(paths)
    
  ]
})
export class AuthenticationModule { }
