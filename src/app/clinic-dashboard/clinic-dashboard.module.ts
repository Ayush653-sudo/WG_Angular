import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDentistComponent } from './add-dentist/add-dentist.component';
import { CardModule } from 'primeng/card';
import { Router } from 'express';
import { RouterModule } from '@angular/router';




const routes = [

  {path:'clinic-dashboard',children:[
    {path:'',component:DashboardComponent}
    
  ]}

]


@NgModule({
  declarations: [
    DashboardComponent,
    AddDentistComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class ClinicDashboardModule { }
