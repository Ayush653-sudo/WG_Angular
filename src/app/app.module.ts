import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './common/snackbar/snackbar.component';
import { AuthInterceptor } from './Services/Authentication-interceptor.service';
import { SearchComponent } from './common/search/search.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: 
  [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
