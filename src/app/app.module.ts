import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppService } from './__service/app.service';
import { LoginService } from './__service/login.service'
import { RegisterService } from './__service/register.service';
import { TokenService } from './__service/token.service';
import { UrnaService } from './__service/urna.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UrnaComponent } from './components/urna/urna.component';
import { SucessComponent } from './components/sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UrnaComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService, LoginService, RegisterService, TokenService, UrnaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
