import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
   
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  
 import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
  import { AppRoutingModule , } from './app-routing.module';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
   ],
  imports: [
    BrowserModule, 
    AppRoutingModule,HttpClientModule,MaterialModule,
    BrowserAnimationsModule, FormsModule,ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 

export const routingComponents=[ 
 
   LoginComponent
   

]
