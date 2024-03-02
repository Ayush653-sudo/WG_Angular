import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../Services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('registrationForm')form:NgForm;
authenticationService = inject(AuthenticationService);
submitForm(){
    const data = {
      UserName:this.form.value.username,
      Password:this.form.value.password
    }
    this.authenticationService.userLogin(data);
    
   

   }
}
