import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../Services/Authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
 
@ViewChild('registrationForm')form:NgForm;
snackbarContent:string;
authenticationService = inject(AuthenticationService);
submitForm(){
  if(this.form.value.role=='Clinic Admin'){
    const data = {
    userName:this.form.value.username,
    password:this.form.value.password,
    emailAddress:this.form.value.email,
    phoneNumber:this.form.value.phoneNumber,
    clinicName:this.form.value.clinicName,
    description:this.form.value.description,
    clinicCity:this.form.value.clinicCity
    }
  this.authenticationService.registerClinicAdmin(data).subscribe({
               
    next:(result)=>{
      setTimeout(() => {
        this.snackbarContent = result;     
      }, 3000);
      this.snackbarContent = "";
    console.log(result);
   
    
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
   }
}
);;

  }
  else if(this.form.value.role=='Patient'){
    const data = {
      userName:this.form.value.username,
      password:this.form.value.password,
      emailAddress:this.form.value.email,
      phoneNumber:this.form.value.phoneNumber,
    }
    this.authenticationService.registerPatient(data);
  }

 


  }


}
