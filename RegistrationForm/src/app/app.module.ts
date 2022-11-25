import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { RegisterServiceService } from './Serveces/register-service.service';
import { WelcomeComponent } from './Components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    RegisterServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
