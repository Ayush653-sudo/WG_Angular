import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [

  {
    path:'',loadChildren : () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {path:'',loadChildren:() =>import('./clinic-dashboard/clinic-dashboard.module').then(m=>m.ClinicDashboardModule)
}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
