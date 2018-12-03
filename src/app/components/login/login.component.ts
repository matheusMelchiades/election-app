import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../__service/login.service'
import { TokenService } from 'src/app/__service/token.service';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
   });
   
   resp: string = '';
   constructor(private http: LoginService, private token: TokenService, private __App: AppComponent, private __router: Router) {}

   ngOnInit() {
   }

   login() {
      this.http.post(this.loginForm.value).subscribe(dados => {
         if (Object.keys(dados)[0] == "token") {
            this.resp = 'Login Sucessful!'            
            this.token.setToken(dados)
            this.__App.urna = !this.__App.urna;
            this.__router.navigate(['/urna'])
         }
     }, error => {
         if (error.error.message) {
            this.resp = error.error.message
         } else {
            this.resp = 'connection error'
         }
     })
   }
}
