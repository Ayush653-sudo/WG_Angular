import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{
    http:HttpClient = inject(HttpClient);
    router: Router = inject(Router);
    user;
    registerClinicAdmin(task){
        
        return this.http.post(
            'https://localhost:44385/Auth/Register/Clinic', 
            task, {responseType:'text',withCredentials:true}
            )
            .pipe(catchError((err) => {
                //Write the logic to log errors
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
                console.log(err.message);
                // this.loggingService.logError(errorObj);
                 return throwError(() => err);
            }))
            
    }
    registerPatient(task){

        this.http.post(
            'https://localhost:44385/Auth/Register/Patient', 
            task , {responseType:'text',withCredentials:true}
            )
            .pipe(catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
                console.log(err.message);
                // this.loggingService.logError(errorObj);
                 return throwError(() => err);
            }))
            .subscribe({
               
                next:(result)=>{
                console.log(result);
            
                },
                error: (err) => 
                {
                console.log("Error aa gayi ");
               }
        }
            );


    }

    userLogin(data){
        this.http.post(
            'https://localhost:44385/Auth/Login', 
            data , {responseType:'text',withCredentials:true} 
            )
            .pipe(catchError((err) => {
                const errorObj = {statusCode: err.status, errorMessage: err.message, datetime: new Date()}
                console.log(err.message);
                // this.loggingService.logError(errorObj);
                 return throwError(() => err);
            }))
            .subscribe({
               
                next:(result)=>{
                console.log(result);
                const obj = JSON.parse(result);
                this.user = obj;
                if( obj.role === "ClinicAdmin"){
                   
                    this.router.navigate(['clinic-dashboard'])
                }
                
                },
                error: (err) => 
                {
                console.log("Error aa gayi ");
               }
        }
            );
    }

}