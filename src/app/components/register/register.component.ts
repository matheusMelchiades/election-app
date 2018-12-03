import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../../__service/register.service';


@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})

export class RegisterComponent {
   
   registerForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirm: new FormControl(''),
   })
   
   constructor(private http: RegisterService) { }
   
   resp; 
   
   register() {
      let voter = toVoter(this.registerForm.value) 
      this.http.post(voter).subscribe(dados => {
         if(Object.keys(dados).length == 3){
            this.resp = 'register sucessfull'
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

function toVoter(obj) {
   return {
      name: `${obj.name} ${obj.lastName}`,
      email: obj.email,
      password: obj.password,
      passwordConfirm: obj.passwordConfirm,
   }
}